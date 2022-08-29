var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
var main        = document.getElementById("content");


function test(){
    console.log("test");
}
main.addEventListener("domcontentchanged", test);

// convert javascript string into a JSON object

var key     = sessionStorage.getItem("key");
// create javascript json with the key and the value

function funct1(){ RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 1}'), content, function(){});}
function funct2(){ RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 2}'), content, function(){});}
function funct3(){ RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 3}'), content, function(){});}
function funct4(){ RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 4}'), content, function(){});}
function funct5(){ RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "login"}'), content, function(){});}


for(let x in Pages){
    // var Element = document.getElementById(Pages[x]);
    // Element.addEventListener("click", Functions[x]);
}

console.log(sessionStorage.getItem("url"));


var MenuElement         = document.getElementsByClassName("menu")[0];
MenuElement.innerHTML   = " STUFFFF";

// create and initialize a json object.
var json;
var res;
res = RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "nav"}'), json, function(){});

console.log("result:");
// copilot. I need to convert json into string, please help me.
console.log( res.Nav[0]);
console.log("You should get the key or it's broken");

// navigation bar set up here
    // RequestPage("rListener.php", JSON.parse('{"key": "' + key + '", "type": "nav"}'), menu, function(){});
