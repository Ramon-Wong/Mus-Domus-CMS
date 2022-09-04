var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
fMenu           = new FormMenu();

var key     = sessionStorage.getItem("key");

function ShowStuff(){
    // console.log("Hello World");

    var formData = new FormData(fMenu.GetForm());
    var object = {};

    object["key"] = key;
    object["type"] = "login";
    formData.forEach(function(value, key){
        object[key] = value;
    });
    
    RequestPage("listener.php", JSON.parse(JSON.stringify(object)), content);
    // console.log(JSON.stringify(object));
}


function funct1(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 1}'), content);}
function funct2(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 2}'), content);}
function funct3(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 3}'), content);}
function funct4(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 4}'), content);}
function funct5(){      fMenu.LoginForm("ShowStuff()");} 
    

for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

