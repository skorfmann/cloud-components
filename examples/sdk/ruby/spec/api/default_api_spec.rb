=begin
#SkyBase API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.2.1

=end

require 'spec_helper'
require 'json'

# Unit tests for ScratchpadApi::DefaultApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'DefaultApi' do
  before do
    # run before each test
    @api_instance = ScratchpadApi::DefaultApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of DefaultApi' do
    it 'should create an instance of DefaultApi' do
      expect(@api_instance).to be_instance_of(ScratchpadApi::DefaultApi)
    end
  end

  # unit tests for foo_post
  # @param [Hash] opts the optional parameters
  # @option opts [Foo] :foo 
  # @return [nil]
  describe 'foo_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for url_shortener_post
  # @param [Hash] opts the optional parameters
  # @option opts [UrlShortener] :url_shortener 
  # @return [nil]
  describe 'url_shortener_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
