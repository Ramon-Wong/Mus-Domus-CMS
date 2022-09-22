
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
        lbl.setAttribute("class", "lbl");
        lbl.innerHTML  = name;
        return lbl;
    }

    function AddAttribute( array){
        var input   = document.createElement("input");

        for(let x in array){    input.setAttribute(array[x][0], array[x][1]);    }
        return input;
    }

    function AddTextArea( array){
        var input   = document.createElement("textarea");

        for(let x in array){    input.setAttribute(array[x][0], array[x][1]);    }
        return input;
    }



    function AddVertForm( form, name, array){

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        // wrap.appendChild( AddBr());
        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: block;");
        // wrap.appendChild( AddBr());
        wrap.appendChild( AddAttribute(array)).setAttribute("style", "display: block;");
        
        form.appendChild(wrap);        
    }

    function AddHorzForm( form, name, array){

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        // wrap.appendChild( AddBr());        
        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: inline-block;");
        wrap.appendChild( AddAttribute(array)).setAttribute("style", "display: inline-block;");

        form.appendChild(wrap);
    }


    function AddHorzArea( form, name, array){

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        // wrap.appendChild( AddBr());        
        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: block;");
        wrap.appendChild( AddTextArea(array)).setAttribute("style", "display: inline-block; width: 300px;");

        form.appendChild(wrap);
    }



    this.LoginForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();
        //  text input
        AddVertForm( this.form, "User Email", [["type", "text"], ["name", "email"], ["id", "email"]]);
        AddVertForm( this.form, "Password", [["type","password"],["id","password"],["name", "password"]]);

        // submit button
        this.form.appendChild( AddAttribute( [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"], ["onclick", funct]]));

        content.appendChild(this.form);        
    }


    this.ConfigForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();

        AddHorzForm( this.form, "test", [["type", "text"], ["name", "Test"], ["id", "Test"]]);
        AddHorzForm( this.form, "loop", [["type", "text"], ["name", "loop"], ["id", "loop"]]);
        AddHorzArea( this.form, "area", [["type", "text"], ["name", "area"], ["id", "area"]]);

        this.form.appendChild( AddAttribute( [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"], ["onclick", funct]]));
        content.appendChild(this.form);                
    }


    this.GetForm = function(){return this.form;}
}






