# OpenAPI CLI

For simplicity, here an example based on [restish](https://rest.sh/) a generic OpenAPI CLI tool.

Install it as described [here](https://rest.sh/#/guide?id=installation)

Put the following in `~/.restish/apis.json`

```json
{
  "scratchpad": {
    "base": "API Gateway",
    "spec_files": [
      "/path/to/api.yaml"
    ]
  }
}
```

With that in place, you're good to go. Give it a try! (that's based on this [api spec](./api.yaml) from an [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-export-api.html))

```
 restish scratchpad

  https://gspm6xfeo2.execute-api.eu-central-1.amazonaws.com



Usage:
  restish scratchpad [flags]
  restish scratchpad [command]

Available Commands:
  create-foo  Create some foo stuff
  short-url   Create some url stuff

Flags:
  -h, --help   help for scratchpad
```

Where a command could look like this

```
restish scratchpad create-foo foo: bar
HTTP/2.0 400 Bad Request
Content-Length: 308
Content-Type: application/json
Date: Mon, 14 Nov 2022 13:31:21 GMT
Via: 1.1 f7aba4a0337c5f98c4703e2b10f1940a.cloudfront.net (CloudFront)
X-Amz-Apigw-Id: bl9ujGCeFiAFumQ=
X-Amz-Cf-Id: 66OGt7mWLr8Ir8Pwuyi7-qvFeGl-Kzu5eNZPLrUESCrSG9GPUq-rgA==
X-Amz-Cf-Pop: FRA60-P4
X-Amzn-Errortype: BadRequestException
X-Amzn-Requestid: fde3e3d8-19d2-4a7e-ac67-b127c21837f0
X-Amzn-Trace-Id: Root=1-63724329-55b9640d4ddecc1612f65cbd
X-Cache: Error from cloudfront

{
  detail: "[object has missing required properties ([\"bar\"]), object instance has properties which are not allowed by the schema: [\"foo\"]]"
  message: "Invalid request body"
  resourcePath: "/Foo"
  stage: "live"
  statusCode: "'400'"
  type: "BAD_REQUEST_BODY"
}
```

## Generating CLIs

A generic CLI handler is super useful to get started quickly. For a better UX generating a completely customized CLI would be totally possible. Restish is the successor of [openapi-cli-generator](https://github.com/danielgtaylor/openapi-cli-generator). Here's also a [blog post](https://nordicapis.com/auto-generating-a-cli-from-openapi-specification/) getting in more details.