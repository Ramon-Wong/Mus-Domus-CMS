
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


    var _AddAttribute = (array) =>{
        var input   = document.createElement(array[0][1]);

        for( var x = 1; x < array.length; x++){
            input.setAttribute(array[x][0], array[x][1]);
        }

        return input;
    }


    function AddHorzForm( form, name, array){
        var wrap = MakeWrap();

        if( name != null){  wrap.appendChild( AddLbl(name)).setAttribute("style", "display: inline-block;"); }
        wrap.appendChild( _AddAttribute(array)).setAttribute("style", "display: inline-block;");

        form.appendChild(wrap);

        this.AddBr = function(){  }
    }


    function AddHorzDropdown( form, name, array, list){
        var wrap        = MakeWrap();
        var selectList  = _AddAttribute(array);

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
        
        AddHorzForm( this.form, "Title", [["input", "input"],["type", "text"], ["name", "title"], ["id", "title"]]);
        AddHorzForm( this.form, "Subtitle", [["input", "input"],["type", "text"], ["name", "subtitle"], ["id", "subtitle"]]);
        AddBr(this.form);        
        AddHorzForm( this.form, "eMail", [["input", "input"],["type", "text"], ["name", "usermail"], ["id", "usermail"]]);
        AddHorzForm( this.form, "old Password", [["input", "input"],["type", "password"], ["name", "old Password"], ["id", "OldP1"]]);
        AddHorzForm( this.form, "New Password", [["input", "input"],["type", "password"], ["name", "new Password"], ["id", "NewP1"]]);
        AddHorzForm( this.form, "New Password", [["input", "input"],["type", "password"], ["name", "new Password"], ["id", "NewP2"]]);
        AddBr(this.form);        
        AddHorzForm( this.form, "Footer", [["textarea", "textarea"], ["type", "text"], ["name", "footer_message"], ["id", "footer_message"]]);

        AddHorzForm( this.form, "Checkbox 1", [["input", "input"],["type", "checkbox"], ["name", "checked1"], ["id", "checked1"]]);
        AddHorzForm( this.form, "Checkbox 2", [["input", "input"],["type", "checkbox"], ["name", "checked2"], ["id", "checked2"]]);
        AddHorzForm( this.form, "Checkbox 3", [["input", "input"],["type", "checkbox"], ["name", "checked3"], ["id", "checked3"]]);
        AddBr(this.form);
        AddHorzDropdown( this.form, "Dropbox", [["select", "select"], ["name", "dropdown"], ["id", "dropdown"]], ["Mercedes", "Toyota", "Mercedes", "Honda", "Mazda"]);        
        AddBr(this.form);        
        AddHorzForm( this.form, null, [["input", "input"],["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"],["class", "wrap"], ["onclick", funct]]);

        content.appendChild(this.form); 
    }


    this.LoginForm = function(funct){

        content.innerHTML = "";
        this.CleanForm();
        //  text input
        AddHorzForm( this.form, "User Email", [["input", "input"],["type", "text"], ["name", "email"], ["id", "email"]]);
        AddHorzForm( this.form, "Password", [["input", "input"],["type","password"],["id","password"],["name", "password"]]);
        AddBr(this.form);
        // submit button
        AddHorzForm( this.form, null, [["input", "input"],["type", "button"], ["id", "id"], ["name", "submit"], ["value", "Submit"],["class", "wrap"], ["onclick", funct]]);

        content.appendChild(this.form);        
    }
}