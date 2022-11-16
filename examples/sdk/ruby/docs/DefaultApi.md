# ScratchpadApi::DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**foo_post**](DefaultApi.md#foo_post) | **POST** /Foo |  |
| [**url_shortener_post**](DefaultApi.md#url_shortener_post) | **POST** /UrlShortener |  |


## foo_post

> foo_post(opts)



### Examples

```ruby
require 'time'
require 'scratchpad-api'

api_instance = ScratchpadApi::DefaultApi.new
opts = {
  foo: ScratchpadApi::Foo.new({bar: 'bar_example'}) # Foo | 
}

begin
  
  api_instance.foo_post(opts)
rescue ScratchpadApi::ApiError => e
  puts "Error when calling DefaultApi->foo_post: #{e}"
end
```

#### Using the foo_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> foo_post_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.foo_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue ScratchpadApi::ApiError => e
  puts "Error when calling DefaultApi->foo_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **foo** | [**Foo**](Foo.md) |  | [optional] |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## url_shortener_post

> url_shortener_post(opts)



### Examples

```ruby
require 'time'
require 'scratchpad-api'

api_instance = ScratchpadApi::DefaultApi.new
opts = {
  url_shortener: ScratchpadApi::UrlShortener.new # UrlShortener | 
}

begin
  
  api_instance.url_shortener_post(opts)
rescue ScratchpadApi::ApiError => e
  puts "Error when calling DefaultApi->url_shortener_post: #{e}"
end
```

#### Using the url_shortener_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> url_shortener_post_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.url_shortener_post_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue ScratchpadApi::ApiError => e
  puts "Error when calling DefaultApi->url_shortener_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url_shortener** | [**UrlShortener**](UrlShortener.md) |  | [optional] |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

