var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var Elements    = [];
var content;

for(let x in Pages){
    Elements[x] = document.getElementById(Pages[x]);
    Elements[x].addEventListener("click", Functions[x]);
}

content         = document.getElementById("content").getElementsByClassName("wrap")[0];
ReadFile("http://192.168.1.100/Mus-Domus-CMS/test.php?page=1&value=nothing");


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

function validateForm(){
    console.log("posting form info")
}

function funct1(){  ReadFile("http://192.168.1.100/Mus-Domus-CMS/test.php?page=1&value=nothing");} 
function funct2(){  ReadFile("http://192.168.1.100/Mus-Domus-CMS/test.php?page=2&value=nothing");} 
function funct3(){  ReadFile("http://192.168.1.100/Mus-Domus-CMS/test.php?page=3&value=nothing");} 
function funct4(){  ReadFile("http://192.168.1.100/Mus-Domus-CMS/test.php?page=4&value=nothing");}

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
    form.setAttribute("action", "submit.php");

    var input3 = document.createElement("input");
    input3.setAttribute("type", "submit");
    input3.setAttribute("value", "submit");

    form.appendChild(AddLbl("username"));
    form.appendChild(AddBr());
    form.appendChild(AddInputText("text", "uname", "uname"));
    form.appendChild(AddBr());
    form.appendChild(AddLbl("Password"));
    form.appendChild(AddBr());
    form.appendChild(AddInputText("password", "pass", "pass"));
    form.appendChild(AddBr());
    form.appendChild(AddBr());
    form.appendChild(input3);

    console.log( content);
    content.innerHTML = "";
    content.appendChild(form);

    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        var formData = new FormData(form);

        var object = {};
    
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(JSON.stringify(object));
    });    
}

