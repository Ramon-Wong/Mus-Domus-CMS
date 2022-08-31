<?php 
    include 'functions.php';
    include 'header.php'; 
?>

    <main id= "content">

        <div class="wrap">

        </div>

    </main>

    <footer>    

        <div class="wrap">    
            Footer Section
        </div>   
        <script src="script3.js"></script>
        <script src="script2.js"></script>
        <script src="script1.js"></script>
        <script>
            sessionStorage.setItem("url",       <?php echo "{$_SERVER['REQUEST_URI']}" ?>);
            sessionStorage.setItem("key",       <?php echo "'".generateKey()."'" ?>);
        </script>        

    </footer>    
</body>

</html>