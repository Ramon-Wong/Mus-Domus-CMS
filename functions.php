<?php

    function generateKey(){
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $key = array();
        $alphaLength = strlen($alphabet) - 1;

        for ($i = 0; $i < 24; $i++) {
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

    function Password_encrypt_decrypt($action, $secret_iv, $secret_key, $string) {
        $output = false;
        $encrypt_method = "AES-256-CBC";

        if($action == 'encrypt') {
            $output = openssl_encrypt($string, $encrypt_method, hash('sha256', $secret_key), 0, substr(hash('sha256', $secret_iv), 0, 16));
            $output = base64_encode($output);
        }
        else if($action == 'decrypt') {
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, hash('sha256', $secret_key), 0, substr(hash('sha256', $secret_iv), 0, 16));
        }
        return $output;
    }



?>