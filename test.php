<?php
    include 'functions.php';

    if( isset($_GET['page'])){

        switch ($_GET['page']) {
            case "1":
                echo Read_UsersData("data/data1.txt");

                echo $_SESSION["user_key"];
                print_r($_SESSION);

            break;

            case "2":
                echo Read_UsersData("data/data2.txt");
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);
            break;

            case "3":
                echo Read_UsersData("data/data3.txt");
                
                echo $_SESSION["user_key"];
                print_r($_SESSION);

            break;

            default:
            echo "Page 404";
      }
    }

?>