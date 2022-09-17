<?php


// 
// $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

// echo json_encode($age);
// 
//  simple code from w3schools how we can turn a php array into a json object -->

// $marks = array( "mohammad" => array ( "physics" => 35, "maths" => 30, "chemistry" => 39),
//                 "qadir" => array ( "physics" => 30, "maths" => 32,"chemistry" => 29),
//                 "zara" => array ("physics" => 31,"maths" => 22,"chemistry" => 39));
// example of how to nest arrays into an array

// if(!file_exists($filepath)){
//     touch($filepath);
//     chmod($filepath, 0600);
//     $file = fopen($filepath, "w+");
//     fwrite($file, $json_data);

//     fclose($file);
// }



$filepath       = "data/data.json";



function    ReadConfig($filepath){


    if(!file_excists($filepath)){
        touch($filepath);
        chmod($filepath, 0600);
        $file = fopen($filepath, "w+");

        fwrite($file, json_encode($sdata));

        fclose($file);
    }

    $file = fopen($filepath, "r");
    $data = fread($file, filesize($filepath));

    fclose($file);

    return json_decode($data, true);
}















?>