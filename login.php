<?php
    echo "Login.php ";

    //echo generateKey();
    /*
        todo
        - create readfile function

    */

    $usersdata='[{"username":"rcnwong78@gmail.com",     "password":"123456789"},
                {"username":"Priya",                    "password":"123456789"},
                {"username":"Kawita",                   "password":"123456789"},
                {"username":"Martin",                   "password":"123456789"},
                {"username":"Simon",                    "password":"123456789"},
                {"username":"Seer",                     "password":"123456789"},
                {"username":"Gwent",                    "password":"123456789"}]';

    $uData  = json_decode($usersdata, true);

    //echo var_dump($uData);

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
