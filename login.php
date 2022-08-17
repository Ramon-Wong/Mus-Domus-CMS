<?php
    include 'functions.php';
    echo "Login.php ";
        

    $usersdata='[{"username":"admin@admin.com",     "password":"123456789"},
                 {"username":"user1@gmail.com",     "password":"Lorgar"}]';


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
    }
    else{
        echo "Login Failed";
    }

 ?>   
