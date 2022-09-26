<?php 
    include 'functions.php';
    include 'header.php'; 

    $filepath       = array("data/data.json", 
                            "data/frontend.json", 
                            "data/pages.json");      

    $jsondata       = array("email"=> "admin@domain.com", 
                            "password"=> "admin", 
                            "key"=> "1234567890");

    $frontdata      = array("key"               => "1234567890", 
                            "title"             => "TestCMS", 
                            "subtitle"          => "Nothing to see here",
                            "footer_message"    => "This is a test CMS");

    // unlink($filepath);

    CheckFiles($filepath[0], $jsondata);
    CheckFiles($filepath[1], $frontdata);

    $file           = fopen($filepath[0], "r");
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
        <script src="script2.js"></script>
        <script src="script1.js"></script>
    
    </footer>    
</body>

</html>