# Harvest OpenAPI Schema from a Python Dataclass

Install [openapi-specgen](https://github.com/GabrielCappelli/openapi-specgen/)

```
pip3 install openapi-specgen
```

## Example

Given the following Dataclass

```py
@dataclass
class DataclassObject():
    str_field: str
    int_field: int
    float_field: float
    boolean_field: bool
    list_field: List[str]

```

Run

```
python3 main.py
```

Get a JSON API schema

```json
{
  "DataclassObject": {
    "title": "DataclassObject",
    "required": [
      "str_field",
      "int_field",
      "float_field",
      "boolean_field",
      "list_field"
    ],
    "type": "object",
    "properties": {
      "str_field": {
        "type": "string"
      },
      "int_field": {
        "type": "integer"
      },
      "float_field": {
        "type": "number"
      },
      "boolean_field": {
        "type": "boolean"
      },
      "list_field": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  }
}
```