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

    $file           = fopen($filepath, "r");
    $data           = fread($file, filesize($filepath));
    $jData          = json_decode($data, true);
    fclose($file);

    $jData['key'] = $jsondata['key'];
    // open file for update
    file_put_contents( $filepath, json_encode($jData));

?>
    <main id= "content">

        <div class="wrap">

        </div>

    </main>

    <footer>    

        <div class="wrap">    
            Footer Section!!
        </div>   
        <script src="script3-1.js"></script>
        <script src="script3.js"></script>
        <script src="script2.js"></script>
        <script src="script1.js"></script>
    
    </footer>    
</body>

</html>