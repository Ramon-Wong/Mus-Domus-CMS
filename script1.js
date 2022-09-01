var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
fMenu           = new FormMenu();


// convert javascript string into a JSON object

var key     = sessionStorage.getItem("key");
// create javascript json with the key and the value

var Buildform_str = '{"name": "Test Form", "method": "post", "button":"Submit", "Layout": [ 0, 1, 0, 2, 0]}';
var Buildform_json = JSON.parse(Buildform_str);

function funct1(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 1}'), content);}
function funct2(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 2}'), content);}
function funct3(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 3}'), content);}
function funct4(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": 4}'), content);}
function funct5(){      fMenu.BuildForm( Buildform_json); 
    
    var fElement = fMenu.GetForm();
    fElement.addEventListener('submit', function(evt){ evt.preventDefault(); console.log("submit");} );

    /* fMenu.EventListener();*/}

for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

;


// addEventListener("submit", function(evt){
//     evt.preventDefault();
//     console.log("submit");
// });

// form.addEventListener('submit', function(evt){
//     evt.preventDefault();

//     if( ValidateEmail(form.email) == true){
//         var email = form.email.value;
//         var pass  = form.pass.value;
//         var jsonstr = '{"key": "' + key + '", "page": "request", "email": "' + email + '", "pass": "' + pass + '"}';
//         RequestPage("listener.php", JSON.parse(jsonstr), content);
//     }
// }); 
