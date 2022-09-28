<?php

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);
$str            = '{"message":"Hello World"}';
$return;
$consoleMSG     = "Console Messages";

//delete old config file
$filepath       = array("data/data.json", "data/frontend.json", "data/pages.json");

$file           = fopen($filepath[0], "r");
$jData          = json_decode( fread($file, filesize($filepath[0])), true);
fclose($file);

$file           = fopen($filepath[1], "r");
$fData          = json_decode( fread($file, filesize($filepath[1])), true);
fclose($file);


    // unlink($filepath);

    switch($obj->type){
        case "page":

            if($jData[key] == $obj->key){
                $consoleMSG     = "Key is already set";
                $str = '{"message":"page'.$obj->page.'", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
                
            }else{
                $consoleMSG     = "Key is not set";
                $str = '{"message":"page'.$obj->page.'", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
            }

            $return = $str;

        break;

        case "test":
            $str = json_encode( $jData);
        break;

        case "login":
            if( $obj->email == $jData['email'] AND $obj->password == $jData['password'] ){
                $str = '{"message":"Login Successfull", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';

                $jData['key'] = $obj->key;
                // open file for update
                file_put_contents( $filepath[0], json_encode($jData));

            }else{

                $str =  '{"message":"Login Failed", "key":"'.$obj->key.'", "console":"'.$consoleMSG.'"}';
            }
            // $obj->key;
            // $obj->email;
            // $obj->password;
            
        break;

        case "Authentication":
            $msg;

            if($jData[key] == $obj->key){
                $msg = array("login" => "true");
            }else{
                $msg = array("login" => "false");
            }

            $str = json_encode($msg);
        break;    

        case "FrontEnd":
            $str = json_encode( array("title" => $fData["title"], "subtitle" => $fData["subtitle"], "footer_message" => $fData["footer_message"]));
        break;    

        case "config":
            // $obj->key;
            // $obj->title;
            // $obj->subtitle;
            // $obj->footer_message;
        break;  

        default:
            $str = '{"message":"default"}';
 }


$return = $str;
echo $return;

?>

