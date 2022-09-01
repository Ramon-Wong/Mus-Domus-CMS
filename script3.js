
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

    function _AddInput( type, id, name, value){
        var input   = document.createElement("input");

        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", name);
        input.setAttribute("value", value);

        return input;
    }

    //button:   type = button,      id = id,        name = name,    value = "" 
    //input1:   type = text,        id = id,        name = name,    value = ""   
    //input2:   type = password,    id = "pass",    name = "pass",  value = ""

    this.BuildForm = function( layout_form){

        this.form.appendChild( AddLbl("useremail"));
        this.form.appendChild( AddBr());
        this.form.appendChild( _AddInput( "text", "email", "email", ""));               // type, id, name, value             email

        this.form.appendChild( AddBr());
        this.form.appendChild( AddLbl("Password"));

        this.form.appendChild( AddBr());
        this.form.appendChild( _AddInput( "password", "pass", "pass", ""));             // type, id, name, value             

        this.form.appendChild( AddBr());
        this.form.appendChild( AddBr());
        this.form.appendChild( _AddInput( "button", "", "name", "submit"));             // type, id, name, value         Button

        content.innerHTML = "";
        content.appendChild(this.form);
    }        
}


