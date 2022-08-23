<?php

// store the request data in a variable
$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

// create the JSON Database
$Database;

//  $obj->key       = ranom generated key, this will be the unique identifier for the user
//  $obj->type      = "page"
//  $obj->page      = "login form"
//  ok, this $Obj->type and %Obj->page is kinda confusing, will remove these two in the future.

//  todo  
//  - create JSON data base that only listener.php can access
//          - JSON database will hold user's email and password
//          - JSON database will hold page contents
//          - JSON database will temporarily hold user's key
//
//  - create a function in listener.php that will create the JSON database
//  - this function will be called when listener.php notices that the JSON database doesn't exist
//  - the content will be reset to default values
//  - The JSON database will be created in a simple text file format.
//  - since it is created by listener.php, only www-data can access it

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


echo $obj->page;



/*
    something Different, got some question for Copilot, hopefully this those people at Github have insert the code for Copilot
    CoPilot, I wanna create a GPT3 model that can talk to the user and respond to their questions, in audio format.
    so is this doable?
    If so, what language is the best to use for this? Libraries? and other sources?

    I'm not sure if this is doable, but I'm sure I can do it.
    Me: Good anser, I'll try if I can get some documentation on how to do this from OpenAI.
    

*/

?>


