var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];

// convert javascript string into a JSON object

var key     = sessionStorage.getItem("key");
// create javascript json with the key and the value

function funct1(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 1}'), content);}
function funct2(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 2}'), content);}
function funct3(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 3}'), content);}
function funct4(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 4}'), content);}
function funct5(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": "loging"}'), content);}

for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

console.log(sessionStorage.getItem("url"));