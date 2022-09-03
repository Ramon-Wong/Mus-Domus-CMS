<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);


echo json_encode($obj);


switch($obj->type){
    case "page":
        // stuff to do with a page
        break;
    case "login":
        // login
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



?>