from typing import List
from dataclasses import dataclass
import json

@dataclass
class DataclassObject():
    str_field: str
    int_field: int
    float_field: float
    boolean_field: bool
    list_field: List[str]

from openapi_specgen.schema import get_openapi_schema
schema = get_openapi_schema(DataclassObject, reference=False)

# print to stdout
print(json.dumps(schema, indent = 2))