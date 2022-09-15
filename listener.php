<?php

#include "FileHandling.php";

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$str            = '{"message":"Hello World"}';
$_data          = '123456789abcdefg';
$json_data      = '{"email":"admin@domain.com", "password":"admin"}';
$return;

$filepath       = "data/data.json";
$consoleMSG     = "Console Messages";
$file;



    // unlink($filepath);


    // if(!file_exists($filepath)){
    //     touch($filepath);
    //     chmod($filepath, 0600);

    //     $file = fopen($file, "w+");
    //     if($file){
    //         fwrite($file, $json_data);
    //         fclose($file);
    //         $consoleMSG     = "Success creating and writing data to file";
    //     }else{
    //         $consoleMSG     = "Failed creating and writing data to file";        
    //     }
    // }

    // $file = fopen($filepath, "r");
    // if($file){
    //     $json = fread($file, filesize($filepath));
    //     $jsondata = json_decode($json, true);
    //     fclose($file);
    //     $consoleMSG     = "Success reading, Data: ". var_dump($jsondata);
    // }

    if(!file_exists($filepath)){
        touch($filepath);
        chmod($filepath, 0777);
        $file = fopen($filepath, "w+");
        fwrite($file, $json_data);

        fclose($file);
    }

    $file = fopen($filepath, "r");
    $data = fread($file, filesize($filepath));
    $jData = json_decode($data, true);
    fclose($file);

    $consoleMSG     = "Data: ".$jData['email']."/".$jData['password']."/";



    // $consoleMSG     = "Data: ".$obj->email."::".$obj->password;


    switch($obj->type){
        case "page":
            $str = '{"message":"page'.$obj->page.'", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
        break;

        case "test":
            $str = '{"usr":"'.$jsondata->email.'", "pwd":"'.$jsondata->password.'"}';
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

