<?php
    include 'functions.php';
    echo "Login.php ";
        

    $usersdata='[{"username":"admin@admin.com",     "password":"123456789"},
                 {"username":"user1@gmail.com",     "password":"Lorgar"}]';

    $Salt_Peppah = ["stick","goose","becomes","care","stream","volleyball","secretary","illustrate","adjoining","treat",
                    "available","stale","chin","peacefull","repeat","card","spooky","dangerous","melodic","banana",
                    "tacit","breathe","strive","preach","tangible","distinct","miss","dusty","sharp","wire",
                    "maintain","paltry","temper","add","long-term","jelly","acoustics","hilarious","damp","reach",
                    "terrible","lush","umbrella","rambunctious","conduct","passenger","finicky","prickly","breakfast","numberless",
                    "seashore","baseball","balance","behavior","fireman","tearful","queen","boil","uproot","scare",
                    "liquid","ducks","relax","ornament","vigorous","slide","control","terrify","adhesive","search",
                    "search","fertile","bubble","melted","prepare","harm","group","knee","event","balance",
                    "stupendous","prescribe","board","start","subdued","inflate","cart","faint","body","knock",
                    "slimy","agreement","trick","taboo","infamous","infest","quickest","receptive","previous","tightfisted"];


    $iv_key = $Salt_Peppah[34];
    $secret = $Salt_Peppah[69]; 
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

        $key = generateKey();
        // Need to figure out how I can insert the key to the javascript session storage

        $content = " sessionStorage.setItem('user_key',  'dum dum');
                     sessionStorage.setItem('url',       " + "{$_SERVER['REQUEST_URI']}" +
                     "sessionStorage.setItem('user_name', ''); ";

    }
    else{
        // this will cause a problem since it will insert it into the javascript updateScriptContent
        echo "Login Failed";

    }

 ?>   
