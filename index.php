<?php
    include 'functions.php';
    include 'header.php';

    $key = generateKey();    
    //$url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    $url =  "{$_SERVER['REQUEST_URI']}";
?>

    <script>
        sessionStorage.setItem("user_key",  "<?php echo $key; ?>");
        sessionStorage.setItem("url",       "<?php echo $url; ?>");

        var siteUrl = "<?php echo $url; ?>";
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

    <script type="text/javascript" src="script.js"></script>
</html>
