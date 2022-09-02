<!DOCTYPE html>
<html>

<head>
    <title>Page Layout</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="shortcut icon" href="#">

    <script>
        sessionStorage.setItem("url",       <?php echo "{$_SERVER['REQUEST_URI']}" ?>);
        sessionStorage.setItem("key",       <?php echo "'".generateKey()."'" ?>);
    </script>        

</head>
  
<body>
    <header>
        <div class="wrap">
            <div class="head1">TestCMS</div>
            <div class="head2">Nothing to see here</div>
        </div>    
    </header>

    <nav class="menu">
        <a href="#" id="button1">Page 1</a>
        <a href="#" id="button2">Page 2</a>
        <a href="#" id="button3">Page 3</a>
        <a href="#" id="button4">Page 4</a>

        <div class="menu-log">
            <a href="#" id="button5">LOGIN</a>
        </div>    
    </nav> 