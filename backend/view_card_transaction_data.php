<?php
session_start();
$access_token = $_SESSION['access_token'];
$transaction = $_GET['transaction'];

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL,"https://api-sandbox.starlingbank.com/api/v1/transactions/mastercard/$transaction");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10000);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer $access_token",
));

//execute post
$transactions = curl_exec($ch);

curl_close($ch);

header("Content-type:application/json");
echo $transactions;

?>