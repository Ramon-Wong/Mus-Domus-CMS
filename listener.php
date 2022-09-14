<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$str            = '{"message":"Hello World"}';
$return;


// $file           = 'nvdcve-1.0-recent.json';
// $json           = file_get_contents($file);
// $json_data      = json_decode($json, true);
// $vulns          = $json_data->CVE_Items[0];


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

