      
    <!-- Header Section -->
    <?php include 'header.php';?>
            
    <!-- Body section -->
    <?php include 'content.php';?>
      
    <!-- Footer Section -->
    <?php include 'footer.php';?>

</body>


<script>
    var Pages       = ["button1", "button2", "button3", "button4", "button5"];
    var Functions   = [funct1, funct2, funct3, funct4, funct5];
    var Elements    = [];
    var content;

    for(let x in Pages){
        Elements[x] = document.getElementById(Pages[x]);
        Elements[x].addEventListener("click", Functions[x]);
    }
    
    content         = document.getElementById("content").getElementsByClassName("wrap")[0];
    ReadFile("http://192.168.1.100/TestCMS/test.php?page=1&value=nothing");

    function ReadFile(path){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', path, true);
        console.log(path);

        xhr.onload = function(){
            if(this.status == 200){
                //console.log(this.responseText);                
            }
        }

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                content.innerHTML = this.responseText; 
            }
        }
        xhr.send();
    }


    function funct1(){
        ReadFile("http://192.168.1.100/TestCMS/test.php?page=1&value=nothing");
    } 
    
    function funct2(){
        ReadFile("http://192.168.1.100/TestCMS/test.php?page=2&value=nothing");
    } 
    
    function funct3(){
        ReadFile("http://192.168.1.100/TestCMS/test.php?page=3&value=nothing");
    } 
    
    function funct4(){
        ReadFile("http://192.168.1.100/TestCMS/test.php?page=4&value=nothing");
    }

    function funct5(){
        ReadFile("http://192.168.1.100/TestCMS/test.php?page=5&value=nothing");
    }


</script>

</html>
