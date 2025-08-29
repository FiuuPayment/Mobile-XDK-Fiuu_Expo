<!--
 # license: Copyright © 2020 Razer Merchant Services. All Rights Reserved. 
 -->

<img src="https://user-images.githubusercontent.com/38641542/74424311-a9d64000-4e8c-11ea-8d80-d811cfe66972.jpg">

# fiuu-mobile-xdk-expo

This is Fiuu React Native-Expo payment module that is ready to be implemented into any React Native-Expo project npm install module. An example application project 
(FiuuExpoExampleProject) is provided for Fiuu XDK framework integration reference.

## Recommended configurations

- Node.js Version: 18.20.5++

- Java Version: 21.0.7

- Minimum Android SDK Version: 26 ++

- Minimum Android API level: 19 ++

- Minimum Android target version: Android 11

- Minimum React Navtive version : 0.76 ++

- Xcode version: 15 ++

- Minimum target version: iOS 16

# Installation 

### Add the package to your npm dependencies

```
npm install fiuu-mobile-xdk-expo
```

# Prepare the Payment detail object

```
var paymentDetails = {
    // Optional, REQUIRED when use online Sandbox environment and account credentials.
    'mp_dev_mode': false,

    // Mandatory String. Values obtained from Razer Merchant Services.
    'mp_username' : 'username',
    'mp_password' : 'password',
    'mp_merchant_ID' : 'merchantid',
    'mp_app_name' : 'appname',
    'mp_verification_key' : 'vkey123', 

    // Mandatory String. Payment values.
    'mp_amount' : '1.10',, // Minimum 1.01
    'mp_order_ID' : 'orderid123', 
    'mp_currency' : 'MYR',
    'mp_country' : 'MY',  
    
    // Optional String.
    'mp_channel' : '', // Use 'multi' for all available channels option. For individual channel seletion, please refer to https://github.com/RazerMS/molpay-mobile-xdk-examples/blob/master/channel_list.tsv.
    'mp_bill_description' : '',
    'mp_bill_name' : '',
    'mp_bill_email' : '',
    'mp_bill_mobile' : '',
    'mp_channel_editing' : false, // Option to allow channel selection.
    'mp_editing_enabled' : false, // Option to allow billing information editing.
    
    // Optional, but required payment values. User input will be required when values not passed.
    'mp_channel' : 'multi', // Use 'multi' for all available channels option. For individual channel seletion, please refer to https://github.com/RazerMS/molpay-mobile-xdk-examples/blob/master/channel_list.tsv.
    'mp_bill_description' : 'billdesc',
    'mp_bill_name' : 'billname',
    'mp_bill_email' : 'email@domain.com',
    'mp_bill_mobile' : '+1234567',

    // Optional, allow channel selection. 
    'mp_channel_editing' : false,

    // Optional, allow billing information editing.
    'mp_editing_enabled' : false,

    // Optional, for Escrow.
    'mp_is_escrow': '0', // Put "1" to enable escrow

    // Optional, for credit card BIN restrictions and campaigns.
    'mp_bin_lock' : ['414170', '414171'],   

    // Optional, for mp_bin_lock alert error.
    'mp_bin_lock_err_msg': 'Only UOB allowed',
    
    // WARNING! FOR TRANSACTION QUERY USE ONLY, DO NOT USE THIS ON PAYMENT PROCESS.
    // Optional, provide a valid cash channel transaction id here will display a payment instruction screen. Required if mp_request_type is 'Receipt'.
    'mp_transaction_id': '',
    // Optional, use 'Receipt' for Cash channels, and 'Status' for transaction status query.
    'mp_request_type': '',

    // Optional, use this to customize the UI theme for the payment info screen, the original XDK custom.css file can be obtained at https://github.com/RazerMS/molpay-mobile-xdk-examples/blob/master/custom.css.
    'mp_custom_css_url': '',

    // Optional, set the token id to nominate a preferred token as the default selection, set "new" to allow new card only.
    'mp_preferred_token': '',

    // Optional, credit card transaction type, set "AUTH" to authorize the transaction.
    'mp_tcctype': '',

    // Optional, required valid credit card channel, set true to process this transaction through the recurring api, please refer the Razer Merchant Services Recurring API pdf. 
    'mp_is_recurring': false,

    // Optional, show nominated channels.
    'mp_allowed_channels': ['credit', 'credit3'],

    // Optional, simulate offline payment, set boolean value to enable. 
    'mp_sandbox_mode': true,

    // Optional, required a valid mp_channel value, this will skip the payment info page and go direct to the payment screen.
    'mp_express_mode': true,

    // Optional, extended email format validation based on W3C standards.
    'mp_advanced_email_validation_enabled': true,

    // Optional, extended phone format validation based on Google i18n standards.
    'mp_advanced_phone_validation_enabled': true,

    // Optional, explicitly force disable user input.
    'mp_bill_name_edit_disabled': true,
    'mp_bill_email_edit_disabled': true,
    'mp_bill_mobile_edit_disabled': true,
    'mp_bill_description_edit_disabled': true,

    // Optional, EN, MS, VI, TH, FIL, MY, KM, ID, ZH.
    'mp_language': 'EN',

    // Optional, Cash channel payment request expiration duration in hour.
    'mp_cash_waittime': 48,
    
    // Optional, allow bypass of 3DS on some credit card channels.
    'mp_non_3DS': true,

    // Optional, disable card list option.
    'mp_card_list_disabled': true,

    // Optional for channels restriction, this option has less priority than mp_allowed_channels.
    'mp_disabled_channels': ['credit']  

    // Optional for displaying Close button
    'mp_display_closebutton': true, 

    // Optional for enabling Fiuu XDK in full screen
    'mp_enable_fullscreen': true,

    // Optional for enabling Classic Webcore
    'mp_classic_webcore': true,
    
};
```
# Start the payment module

