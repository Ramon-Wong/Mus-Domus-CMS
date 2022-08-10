<?php

    function ReadData($path){
        $file = fopen($path, "r") or die("Unable to open file!");
        $contents = '';

        while (!feof($file)) {
          $contents .= fread($file, 8192);
        }
        echo $contents;

        fclose($file);
    }



    if( isset($_GET['page'])){

        switch ($_GET['page']) {
            case "1":
                ReadData("data/data1.txt");
            break;

            case "2":
                ReadData("data/data2.txt");                
            break;

            case "3":
                ReadData("data/data3.txt");                
            break;


            case "5":
                ReadData("data/login.txt");                
            break;

            default:
            echo "Page 404";
      }
    }

?>
