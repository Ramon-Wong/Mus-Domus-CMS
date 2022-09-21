var Pages       = ["Page 1", "button2", "button3", "button4", "Config"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
fMenu           = new FormMenu();

var key         = sessionStorage.getItem("key");



function ShowStuff(){
    var formData = new FormData(fMenu.GetForm());
    var object = {};

    object["key"] = key;
    object["type"] = "login";
    formData.forEach(function(value, key){
        object[key] = value;
    });    

    RequestPage("listener.php", object, (data) => { content.innerHTML = ''; console.log(data);});
    // console.log(JSON.stringify(object));
}


function SetLogin(){

    CheckAuthentication((data)=>{ 

        console.log(data);
        
        if(data["login"] == "true"){
            content.innerHTML =  "No need, you're already logged in";
        }else{
            fMenu.LoginForm("ShowStuff()");
        }        
    });
}



var Nav         = document.getElementsByTagName("nav")[0];

for(var i = 0; i < Pages.length; i++){

    var button = document.createElement("a");
    button.setAttribute("id", Pages[i]);
    button.setAttribute("href", "#");
    button.setAttribute("onclick", Functions[i].name + "()");
    button.innerHTML = Pages[i];
    

    if( i == Pages.length - 1){
        var wrap = document.createElement("div");
        wrap.setAttribute("class", "menu-log");

        wrap.appendChild(button);
        Nav.appendChild(wrap);
    }else{
        Nav.appendChild(button);
    }    
}


function funct1(){  RequestPage("listener.php", Payload("page", 1), (data) => { content.innerHTML = ''; console.log(data);});}
function funct2(){  RequestPage("listener.php", Payload("page", 2), (data) => { content.innerHTML = ''; console.log(data);});}
function funct3(){  RequestPage("listener.php", Payload("page", 3), (data) => { content.innerHTML = ''; console.log(data);});}
function funct4(){  RequestPage("listener.php", Payload("page", 4), (data) => { content.innerHTML = ''; console.log(data);});}
function funct5(){  SetLogin();}

    
