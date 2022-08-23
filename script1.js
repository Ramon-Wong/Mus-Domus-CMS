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
//function funct5(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": "login"}'), content);}

for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

console.log(sessionStorage.getItem("url"));


function funct5(){
    function AddBr(){
        return( document.createElement("br"));
    }

    function AddLbl(name){
        var _lbl    = document.createElement("label");
        _lbl.setAttribute("for",name);
        _lbl.innerHTML  = name;
        return _lbl;
    }

    function AddInputText(type, id, name){
        var input   = document.createElement("input");

        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", name);

        return input;
    }

    var form = document.createElement("form");
    form.setAttribute("name", "login_forms");
    form.setAttribute("method", "post");

    var input3 = document.createElement("input");
    input3.setAttribute("type", "submit");
    input3.setAttribute("value", "submit");

    form.appendChild(AddLbl("useremail"));
    form.appendChild(AddBr());
    form.appendChild(AddInputText("text", "email", "email"));
    form.appendChild(AddBr());
    form.appendChild(AddLbl("Password"));
    form.appendChild(AddBr());
    form.appendChild(AddInputText("password", "pass", "pass"));
    form.appendChild(AddBr());
    form.appendChild(AddBr());
    form.appendChild(input3);

    content.innerHTML = "";
    content.appendChild(form);

    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        if( ValidateEmail(form.email) == true){
            var email = form.email.value;
            var pass  = form.pass.value;
            var jsonstr = '{"key": "' + key + '", "page": "request", "email": "' + email + '", "pass": "' + pass + '"}';
            RequestPage("listener.php", JSON.parse(jsonstr), content);
        }
    });    
}