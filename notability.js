/*
Notability Premium Unlock
By @RuyeNet
QX:
https:\/\/notability.com\/subscriptions url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/notability.js
Surge4：
http-response https:\/\/notability.com\/subscriptions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/notability.js
Surge & QX MITM = notability.com
*/


let obj = JSON.parse($response.body);
obj = {
	'data': {
		'processAppleReceipt': {
			'__typename': 'SubscriptionResult',
			'error': 0,
			'subscription': {
				'__typename': 'AppStoreSubscription',
				'status': 'active',
				'originalPurchaseDate': '2021-11-01T17:55:01.000Z',
				'originalTransactionId': '1',
				'expirationDate': '9999-12-30T18:55:00.000Z',
				'productId': 'com.gingerlabs.Notability.premium_subscription',
				'tier': 'premium',
				'refundedDate': null,
				'refundedReason': null,
				'user': null
			}
		}
	}
};
$done({
	'body': JSON.stringify(obj)
})
