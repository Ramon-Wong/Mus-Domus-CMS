<?php 
    include 'functions.php';
    include 'header.php'; 


    $filepath       = "data/data.json";    
    $jsondata       = array("email"=> "admin@domain.com", "password"=> "admin", "key"=> "1234567890");

    // unlink($filepath);

    if(!file_exists($filepath)){

        echo "<script>console.log('File does not excist')</script>";

        touch($filepath);
        chmod($filepath, 0600);
        $file = fopen($filepath, "w+");
        fwrite($file, json_encode($jsondata));

        fclose($file);
    }


    // example from php array to json object
    // $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
    // echo json_encode($age);


?>

    <main id= "content">

        <div class="wrap">

        </div>

    </main>

    <footer>    

        <div class="wrap">    
            Footer Section!!
        </div>   
        <script src="script3.js"></script>
        <script src="script2.js"></script>
        <script src="script1.js"></script>
    

    </footer>    
</body>

</html>