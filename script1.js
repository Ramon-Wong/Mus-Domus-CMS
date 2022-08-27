var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
var main        = document.getElementById("content");


var data;
RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "init"}'), data, function(){});

var my_object ={"Super Hero":["Iron Man", "Super Man"]};
console.log(my_object);
console.log(data);


function test(){
    console.log("test");
}
main.addEventListener("domcontentchanged", test);

// convert javascript string into a JSON object

var key     = sessionStorage.getItem("key");
// create javascript json with the key and the value

function funct1(){ RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 1}'), content, function(){});}
function funct2(){ RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 2}'), content, function(){});}
function funct3(){ RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 3}'), content, function(){});}
function funct4(){ RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 4}'), content, function(){});}
function funct5(){ RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "login"}'), content, function(){});}


for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

console.log(sessionStorage.getItem("url"));



var Str_txt = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
var Obj_txt = JSON.parse(Str_txt);

Str_txt.insert(0, "{");