# CyberSource.ReversalApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authReversal**](ReversalApi.md#authReversal) | **POST** /pts/v2/payments/{id}/reversals | Process an Authorization Reversal
[**mitReversal**](ReversalApi.md#mitReversal) | **POST** /pts/v2/reversals/ | Merchant Initiated Reversal


<a name="authReversal"></a>
# **authReversal**
> PtsV2PaymentsReversalsPost201Response authReversal(id, authReversalRequest)

Process an Authorization Reversal

Include the payment ID in the POST request to reverse the payment amount.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReversalApi();

var id = "id_example"; // String | The payment ID returned from a previous payment request.

var authReversalRequest = new CyberSource.AuthReversalRequest(); // AuthReversalRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authReversal(id, authReversalRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The payment ID returned from a previous payment request. | 
 **authReversalRequest** | [**AuthReversalRequest**](AuthReversalRequest.md)|  | 

### Return type

[**PtsV2PaymentsReversalsPost201Response**](PtsV2PaymentsReversalsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="mitReversal"></a>
# **mitReversal**
> PtsV2PaymentsReversalsPost201Response mitReversal(mitReversalRequest)

Merchant Initiated Reversal

This is to reverse a previous payment that merchant does not receive a reply.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReversalApi();

var mitReversalRequest = new CyberSource.MitReversalRequest(); // MitReversalRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mitReversal(mitReversalRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mitReversalRequest** | [**MitReversalRequest**](MitReversalRequest.md)|  | 

### Return type

[**PtsV2PaymentsReversalsPost201Response**](PtsV2PaymentsReversalsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

