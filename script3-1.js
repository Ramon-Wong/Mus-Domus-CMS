
function _FormMenu(_array){

    this.form = document.createElement("form");
    for(let x in _array){ this.form.setAttribute( _array[x][0], _array[x][1]);    }

    this.GetForm    = () => {  return this.form;}
    this.CleanForm  = () => { this.form.innerHTML = "";}
    var AddBr       = (form) => { form.appendChild( document.createElement("br")); }

    var AddLbl = (name) => { 
        var lbl    = document.createElement("label");

        lbl.setAttribute("for",name);
        lbl.setAttribute("class", "lbl");
        lbl.innerHTML  = name;

        return lbl;
    }

    var AddAttribute = (type, array) =>{
        var input   = document.createElement(type);

        for(let x in array){    input.setAttribute(array[x][0], array[x][1]);    }
        return input;
    }


    function AddHorzForm( form, name, array){

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        if( name != null){  wrap.appendChild( AddLbl(name)).setAttribute("style", "display: inline-block;");    }
        wrap.appendChild( AddAttribute("input", array)).setAttribute("style", "display: inline-block;");

        form.appendChild(wrap);
    }


    function AddHorzArea( form, name, array){

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: block;");
        wrap.appendChild( AddAttribute("textarea", array)).setAttribute("style", "display: inline-block; width: 300px;");
        // wrap.appendChild( AddTextArea(array)).setAttribute("style", "display: inline-block; width: 300px;");

        form.appendChild(wrap);
    }


    this.ConfigForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();

        wrap = document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap");

        AddHorzForm( this.form, "Title", [["type", "text"], ["name", "Test"], ["id", "Test"]]);
        AddHorzForm( this.form, "Subtitle", [["type", "text"], ["name", "loop"], ["id", "loop"]]);
        AddBr(this.form);        
        AddHorzForm( this.form, "old Password", [["type", "text"], ["name", "Test"], ["id", "Test"]]);
        AddHorzForm( this.form, "New Password", [["type", "text"], ["name", "loop"], ["id", "loop"]]);
        AddHorzForm( this.form, "New Password", [["type", "text"], ["name", "loop"], ["id", "loop"]]);
        AddBr(this.form);        
        AddHorzArea( this.form, "Footer", [["type", "text"], ["name", "area"], ["id", "area"]]);

        AddBr(this.form);        
        AddHorzForm( this.form, "Checkbox 1", [["type", "checkbox"], ["name", "checked1"], ["id", "checked1"]]);
        AddHorzForm( this.form, "Checkbox 2", [["type", "checkbox"], ["name", "checked2"], ["id", "checked2"]]);
        AddHorzForm( this.form, "Checkbox 3", [["type", "checkbox"], ["name", "checked3"], ["id", "checked3"]]);
        AddBr(this.form);
        AddHorzForm( this.form, null, [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"],["class", "wrap"], ["onclick", funct]]);

        content.appendChild(this.form); 
    }




}