```
//import Fiuu package
import { startMolpay } from 'fiuu-mobile-xdk-expo';

//start payment
startMolpay(paymentDetails, (result: any) => {
    console.log('Fiuu Payment Result:', result);
    Alert.alert('Payment Result', JSON.stringify(result));
});
```

# Google Pay integration

Prepare paymentDetails :

```
// TODO: Add these on Google Pay tap action

var paymentDetails = {
    /*
    TODO: Follow Google’s instructions to request production access for your app: https://developers.google.com/pay/api/android/guides/test-and-deploy/request-prod-access
    *
    Choose the integration type Gateway when prompted, and provide screenshots of your app for review.
    After your app has been approved, test your integration in production by set mp_sandbox_mode = false & use production mp_verification_key & mp_merchant_ID.
    Then launching Google Pay from a signed, release build of your app.
    */
    'mp_sandbox_mode': true,
    
    // TODO : Enter your credentials
    'mp_merchant_ID': '',
    'mp_verification_key': '',
    
    'mp_order_ID': 'order1234567890', // Unique order id
    'mp_currency': 'MYR',
    'mp_country': 'MY',
    
    'mp_amount': '1.23', // Minimum 1.00 must be in 2 decimal points format
    'mp_bill_description': 'Test Google Pay',
    'mp_bill_name': 'Google Pay',
    'mp_bill_email': 'testing@gmail.com',
    'mp_bill_mobile': '123456789',
    
    'mp_gpay_channel': ['SHOPEEPAY', 'TNG-EWALLET', 'CC'],
    
    'mp_extended_vcode': false, // Optional : Set true if your account enabled extended Verify Payment
};
```

```
//start payment
startMolpay(paymentDetails, (result: any) => {
    console.log('Fiuu Payment Result:', result);
    Alert.alert('Payment Result', JSON.stringify(result));
});
```

## XDK built-in checksum validator caveats 

    All XDK come with a built-in checksum validator to validate all incoming checksums and return the validation result through the "mp_secured_verified" parameter. However, this mechanism will fail and always return false if merchants are implementing the private secret key (which the latter is highly recommended and prefereable.) If you would choose to implement the private secret key, you may ignore the "mp_secured_verified" and send the checksum back to your server for validation. 

## Private Secret Key checksum validation formula

    chksum = MD5(mp_merchant_ID + results.msgType + results.txn_ID + results.amount + results.status_code + merchant_private_secret_key)

## Support

Submit issue to this repository or email to our support-sa@fiuu.com

Merchant Technical Support / Customer Care : support@fiuu.com<br>
Sales/Reseller Enquiry : sales@fiuu.com<br>
Marketing Campaign : marketing@fiuu.com<br>
Channel/Partner Enquiry : channel@fiuu.com<br>
Media Contact : media@fiuu.com<br>
R&D and Tech-related Suggestion : technical@fiuu.com<br>
Abuse Reporting : abuse@fiuu.com