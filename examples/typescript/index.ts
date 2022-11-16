import { getTypeScriptReader, getOpenApiWriter, makeConverter } from 'typeconv'
import * as Convert from 'api-spec-converter'
import * as fs from 'fs';
import * as path from 'path';

export interface UrlShortener {
  readonly domainName?: string;
}

const t = `export interface UrlShortener {
  readonly domainName?: string;
}

export interface Foo {
  readonly bar: string;
}`

const resources = {
  Foo: {
    type: `export interface Foo {
      readonly bar: string;
    }`,
    integration: {
      "post": {
        "x-amazon-apigateway-integration": {
          "type": "AWS_PROXY",
          "httpMethod": "POST",
          "uri": "arn:${AWS::Partition}:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/{{FooFunctionName}}/invocations",
          "payloadFormatVersion": "1.0"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Foo"
              }
            }
          }
        }
      }
    }
  },
  UrlShortener: {
    type: `export interface UrlShortener {
      readonly domainName?: string;
    }`,
    integration: {
      "post": {
        "x-amazon-apigateway-integration": {
          "type": "AWS_PROXY",
          "httpMethod": "POST",
          "uri": "<URL_SHORTENER_HANDLER>",
          "payloadFormatVersion": "1.0"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UrlShortener"
              }
            }
          }
        }
      }
    }
  }
}

const types: string[] = []
const paths: Record<string, any> = {}

for (const [name, resource] of Object.entries(resources)) {
  types.push(resource.type)
  paths[`/${name}`] = resource.integration
}

const reader = getTypeScriptReader( );
const writer = getOpenApiWriter( {
  format: 'json',
  title: 'SkyBase API',
  version: '0.1.0',
  schemaVersion: '3.0.0',
} );

(async () => {
  const { data } = await makeConverter(reader, writer).convert( { data: types.join("\n") } );
  const openApi = JSON.parse(data)
  openApi.paths = paths

  const filePath = path.join(__dirname, 'openapi-3.json')
  fs.writeFileSync(filePath, JSON.stringify(openApi, null, 2));

  const output = await Convert.convert({
    from: 'openapi_3',
    to: 'swagger_2',
    source: filePath,
  })

  fs.writeFileSync(path.join(__dirname, 'swagger-2.json'), JSON.stringify(output, null, 2));
})();