<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);


switch($obj->type){
    case "page":
        // stuff to do with a page
        break;
    case "login":
        // login
        // how the payload looks like {"key":"DHfRMcTXs5ES0difUH8cOOid","type":"login","email":"rcnwong78@gmail.com","pass":"12345abcd"}
        //                            {"key":"8DPOoHHagYiMRyTEGBnGEbme","type":"login","email":"rcnwong78@gmail.com","pass":"12345"}
        if( obj.email == "rcnwong78@gmail.com" && obj.pass == "1234abcd" ){

        } else {
            // $str = '{"key":' + obj.key + ',"type":"login","message":"Invalid email or password"}';
            // $str = '{"HAHAHAHA": "HAHAHAHHAHAHAHHAHAHA"}';
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