/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V2paymentsPaymentInformationFluidData = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2paymentsPaymentInformationFluidData model module.
   * @module model/V2paymentsPaymentInformationFluidData
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsPaymentInformationFluidData</code>.
   * @alias module:model/V2paymentsPaymentInformationFluidData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V2paymentsPaymentInformationFluidData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsPaymentInformationFluidData} obj Optional instance to populate.
   * @return {module:model/V2paymentsPaymentInformationFluidData} The populated <code>V2paymentsPaymentInformationFluidData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('descriptor')) {
        obj['descriptor'] = ApiClient.convertToType(data['descriptor'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }

  /**
   * TBD
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Format of the encrypted payment data.
   * @member {String} descriptor
   */
  exports.prototype['descriptor'] = undefined;
  /**
   * The encrypted payment data value. If using Apple Pay or Samsung Pay, the values are:   - Apple Pay: RklEPUNPTU1PTi5BUFBMRS5JTkFQUC5QQVlNRU5U   - Samsung Pay: RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ= 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Encoding method used to encrypt the payment data.  Possible value: Base64 
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;



  return exports;
}));

