<?php
    include 'functions.php';

    if( isset($_GET['page'])){

        switch ($_GET['page']) {
            case "1":
                ReadData("data/data1.txt");
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);

            break;

            case "2":
                ReadData("data/data2.txt");                
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);
            break;

            case "3":
                ReadData("data/data3.txt");                
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);

            break;


            case "5":
                ReadData("data/login.txt");                
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);

            break;

            default:
            echo "Page 404";
      }
    }

?>