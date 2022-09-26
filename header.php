<!DOCTYPE html>
<html>

<head>
    <title>Page Layout</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8">
    <script>

        sessionStorage.setItem("url",       <?php echo "{$_SERVER['REQUEST_URI']}" ?>);
        sessionStorage.setItem("key",       <?php echo '"'.generateKey().'"' ?>);
        
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            sessionStorage.setItem("isMobile", 1);
        } else {
            sessionStorage.setItem("isMobile", 0);  // 🤔
        }

    </script>

</head>
  
<body>
    <header></header>
    <nav class="menu"></nav>
    