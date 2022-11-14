# OpenAPI Terraform

For simplicity, here an example based on the Terraform [OpenAPI Provider](https://github.com/dikhan/terraform-provider-openapi) a generic OpenAPI Terraform provider.

Install it as described [here](https://github.com/dikhan/terraform-provider-openapi/blob/master/docs/installing_openapi_provider.md).

The gist:

```
curl -fsSL https://raw.githubusercontent.com/dikhan/terraform-provider-openapi/master/scripts/install.sh | bash -s -- --provider-name "scratchpad" --provider-source-address "terraform.skorfmann.com/foo"
```

With that in place, you're good to go. Give it a try! (that's based on this [api spec](./api.yaml) from an [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-export-api.html))

```
export TF_LOG=trace
terraform init
OTF_VAR_scratchpad_SWAGGER_URL="/path/to/api.yaml" terraform plan
```

## Doesn't work right now, since the provider is relying on OpenAPI 2.0 specs.

OpenAPI 2.0 specs could potentially be generated alongside OpenAPI 3.0 specs. Not sure though, to what extent the APIs would be compatible. Better approach might be to push for [3.0 support](https://github.com/dikhan/terraform-provider-openapi/issues/179) - There's even an early [draft PR](https://github.com/dikhan/terraform-provider-openapi/pull/320)