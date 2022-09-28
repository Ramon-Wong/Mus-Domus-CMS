<?php 
    include 'functions.php';
    include 'header.php'; 

    $filepath       = array("data/data.json", 
                            "data/frontend.json", 
                            "data/pages.json");      

    $jsondata       = array("email"             => "admin@domain.com", 
                            "password"          => "admin", 
                            "key"               => "1234567890");

    $frontdata      = array("key"               => "1234567890", 
                            "title"             => "TestCMS", 
                            "subtitle"          => "Nothing to see here",
                            "footer_message"    => "This is a test CMS");

    // unlink($filepath[0]);
    // unlink($filepath[1]);    

    CheckFiles( $filepath[0], $frontdata);
    CheckFiles( $filepath[1], $frontdata);
    
    // echo "<script>console.log('stuff') </script>";
?>
    <main id= "content">

        <div class="wrap">

        </div>

    </main>
    <footer></footer>    
</body>

    <script src="script3-1.js"></script>
    <script src="script2.js"></script>
    <script src="script1.js"></script>
</html>