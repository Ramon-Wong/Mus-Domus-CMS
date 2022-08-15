<?php
    include 'functions.php';
    include 'header.php';

    $key = generateKey();    
?>

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
    <script>

    sessionStorage.setItem("user_key", "<?php echo $key; ?>");

    </script>
</html>
