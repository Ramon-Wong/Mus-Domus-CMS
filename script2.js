
function RequestPage( path, string, element, funct){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", path, true);

    xhr.setRequestHeader("Content-type", "application/json");

    var obj = JSON.stringify(string);
    xhr.send(obj);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log(this.responseText);

            if( isJson(this.responseText) == true){
                console.log("valid JSON");
                var json = JSON.parse(this.responseText);

                switch( json.Page ){
                    case "Page":
                        console.log("Page");
                        element.innerHTML = json.PGE_Content;
                        break;
                    case "Login":
                        console.log("Login");
                        Formbuilder();
                        break;
                    default:
                    console.log("not found!", json);
                }
            }
            //     var json = JSON.parse(this.responseText);

            // }

            funct();
        }
    }

    function isJson(str) {
        try{
            JSON.parse(str);
        }catch(e){
            return false;
        }
        return true;
    }    
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