<?php
    $authcode = $_GET['code'];
 
// Get auth token
    $url = 'https://api-sandbox.starlingbank.com/oauth/access-token';
    $fields = 'code=' . $authcode . "&client_id=31rExZqo0cYKN1okGPsy&client_secret=gooP7DkYB97LRPFNAX0SseWyNti2A9P6CsKWyAPx&grant_type=authorization_code&redirect_uri=http://jmb.im/grizz/backend/oauth/callback.php";

    //open connection' 
    $ch = curl_init();

    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch,CURLOPT_POST,6);
    curl_setopt($ch,CURLOPT_POSTFIELDS,$fields);

    //execute post
    $content  = curl_exec($ch);
    
    curl_close($ch);
    
    $user_data = json_decode($content, true);
    echo $user_data['access_token'];
    echo $content . "----";
    $access_token = $user_data['access_token'];

    header("Location: ./grab_data.php?access_token=$access_token");

    