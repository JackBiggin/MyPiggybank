<?php
    $authcode = htmlspecialchars($GET_['code']);
    
    $url = 'https://api.starlingbank.com/oauth/access-token';
    $data = array('code' => '$authcode', 'client_id' => '31rExZqo0cYKN1okGPsy', 'client_secret' => 'gooP7DkYB97LRPFNAX0SseWyNti2A9P6CsKWyAPx', 'grant_type' => 'authorization_code', 'redirect_uri' => 'INSERT HERE');

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) { /* Handle error */ }

    var_dump($result);
