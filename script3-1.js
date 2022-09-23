
function _FormMenu(_array){

    this.form = document.createElement("form");
    for(let x in _array){ this.form.setAttribute( _array[x][0], _array[x][1]);    }

    this.GetForm    = () => {  return this.form;}
    this.CleanForm  = () => { this.form.innerHTML = "";}
    var AddBr       = (form) => { form.appendChild( document.createElement("br")); }


    var MakeWrap    = () => { 
        var wrap =  document.createElement("wrap");
        wrap.setAttribute("class", "lblwrap"); 
        return wrap;
    }

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


    var _AddAtribute = (array) =>{
        var input   = document.createElement(array[0]);

        for( var x = 1; x < array.length; x++){
            input.setAttribute(array[x][0], array[x][1]);
        }

        return input;
    }


    function AddHorzForm( form, name, array){
        var wrap = MakeWrap();

        if( name != null){  
            wrap.appendChild( AddLbl(name)).setAttribute("style", "display: inline-block;");    
        }
        wrap.appendChild( AddAttribute("input", array)).setAttribute("style", "display: inline-block;");

        form.appendChild(wrap);
    }


    function AddHorzArea( form, name, array){
        var wrap = MakeWrap();

        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: block;");
        wrap.appendChild( AddAttribute("textarea", array)).setAttribute("style", "display: inline-block; width: 300px;");

        form.appendChild(wrap);
    }


    function AddHorzDropdown( form, name, array, list){
        var wrap        = MakeWrap();
        var selectList  = AddAttribute("select", array);

        for(let x in list){
            var option      = document.createElement("option");
            option.value    = list[x];
            option.text     = list[x];
            selectList.appendChild(option);
        }

        wrap.appendChild( AddLbl(name)).setAttribute("style", "display: block;");
        wrap.appendChild( selectList).setAttribute("style", "display: inline-block; width: 300px;");

        form.appendChild(wrap);
    }


    this.ConfigForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();

        var wrap = MakeWrap();

        AddHorzForm( this.form, "Title", [["type", "text"], ["name", "title"], ["id", "title"]]);
        AddHorzForm( this.form, "Subtitle", [["type", "text"], ["name", "subtitle"], ["id", "subtitle"]]);
        AddBr(this.form);        
        AddHorzForm( this.form, "eMail", [["type", "text"], ["name", "usermail"], ["id", "usermail"]]);
        AddHorzForm( this.form, "old Password", [["type", "password"], ["name", "old Password"], ["id", "OldP1"]]);
        AddHorzForm( this.form, "New Password", [["type", "password"], ["name", "new Password"], ["id", "NewP1"]]);
        AddHorzForm( this.form, "New Password", [["type", "password"], ["name", "new Password"], ["id", "NewP2"]]);
        AddBr(this.form);        
        AddHorzArea( this.form, "Footer", [["type", "text"], ["name", "footer_message"], ["id", "footer_message"]]);

        AddHorzForm( this.form, "Checkbox 1", [["type", "checkbox"], ["name", "checked1"], ["id", "checked1"]]);
        AddHorzForm( this.form, "Checkbox 2", [["type", "checkbox"], ["name", "checked2"], ["id", "checked2"]]);
        AddHorzForm( this.form, "Checkbox 3", [["type", "checkbox"], ["name", "checked3"], ["id", "checked3"]]);
        AddBr(this.form);
        AddHorzDropdown( this.form, "Dropbox", [["name", "dropdown"], ["id", "dropdown"]], ["Mercedes", "Toyota", "Mercedes", "Honda", "Mazda"]);        
        AddBr(this.form);        
        AddHorzForm( this.form, null, [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"],["class", "wrap"], ["onclick", funct]]);

        content.appendChild(this.form); 
    }


    this.LoginForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();
        //  text input
        AddHorzForm( this.form, "User Email", [["type", "text"], ["name", "email"], ["id", "email"]]);
        AddHorzForm( this.form, "Password", [["type","password"],["id","password"],["name", "password"]]);
        AddBr(this.form);
        // submit button
        AddHorzForm( this.form, null, [["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"],["class", "wrap"], ["onclick", funct]]);

        content.appendChild(this.form);        
    }
}