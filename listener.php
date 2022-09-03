<?php
header('Content-Type: application/json; charset=utf-8');

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);
$str;

switch($obj->type){
    case "page":
        // stuff to do with a page
        $str = $obj;
        break;
    case "login":
        // login
        if($obj->username == "admin" && $obj->password == "admin"){
            $str = '{"key":"'.$obj->key.'","type":"login","username":"'.$obj->username.'","password":"'.$obj->password.'","status":"succeed"}';
        } else {
            $obj->message = "Wrong username or password";
            $str = $obj;
        }


        break;
    case "logout":
        // logout
        break;    

    case "test":
        // stuff to do with a test
        // need this to output the test results and other shit
        break;

    case "nav":
        // stuff to do with a nav or
        // I probably would have a separate file for this named nav.php
        break;
    default:

        break;
}

    echo json_encode($str);
?>