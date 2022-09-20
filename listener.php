<?php

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$str            = '{"message":"Hello World"}';

$return;
$consoleMSG     = "Console Messages";
$file;

//delete old config file
$filepath       = "data/data.json";



    $file           = fopen($filepath, "r");
    $data           = fread($file, filesize($filepath));
    $jData          = json_decode($data, true);
    fclose($file);


    $testMSG        = "Data: ".$jData['email']." / ".$jData['password'];
    

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
                file_put_contents( $filepath, json_encode($jData));

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

        default:
            $str = '{"message":"default"}';
 }


$return = $str;
echo $return;

?>

