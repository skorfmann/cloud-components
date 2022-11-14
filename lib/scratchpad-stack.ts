import * as cdk from 'aws-cdk-lib';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions'
import * as api from 'aws-cdk-lib/aws-apigateway';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as js from 'aws-cdk-lib/aws-lambda-nodejs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as fs from 'fs'
import * as path from 'path'
import * as Mustache from 'mustache';

export class ScratchpadStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new js.NodejsFunction(this, 'handler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      logRetention: logs.RetentionDays.ONE_DAY,
    });


    const variables = {
      FooFunctionName: fn.functionArn,
    }

    const defintions = fs.readFileSync(path.join(__dirname, 'spec.json'), 'utf8')
    const rendered = this.resolve(Mustache.render(defintions, variables))

    const rest = new api.SpecRestApi(this, 'scratchpad-api', {
      apiDefinition: api.ApiDefinition.fromInline(rendered),
      cloudWatchRole: true,
      deployOptions: {
        stageName: 'live',
        tracingEnabled: true,
        loggingLevel: api.MethodLoggingLevel.INFO,
        dataTraceEnabled: true,
        accessLogDestination: new api.LogGroupLogDestination(new logs.LogGroup(this, 'scratchpad-api-logs')),
        accessLogFormat: api.AccessLogFormat.jsonWithStandardFields(),
      },
    });

    fn.grantInvoke(new iam.ServicePrincipal('apigateway.amazonaws.com', {conditions: {ArnLike: {'aws:SourceArn': rest.arnForExecuteApi()}}}));
  }
}