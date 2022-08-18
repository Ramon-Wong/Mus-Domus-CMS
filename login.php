<?php
    include 'functions.php';
    echo "Login.php ";
        

    $usersdata='[{"username":"admin@admin.com",     "password":"123456789"},
                 {"username":"user1@gmail.com",     "password":"Lorgar"}]';




    $iv_key = "";
    $secret = "";
    //encrypt
    //decrypt

    $hash_string = Password_encrypt_decrypt( "encrypt", $iv_key, $secret, "developer");
    echo "<br>encrypt hash_string: " . $hash_string . "<br>";
    $hash_string = Password_encrypt_decrypt( "decrypt", $iv_key, $secret, $hash_string);
    echo "<br>decrypt hash_string: " . $hash_string . "<br>";


    if(file_exists("data/users.txt")){
        echo "<br>File exists";
        $uData  = json_decode( Read_UsersData("data/users.txt"), true);
    }else{
        echo "<br>File not exists";
        echo "<br>Creating file";
        $uData = JSON_decode($usersdata, true);
    }

    // echo "<br> Users name: " .      $uData[0]['username'];
    // echo "<br> Users password: " .  $uData[0]['password'];

    Save_UsersData("data/users.txt", $uData);


    $requestPayload = file_get_contents("php://input");
    $obj = json_decode($requestPayload);

    $result = 0;
    for($i=0; $i<count($uData); $i++){
        if(strcmp($uData[$i]['username'], $obj->email) == 0 && strcmp($uData[$i]['password'], $obj->pass) == 0){
            $result = 1;
            break;
        }
    }

    if($result == 1){
        echo "Login Successful";
        password_hash($obj->pass, PASSWORD_DEFAULT);
    }
    else{
        echo "Login Failed";
    }

 ?>   
