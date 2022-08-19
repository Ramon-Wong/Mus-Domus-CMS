<?php
    include 'functions.php';
    include 'header.php';

    //$url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    $url =  "{$_SERVER['REQUEST_URI']}";

    //$key = _generateKey();    
?>

    <script>
        sessionStorage.setItem("user_key",  <?php echo "'".generateKey()."'" ?>);
        sessionStorage.setItem("url",       <?php echo "{$_SERVER['REQUEST_URI']}" ?>);

        
        var siteUrl = "<?php echo $url; ?>";

        console.log("user key?");
        console.log( sessionStorage.getItem("user_key"));

    </script>


    <main id= "content">

        <div class="wrap">
            <?php echo $content_data; ?>
        </div>

    </main>

    <footer>
        <div class="wrap">    
            Footer Section
        </div>    
    </footer>    

</body>
    <script type="text/javascript" src="functions.js"></script>
    <script type="text/javascript" src="script.js"></script>
</html>
