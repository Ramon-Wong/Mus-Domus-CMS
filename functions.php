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

    
    function ReadData($path){
        $file = fopen($path, "r") or die("Unable to open file!");
        $contents = '';

        while (!feof($file)) {
          $contents .= fread($file, 8192);
        }
        echo $contents;

        fclose($file);
    }

?>