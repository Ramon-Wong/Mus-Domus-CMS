<?php

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$Database;


if( file_exists("/data/data.txt") == false){
    // okay, the JSON database doesn't exist, create it

    $str    = '{"admin_user": "admin@admin.com", 
                "password": "hashstuff", 
                "key": "abcd", 
                "page": [{"title": "page1", "content": "page1 content"},
                         {"title": "page2", "content": "page2 content"},
                         {"title": "page3", "content": "page3 content"},
                         {"title": "page4", "content": "page4 content"}]}';

    // create the data folder if it doesn't exist
    if( file_exists("/data") == false){
        mkdir("/data");
    }
    // create the data.txt file if it doesn't exist
    if( file_exists("/data/data.txt") == false){
        $file = fopen("/data/data.txt", "w");

        $Database = json_decode($str);

        fwrite($file, $str);
        fclose($file);
    }
    //dump the JSON database to the $Database variable
    
}else{

    // check if $Database is empty
    if( empty($Database) ){
        // okay, the JSON database exists, dump it to the $Database variable
        $file = fopen("/data/data.txt", "r");
        $Database = fread($file, filesize("/data/data.txt"));
        fclose($file);
        // Decode and dump the JSON data to the $Database variable
        $Database = json_decode($str);
    }
}

    if( $obj->page != "login" ){

        echo '<script type="text/javascript">
        alert("Execute Javascript Code");
        </script>';


        echo "Payload dump <br>";
        echo var_dump($obj);
    
        echo "<br>".$obj->page."<br>";
        echo $Database->admin_user."<br>";
        echo $Database->password."<br>";

        $model = null;
        if(is_null($model)) {
            echo "<script>console.log('yeah')</script>";
        }



    }
    // else{
    //     echo "stuff";
    // }


?>


