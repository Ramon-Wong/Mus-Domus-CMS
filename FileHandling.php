<?php

// copilots, gimme some filehandling functions here, anyfunction will do, just gimme something to work with
//

function file_get_contents_curl($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Set curl to return the data instead of printing it to the browser.
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}

function getJson($url){
    $json = file_get_contents_curl($url);
    $json_data = json_decode($json, true);
    return $json_data;
}

function getJsonFromFile($file){
    $json = file_get_contents($file);
    $json_data = json_decode($json, true);
    return $json_data;
}

function getJsonFromUrl($url){
    $json = file_get_contents_curl($url);
    $json_data = json_decode($json, true);
    return $json_data;
}

function getJsonFromUrlAndSave($url, $file){
    $json = file_get_contents_curl($url);
    $json_data = json_decode($json, true);
    file_put_contents($file, $json);
    return $json_data;
}


function FileHandling(file){
    $file = file;
    $json = file_get_contents($file);
    $json_data = json_decode($json, true);
    $vulns = $json_data->CVE_Items[0];
    return $vulns;
}


function ifExists($file){
    if(file_exists($file)){

        return true;
    }else{
        return false;
    }
}




?>