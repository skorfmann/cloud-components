terraform {
  required_providers {
    scratchpad = {
      source = "terraform.skorfmann.com/foo/scratchpad"
      version = "3.0.0"
    }
  }
}

provider "scratchpad" {
  # This is the default, but you can override it
  # if you want to use a different endpoint
  url = "http://localhost:8080"
}

resource "scratchpad_foo" "my_foo" {
  bar = "my_bar"
}

