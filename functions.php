<?php

    function generateKey(){
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $key = array();
        $alphaLength = strlen($alphabet) - 1;

        for ($i = 0; $i < 16; $i++) {
            $n = rand(0, $alphaLength);
            $key[] = $alphabet[$n];
        }

        return implode($key);
    }

    function Read_UsersData($path){
        $file = fopen($path, "r") or die("<br>Unable to open file!");
        $contents = '';

        while (!feof($file)) {
          $contents .= fread($file, 8192);
        }

        fclose($file);
        return $contents;
    }

    function Save_UsersData( $path, $data){
        echo "<br>Save Users Data";
        $file = fopen($path, "wa+") or die("<br>Unable to open file!");         // able to create file!

        fwrite($file, JSON_encode($data));

        fclose($file);
    }

?>