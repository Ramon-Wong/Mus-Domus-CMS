<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$str            = '{"message":"Hello World"}';
$return;



    switch($obj->type){
        case "page":
            $str = '{"message":"page'.$obj->page.'", "key":"'.$obj->key.'"}';
        break;

        case "test":
            $str = $formlist;
        break;

        case "login":
            $str = '{"message":"login"}';
        break;

        default:
            $str = '{"message":"default"}';
 }


$return = $str;
echo $return;

?>

