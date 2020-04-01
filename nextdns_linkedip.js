//Script event auto linked ipv4 nextdns: network-change

$httpClient.post('https://link-ip.nextdns.io/5de344/c53f01edaaa9dd9c', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
