var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var Elements    = [];
var content;

var Path1       =  sessionStorage.getItem("url") + "test.php?";
console.log( Path1);


for(let x in Pages){
    Elements[x] = document.getElementById(Pages[x]);
    Elements[x].addEventListener("click", Functions[x]);
}

content         = document.getElementById("content").getElementsByClassName("wrap")[0];
// home page
Recuperare_Recordum( Path1 + "page=1&value=" + sessionStorage.getItem("user_key"));

function funct1(){  Recuperare_Recordum( Path1 + "page=1&value=" + sessionStorage.getItem("user_key"));    console.log(sessionStorage.getItem("user_key"));} 
function funct2(){  Recuperare_Recordum( Path1 + "page=2&value=" + sessionStorage.getItem("user_key"));    console.log(sessionStorage.getItem("user_key"));} 
function funct3(){  Recuperare_Recordum( Path1 + "page=3&value=" + sessionStorage.getItem("user_key"));    console.log(sessionStorage.getItem("user_key"));} 
function funct4(){  Recuperare_Recordum( Path1 + "page=4&value=" + sessionStorage.getItem("user_key"));    console.log(sessionStorage.getItem("user_key"));}

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
            console.log("sending data to login.php");
            var formData = new FormData(form);

            var object = {};

            formData.forEach(function(value, key){
                object[key] = value;
            });
            var obj = JSON.stringify(object);
            // console.log(obj);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "login.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(obj);

            xhr.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                }
            }
        }
    });    
}
