/*
itranslate
https://ssl-api.itranslateapp.com/accounts/v4/subscriptions/verify/ios
*/

var obj = JSON.parse($response.body);
obj = {"licenses":[{"bundle_id":"com.outerspaceapps.itranslate","expires_date_ms":4587114775000,"is_trial_period":true,"original_transaction_id":"160000714859958","product_id":"com.itranslate.pro.monthly","transaction_id":"160000714859958"},{"bundle_id":"com.outerspaceapps.itranslate","expires_date_ms":4587114775000,"is_trial_period":true,"original_transaction_id":"160000714859958","product_id":"com.itranslate.pro.monthly","transaction_id":"160000714859958"}]}
$done({body: JSON.stringify(obj)});
