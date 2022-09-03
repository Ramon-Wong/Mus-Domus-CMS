<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);


echo json_encode($obj);


switch($obj->type){
    case "page":
        // stuff to do with a page
        break;
    case "login":
        // stuff to do with a login
        break;
    case "logout":
        // stuff to do with a logout
        break;    

    case "test":
        // stuff to do with a test
        break;

    case "nav":
        // stuff to do with a nav
        break;
    default:

        break;
}



?>