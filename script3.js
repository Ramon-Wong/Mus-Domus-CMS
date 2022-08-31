



function FormMenu(){
    this.form = document.createElement("form");

    this.form.setAttribute("name", "login_forms");
    this.form.setAttribute("method", "post"); 

    let AddBr = ()=>{ return( document.createElement("br")); }

    function AddLbl(name){ 
        var lbl    = document.createElement("label");
        lbl.setAttribute("for",name);
        lbl.innerHTML  = name;
        return lbl;
    }


    function AddInputText(type, id, name){
        var input   = document.createElement("input");

        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("name", name);

        return input;
    }    

    function AddSubmitButton( name, value){ 
        var input   = document.createElement("input");

        input.setAttribute("type", name);
        input.setAttribute("value", value);

        return input;
    }

    this.BuildForm = function( layout_form){

        this.form.appendChild( AddLbl("useremail"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddInputText("text", "email", "email"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddLbl("Password"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddInputText("password", "pass", "pass"));
        this.form.appendChild( AddBr());
        this.form.appendChild( AddBr());
        this.form.appendChild( AddSubmitButton("submit"));

        content.innerHTML = "";
        content.appendChild(this.form);
    }        
}






// function BuildForm(){
//     function AddBr(){
//         return( document.createElement("br"));
//     }

//     function AddLbl(name){
//         var lbl    = document.createElement("label");
//         lbl.setAttribute("for",name);
//         lbl.innerHTML  = name;
//         return lbl;
//     }

//     function AddInputText(type, id, name){
//         var input   = document.createElement("input");

//         input.setAttribute("type", type);
//         input.setAttribute("id", id);
//         input.setAttribute("name", name);

//         return input;
//     }

//     function AddInputSubmit( name){
//         var input   = document.createElement("input");

//         input.setAttribute("type", "submit");
//         input.setAttribute("value", "submit");

//         return input;
//     }

//     var form = document.createElement("form");
//     form.setAttribute("name", "login_forms");
//     form.setAttribute("method", "post");

//     form.appendChild(AddLbl("useremail"));
//     form.appendChild(AddBr());
//     form.appendChild(AddInputText("text", "email", "email"));
//     form.appendChild(AddBr());
//     form.appendChild(AddLbl("Password"));
//     form.appendChild(AddBr());
//     form.appendChild(AddInputText("password", "pass", "pass"));
//     form.appendChild(AddBr());
//     form.appendChild(AddBr());
//     form.appendChild(AddInputSubmit("submit"));

//     content.innerHTML = "";
//     content.appendChild(form);

//     form.addEventListener('submit', function(evt){
//         evt.preventDefault();

//         if( ValidateEmail(form.email) == true){
//             var email = form.email.value;
//             var pass  = form.pass.value;
//             var jsonstr = '{"key": "' + key + '", "page": "request", "email": "' + email + '", "pass": "' + pass + '"}';
//             RequestPage("listener.php", JSON.parse(jsonstr), content);
//         }
//     });    
// }


