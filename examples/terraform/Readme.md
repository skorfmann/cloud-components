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
OTF_VAR_scratchpad_SWAGGER_URL="/Users/sebastian/projects/skybase/scratchpad/examples/terraform/api.json" terraform plan
```

This should lead to something like the following:

```
Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # scratchpad_foo.my_foo will be created
  + resource "scratchpad_foo" "my_foo" {
      + bar = "my_bar"
      + id  = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```


Notes:

- The resource name (api path) needs to lowercase
- Needs to implement at least post / get
- Host needs to be [set in spec](https://github.com/dikhan/terraform-provider-openapi/blob/master/docs/how_to.md)

<details>
<summary>Terraform Proivder Schema</summary>

```json
{
  "format_version": "1.0",
  "provider_schemas": {
    "terraform.skorfmann.com/foo/scratchpad": {
      "provider": {
        "version": 0,
        "block": {
          "block_types": {
            "endpoints": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "foo": {
                    "type": "string",
                    "description": "Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).\n",
                    "description_kind": "plain",
                    "optional": true
                  }
                },
                "description_kind": "plain"
              }
            }
          },
          "description_kind": "plain"
        }
      },
      "resource_schemas": {
        "scratchpad_foo": {
          "version": 0,
          "block": {
            "attributes": {
              "bar": {
                "type": "string",
                "description_kind": "plain",
                "required": true
              },
              "id": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              }
            },
            "block_types": {
              "timeouts": {
                "nesting_mode": "single",
                "block": {
                  "attributes": {
                    "default": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                }
              }
            },
            "description_kind": "plain"
          }
        }
      },
      "data_source_schemas": {
        "scratchpad_foo_instance": {
          "version": 0,
          "block": {
            "attributes": {
              "bar": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "id": {
                "type": "string",
                "description_kind": "plain",
                "required": true
              }
            },
            "description_kind": "plain"
          }
        }
      }
    }
  }
}
```

</details>

## OpenAPI 2.0 specs only

OpenAPI 3.0 specs can be transformed to Swagger 2.0 via [api-spec-converter](https://github.com/LucyBot-Inc/api-spec-converter).

OpenAPI 2.0 specs could potentially be generated alongside OpenAPI 3.0 specs as well. Better approach might be to push for [3.0 support](https://github.com/dikhan/terraform-provider-openapi/issues/179) - There's even an early [draft PR](https://github.com/dikhan/terraform-provider-openapi/pull/320)