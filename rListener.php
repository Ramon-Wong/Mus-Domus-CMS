<?php

    $requestPayload = file_get_contents("php://input");
    $obj            = json_decode($requestPayload);

                  
    // $response       = "{'Key':'$obj->key','Page':'$obj->type','Type':'$obj->page'}";
    $response   = "";
    $nstr       = "";

    $nav        = array( "Page 1", "Page 2", "Page 3", "Page 4" );


    switch($obj->type){
        case "login":

            $response       = '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","Type":"'.$obj->page.'"}';
            echo $response;
            break;

        case "page":
            $response       = '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","Type":"'.$obj->page.'"}';
            echo $response;
            break;

        case "init":
            $response       = '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","Type":"'.$obj->page.'"}';
            echo $response;
            break;

        case "test":
            $response       = '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","Type":"'.$obj->page.'"}';
            echo $response;
            break;    

        case "nav":

            // create an array in string format to send back to the client                    
            $nstr       = '[';

            for($i = 0; $i < sizeof($nav); $i++){
                $nstr .=  '"'.$nav[$i]. '",';
            }
            // remove the last comma
            $nstr = substr($nstr, 0, -1);
            $nstr .= "]";

            $response       = '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","nav":'.$nstr.'}';
            echo $response;
            break;    

        default:
            echo "stuff doesn't work out, !404";
    }

?>