<?php

#include "FileHandling.php";

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$str            = '{"message":"Hello World"}';
$json_data      = '{"email":"admin@domain.com", "password":"admin"}';
$filepath       = "data/data.json";

$return;
$consoleMSG     = "Console Messages";
$file;



// unlink($filepath);


    if(!file_exists($filepath)){
        touch($filepath);
        chmod($filepath, 0600);
        $file = fopen($filepath, "w+");
        fwrite($file, $json_data);

        fclose($file);
    }

    $file = fopen($filepath, "r");
    $data = fread($file, filesize($filepath));
    $jData = json_decode($data, true);
    fclose($file);

    $testMSG     = "Data: ".$jData['email']." / ".$jData['password'];
    

    switch($obj->type){
        case "page":
            $str = '{"message":"page'.$obj->page.'", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
        break;

        case "test":
            $str = '{"usr":"'.$testMSG.'"}';
        break;

        case "login":
            if( $obj->email == $jData['email'] AND $obj->password == $jData['password'] ){
                $str = '{"message":"Login Successfull", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
            }else{

                $str =  $obj->email."/".$jData['email']." <> ".$obj->password."/".$jData['password'];
            }
            // $obj->key;
            // $obj->email;
            // $obj->password;


            
        break;

        default:
            $str = '{"message":"default"}';
 }


$return = $str;
echo $return;

?>

