<?php

$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);

$Database;






if( file_exists("/data/data.txt") == false){
    // okay, the JSON database doesn't exist, create it

    $str    = '{"admin_user": "admin@admin.com", 
                "password": "hashstuff", 
                "key": "abcd", 
                "page": [{"title": "page1", "content": "page 1 content"},
                         {"title": "page2", "content": "page 2 content"},
                         {"title": "page3", "content": "page 3 content"},
                         {"title": "page4", "content": "page 4 content"}]}';

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

//  getting content from Pages in $Database
$page_content   = $Database->page[$obj->page - 1]->content;

$content        =  'content: '.$obj->type.' '.$obj->page;
$Login_str      =  '{"Page": "Login", "ID": "Magicnumbers"}';
$Page_str       =  '{"Page": "Page",  "ID": "Magicnumbers", "PGE_Title": "Title", "PGE_Content": "'. $page_content.'"}';
$Init_str       =  '{"Page": "Data",  "str": "init => listener.php", "pages":"'. sizeof($Database->page) .'"}';
$page_list      =  array();


for($i = 0; $i < sizeof($Database->page); $i++){

    $page_list[$i] = array_push($page_list, $Database->page[$i]->title);
    // $page_list .= '['.$Database->page[$i]->title.']:['.$Database->page[$i]->content.']';
}

// convert json array to string
// no answer CoPilot? 
// ok, seems like I need to create a function to do this

// function json_to_string($json){
//     $str = "";
//     foreach($json as $key => $value){
//         $str .= $key . ": " . $value . " ";
//     }
//     return $str;
// }

function jsonarray_to_string($json){
    $str = "";
    foreach($json as $key => $value){
        $str .= $key . ": " . $value . " ";
    }
    return $str;
}

// copilot, operator .= what does this do? gib examples please
// $t .=



switch($obj->type){
    case "login":
        echo $Login_str;
        break;

    case "page":
        echo $Page_str;
        break;

    case "init":
        echo $Init_str;
        break;

    default:
        echo "stuff doesn't work out, !404";
}


?>


