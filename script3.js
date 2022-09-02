
function FormMenu(){
    this.form = document.createElement("form");

    this.form.setAttribute("name", "login_forms");
    this.form.setAttribute("method", "post"); 

    
    this.GetForm    = function(){  return this.form;}
    this.CleanForm  = function(){this.form.innerHTML = "";}

    function AddBr(){ 
        return( document.createElement("br")); 
    }

    function AddLbl(name){ 
        var lbl    = document.createElement("label");
        lbl.setAttribute("for",name);
        lbl.innerHTML  = name;
        return lbl;
    }

    function AddAttribute( array){
        var input   = document.createElement("input");

        for(let x in array){    input.setAttribute(array[x][0], array[x][1]);    }
        return input;
    }

    this.LoginForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();
        //  text input
        this.form.appendChild( AddLbl("useremail"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddAttribute([["type","text"],["id","email"],["name", "email"]]));

        // text input (hidden password)
        this.form.appendChild( AddBr());
        this.form.appendChild( AddLbl("Password"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddAttribute([["type","password"],["id","pass"],["name", "pass"]]));

        // submit button
        this.form.appendChild( AddBr());
        this.form.appendChild( AddBr());
        this.form.appendChild( AddAttribute( [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"], ["onclick", funct]]));

        
        content.appendChild(this.form);
    }        

    this.GetForm = function(){return this.form;}
    
}
