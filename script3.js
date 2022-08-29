function rRequestPage( path, string, element){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", path, true);

    xhr.setRequestHeader("Content-type", "application/json");
    var obj = JSON.stringify(string);
    xhr.send(obj);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log("receive messages: ", this.responseText);

            if( isJson(this.responseText) == true){

                var json = JSON.parse(this.responseText);    
                
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
        }
    }


}



class XMRequest(){
    constructor(path, string, element){
        this.path       = path;
        this.string     = string;
        this.element    = element;
    }

    send(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.path, true);

        xhr.setRequestHeader("Content-type", "application/json");
        var obj = JSON.stringify(this.string);
        xhr.send(obj);

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){

                console.log("receive messages: ", this.responseText);

                if( isJson(this.responseText) == true){

                    var json = JSON.parse(this.responseText);    
                    
                    switch( json.Page ){
                        case "page":
                            func_page();
                        break;

                        case "login":
                            func_login();
                        break;

                        case "data":
                            func_data();
                        break;

                        case "nav":
                            func_nav();
                        break;

                        default:
                        console.log("Function RequestPage: not found!", json);
                    }
                }else{
                    console.log("Function RequestPage: not a json!");
                    // facepalm, this is not a json
                }
            }
        }
    }

    var func_page;
    var func_login;
    var func_data;
    var func_nav;
}