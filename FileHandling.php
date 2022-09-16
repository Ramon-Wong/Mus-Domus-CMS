<?php









function FileHandling(){
    $filepath       = "data/data.json";
    $json_data      = '{"email":"admin@domain.com", "password":"admin"}';

    //check if file exists, if not create it
    if(!file_exists($filepath)){
        $file = fopen($filepath, "w");

        echo "\nFile does not exist\n";
        fwrite($file, this->$json_data);
        
        fclose($file);
        chmod($filepath, 0600);

        echo "\na replacement has been created\n";

    }else{
        echo "\nFile exists\n";

        $file = fopen($filepath, "r");
        $json = fread($file, filesize($filepath));
        $jsondata = json_decode($json, true);
        fclose($file);

        echo "\n email:     ".$jsondata['email'];
        echo "\n password:  ".$jsondata['password'];

    }
}



FileHandling();


?>