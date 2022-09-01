
function FormMenu(){
    this.form = document.createElement("form");

    this.form.setAttribute("name", "login_forms");
    this.form.setAttribute("method", "post"); 

    function AddBr(){ 
        return( document.createElement("br")); 
    }

    function AddLbl(name){ 
        var lbl    = document.createElement("label");
        lbl.setAttribute("for",name);
        lbl.innerHTML  = name;
        return lbl;
    }

    function AddInput( type, id, name, value){
        var input   = document.createElement("input");

        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", name);
        input.setAttribute("value", value);

        return input;
    }

    // definition function AddAttribute(array)
    // array = [type, id, name, value, scripts, etc]
    function AddAttribute( array){
        var input   = document.createElement("input");

        for(let x in array){    input.setAttribute(array[x][0], array[x][1]);    }
        return input;

    }

    //button:   type = button,      id = id,        name = name,    value = "" 
    //input1:   type = text,        id = id,        name = name,    value = ""   
    //input2:   type = password,    id = "pass",    name = "pass",  value = ""

    this.BuildForm = function( layout_form){

        this.form.appendChild( AddLbl("useremail"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddInput( "text", "email", "email", ""));               // type, id, name, value             email

        this.form.appendChild( AddBr());
        this.form.appendChild( AddLbl("Password"));

        this.form.appendChild( AddBr());
        this.form.appendChild( AddInput( "password", "pass", "pass", ""));             // type, id, name, value             

        this.form.appendChild( AddBr());
        this.form.appendChild( AddBr());
        this.form.appendChild( AddAttribute( [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"], ["onclick", "ShowMsg()"]]));
        // this.form.appendChild( AddInput( "button", "submit", "name", "submit"));             // type, id, name, value         Button

        content.innerHTML = "";
        content.appendChild(this.form);
    }        


    this.GetForm = function(){return this.form;}
}



// form.addEventListener('submit', function(evt){
//     evt.preventDefault();

//     if( ValidateEmail(form.email) == true){
//         var email = form.email.value;
//         var pass  = form.pass.value;
//         var jsonstr = '{"key": "' + key + '", "page": "request", "email": "' + email + '", "pass": "' + pass + '"}';
//         RequestPage("listener.php", JSON.parse(jsonstr), content);
//     }
// }); 
