<?php

    function CheckFiles($filepath, $data){
        if(!file_exists($filepath)){
    
            touch($filepath);
            chmod($filepath, 0600);
            $file = fopen($filepath, "w+");
            fwrite($file, json_encode($data));
            fclose($file);
        }

        $_jData          = json_decode( fread( fopen($filepath, "r"), filesize($filepath)), true);
        return $_jData;        
    }


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


    function cryptoJsAesDecrypt($passphrase, $jsonString){
        $jsondata           = json_decode($jsonString, true);
        $salt               = hex2bin($jsondata["s"]);
        $ct                 = base64_decode($jsondata["ct"]);
        $iv                 = hex2bin($jsondata["iv"]);
        $concatedPassphrase = $passphrase.$salt;
        $md5                = array();
        $md5[0]             = md5($concatedPassphrase, true);
        $result             = $md5[0];

        for ($i = 1; $i < 3; $i++){
            $md5[$i] = md5($md5[$i - 1].$concatedPassphrase, true);
            $result .= $md5[$i];
        }

        $key                = substr($result, 0, 32);
        $data               = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);

        return json_decode($data, true);
    }

    
    function cryptoJsAesEncrypt($passphrase, $value){
        $salt               = openssl_random_pseudo_bytes(8);
        $salted             = '';
        $dx                 = '';

        while (strlen($salted) < 48){
            $dx = md5($dx.$passphrase.$salt, true);
            $salted .= $dx;
        }

        $key                = substr($salted, 0, 32);
        $iv                 = substr($salted, 32,16);
        $encrypted_data     = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
        $data = array("ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt));
        return json_encode($data);
    }

    // usage:
    // $encrypted = cryptoJsAesEncrypt("my passphrase", "value to encrypt");
    // $decrypted = cryptoJsAesDecrypt("my passphrase", $encrypted);

 ?>  