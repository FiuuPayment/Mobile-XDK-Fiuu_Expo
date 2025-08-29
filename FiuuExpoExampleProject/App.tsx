import { startMolpay } from 'fiuu-mobile-xdk-expo';
import { Alert, Button, Platform, Text, View } from 'react-native';

export default function App() {

  const now = new Date();
  var orderId = now.toLocaleString();

  const handleFiuuPayment = async () => {
    const paymentDetails = {
      "mp_username": "",
      "mp_password": "",
      "mp_merchant_ID": "",
      "mp_app_name": "",
      "mp_verification_key": '',
      // TODO: Enter mandatory String
      "mp_order_ID": orderId, // Unique order id
      "mp_currency": "",
      "mp_country": "",
      "mp_amount":
        "0.10", // Minimum 1.01 must be in 2 decimal points format
      "mp_channel": 'multi', // TNG-EWALLET multi = all channels
      // 'mp_allowed_channels': ['RPP_RTP_CIMBCLICKS', 'RPP_RTP_MB2U', 'RPP_RTP_MBSB'],
      "mp_bill_description": "bill description",
      "mp_bill_name": "bill name",
      "mp_bill_email": "example@gmail.com",
      "mp_bill_mobile": "0123456789",
      "mp_express_mode": false,
      "mp_closebutton_display": true,
      // "mp_enable_fullscreen": true,
      // "mp_classic_webcore": false,
    };

    startMolpay(paymentDetails, (result: any) => {
      console.log('Fiuu Payment Result:', result);
      Alert.alert('Payment Result', JSON.stringify(result));
    });
  };

  const handleGooglePay = async () => {
    const now = new Date();

    const paymentDetails = {
      'mp_sandbox_mode': false,

      // TODO : Enter your credentials
      "mp_merchant_ID": "",
      "mp_verification_key": '',

      'mp_order_ID': orderId,
      'mp_currency': '',
      'mp_country': '',

      'mp_amount': '1.01', // Minimum 1.00 must be in 2 decimal points format
      'mp_bill_description': 'Test Google Pay',
      'mp_bill_name': 'GPay',
      'mp_bill_email': 'example@gmail.com',
      'mp_bill_mobile': '123456789',
      'mp_gpay_channel': ['SHOPEEPAY', 'TNG-EWALLET', 'CC'],
      'mp_extended_vcode': false,  // Optional : Set true if your account enabled extended Verify Payment
    };

    startMolpay(paymentDetails, (result: any) => {
      console.log('Fiuu Payment Result:', result);
      Alert.alert('Payment Result', JSON.stringify(result));
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginBottom: 16 }}>
        <Button title="Start Molpay" onPress={handleFiuuPayment} />
      </View>

      {Platform.OS === 'android' && (
        <View style={{ marginTop: 16 }}>
          <Button title="Start Google Pay" onPress={handleGooglePay} />
        </View>
      )}
    </View>
  );

}
