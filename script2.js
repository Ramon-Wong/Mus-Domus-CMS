
function RequestPage( path, string, element, funct){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", path, true);

    xhr.setRequestHeader("Content-type", "application/json");

    var obj = JSON.stringify(string);
    xhr.send(obj);

    var result;

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log("receive messages: ", this.responseText);

            if( isJson(this.responseText) == true){

                var json = JSON.parse(this.responseText);    
                
                
                console.log("var dump: " + json);

                switch( json.Page ){
                    case "page":
                        console.log("page");
                        element.innerHTML = JSON.stringify( json.PGE_Content);
                        break;
                    case "login":
                        console.log("login");
                        Formbuilder();
                        break;
                    case "data":
                        console.log(json.str);
                        break;

                    case "nav":
                        // the stuff I send => '{"Key":"'.$obj->key.'","Page":"'.$obj->type.'","Type":"'.$obj->page.'" ,"nav":'.$nstr.'}';
                        //                      {"Key":"MEBwZdiVE8Yl7LRSYDelPzmq",
                        //                       "Page":"nav",
                        //                       "Type":"" ,
                        //                       "nav":["Page 1","Page 2","Page 3","Page 4"]}
                        element = this.responseText;
                        result   = JSON.parse(this.responseText);
                        console.log("key: " + json.Key);
                        console.log("type: " + json.Page);
                        console.log("nav: " + json.nav[0]); // this works.
                        // copilot, how do you copy a json object?
                        // example: 
                    break;

                    default:
                    console.log("Function RequestPage: not found!", json);
                }
            }else{
                console.log("Function RequestPage: not a json!");
                // facepalm, this is not a json
            }
            //     var json = JSON.parse(this.responseText);

            // }

            funct();
        }

    }

    xhr.done = function(){
        console.log("done");
        return  result;
    }    

 
    // need to work on a return the json objects for other functions to use

}


function ShowMsg(){
    console.log("Hello World");
}


/*  Validate Email  */
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var result = false;

    if (input.value.match(validRegex)) {
        console.log("Valid email");
        result = true;
    } else {
        console.log("Not an email");
        result = false;
    }

    return result;
}


function Formbuilder(){
    // building form based on json data
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


function isJson(str) {
    try{
        JSON.parse(str);
    }catch(e){
        return false;
    }
    return true;
}   
