var Pages       = ["button1", "button2", "button3", "button4", "button5"];
var Functions   = [funct1, funct2, funct3, funct4, funct5];
var content     = document.getElementById("content").getElementsByClassName("wrap")[0];
fMenu           = new FormMenu();

var key     = sessionStorage.getItem("key");






function ShowStuff(){
    var formData = new FormData(fMenu.GetForm());
    var object = {};

    object["key"] = key;
    object["type"] = "login";
    formData.forEach(function(value, key){
        object[key] = value;
    });    
                                        //   need to create a callback function to handle the response inside the RequestPage function
                                        //         v 
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



function funct1(){  RequestPage("listener.php", Payload("page", 1), (data) => { content.innerHTML = ''; console.log(data);});}
function funct2(){  RequestPage("listener.php", Payload("page", 2), (data) => { content.innerHTML = ''; console.log(data);});}
function funct3(){  RequestPage("listener.php", Payload("page", 3), (data) => { content.innerHTML = ''; console.log(data);});}
function funct4(){  RequestPage("listener.php", Payload("page", 4), (data) => { content.innerHTML = ''; console.log(data);});}
function funct5(){  SetLogin();}

    
for(let x in Pages){
    var Element = document.getElementById(Pages[x]);
    Element.addEventListener("click", Functions[x]);
}

