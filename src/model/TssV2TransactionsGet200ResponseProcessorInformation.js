/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAvs', 'model/Riskv1decisionsCardVerification', 'model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults', 'model/TssV2TransactionsGet200ResponseProcessorInformationProcessor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseProcessorInformationAchVerification'), require('./PtsV2PaymentsPost201ResponseProcessorInformationAvs'), require('./Riskv1decisionsCardVerification'), require('./TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults'), require('./TssV2TransactionsGet200ResponseProcessorInformationProcessor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseProcessorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationAchVerification, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationAvs, root.CyberSource.Riskv1decisionsCardVerification, root.CyberSource.TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults, root.CyberSource.TssV2TransactionsGet200ResponseProcessorInformationProcessor);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseProcessorInformationAchVerification, PtsV2PaymentsPost201ResponseProcessorInformationAvs, Riskv1decisionsCardVerification, TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults, TssV2TransactionsGet200ResponseProcessorInformationProcessor) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessorInformation model module.
   * @module model/TssV2TransactionsGet200ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessorInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessorInformation} The populated <code>TssV2TransactionsGet200ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processor')) {
        obj['processor'] = TssV2TransactionsGet200ResponseProcessorInformationProcessor.constructFromObject(data['processor']);
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('networkTransactionId')) {
        obj['networkTransactionId'] = ApiClient.convertToType(data['networkTransactionId'], 'String');
      }
      if (data.hasOwnProperty('responseId')) {
        obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
      }
      if (data.hasOwnProperty('providerTransactionId')) {
        obj['providerTransactionId'] = ApiClient.convertToType(data['providerTransactionId'], 'String');
      }
      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('avs')) {
        obj['avs'] = PtsV2PaymentsPost201ResponseProcessorInformationAvs.constructFromObject(data['avs']);
      }
      if (data.hasOwnProperty('cardVerification')) {
        obj['cardVerification'] = Riskv1decisionsCardVerification.constructFromObject(data['cardVerification']);
      }
      if (data.hasOwnProperty('achVerification')) {
        obj['achVerification'] = PtsV2PaymentsPost201ResponseProcessorInformationAchVerification.constructFromObject(data['achVerification']);
      }
      if (data.hasOwnProperty('electronicVerificationResults')) {
        obj['electronicVerificationResults'] = TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults.constructFromObject(data['electronicVerificationResults']);
      }
      if (data.hasOwnProperty('systemTraceAuditNumber')) {
        obj['systemTraceAuditNumber'] = ApiClient.convertToType(data['systemTraceAuditNumber'], 'String');
      }
      if (data.hasOwnProperty('responseCodeSource')) {
        obj['responseCodeSource'] = ApiClient.convertToType(data['responseCodeSource'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessorInformationProcessor} processor
   */
  exports.prototype['processor'] = undefined;
  /**
   * Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this value. 
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} networkTransactionId
   */
  exports.prototype['networkTransactionId'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} responseId
   */
  exports.prototype['responseId'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} providerTransactionId
   */
  exports.prototype['providerTransactionId'] = undefined;
  /**
   * Authorization code. Returned only when the processor returns this value. 
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;
  /**
   * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  Important Do not use this field to evaluate the result of the authorization. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs} avs
   */
  exports.prototype['avs'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsCardVerification} cardVerification
   */
  exports.prototype['cardVerification'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification} achVerification
   */
  exports.prototype['achVerification'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults} electronicVerificationResults
   */
  exports.prototype['electronicVerificationResults'] = undefined;
  /**
   * This field is returned only for **American Express Direct** and **CyberSource through VisaNet**.  **American Express Direct**  System trace audit number (STAN). This value identifies the transaction and is useful when investigating a chargeback dispute.  **CyberSource through VisaNet**  System trace number that must be printed on the customer’s receipt. 
   * @member {String} systemTraceAuditNumber
   */
  exports.prototype['systemTraceAuditNumber'] = undefined;
  /**
   * Used by Visa only and contains the response source/reason code that identifies the source of the response decision. 
   * @member {String} responseCodeSource
   */
  exports.prototype['responseCodeSource'] = undefined;



  return exports;
}));


