<?php
require_once "../config.php";

$customer_url = 'https://api-sandbox.starlingbank.com/api/v1/customers';
$access_token = $_GET['access_token'];

    //open connection' 
    $ch = curl_init();

    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL,$customer_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10000);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Authorization: Bearer $access_token",
    ));

    //execute post
    $content = curl_exec($ch);
    
    curl_close($ch);
    
    //echo $content;
    $user_data = json_decode($content, true);

    $fname = $user_data['firstName'];
    $sname = $user_data['lastName'];
    $uid = $user_data['customerUid'];

    echo "FNAME: $fname --- SNAME: $sname --- UID: $uid";

    $dsn = "mysql:host=" . $config['DB_HOST'] . ";dbname=" . $config['DB_DATABASE'] . ";charset=utf8mb4";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $config['DB_USER'], $config['DB_PASSWORD'], $opt);
    $sql = 'REPLACE INTO users SET uid = ?, token = ?, fname = ?, sname = ?';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$uid, $access_token, $fname, $sname]);

    session_start();
    $_SESSION['access_token'] = $access_token;
    $_SESSION['name'] = $fname . ' ' . $sname;

