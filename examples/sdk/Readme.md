# Generate SDKs

[OpenAPI Generator](https://openapi-generator.tech/) can be used to generate a wide variety of customizable [client SDKs])https://github.com/OpenAPITools/openapi-generator/tree/master/samples/client/petstore) and [servers](https://github.com/OpenAPITools/openapi-generator/tree/master/samples/server/petstore).

Here's an example for generating a Ruby client from an [OpenAPI 3.0 spec](../typescript/openapi-3.json)

Make sure to install the [cli](https://openapi-generator.tech/docs/installation)

```
 openapi-generator generate -i ../typescript/openapi-3.json -g ruby -o ./ruby --skip-validate-spec --additional-properties=gemName=scratchpad-api
 ```