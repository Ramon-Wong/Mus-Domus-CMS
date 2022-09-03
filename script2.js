
function RequestPage( path, string, element){

    this._path      = path;
    this._string    = string;
    this._element   = element;

    RequestPage.ShowPage    = function(){}
    RequestPage.ShowLogin   = function(){}    
    RequestPage.ShowLogout  = function(){}
    RequestPage.ShowTest    = function(){}
    RequestPage.ShowNav     = function(){}

    var xhr = new XMLHttpRequest();
    xhr.open("POST", path, true);

    xhr.setRequestHeader("Content-type", "application/json");

    var Obj = JSON.stringify(string);
    xhr.send(Obj);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            var json = JSON.parse(this.responseText);

            switch(json.type){
                case "page":
                    RequestPage.prototype.ShowPage.call();
                    break;

                case "login":
                    RequestPage.prototype.ShowLogin.call();
                    break;    

                case "logout":
                    RequestPage.prototype.ShowLogout.call();
                    break;

                case "test":
                    RequestPage.prototype.ShowTest.call();
                    break;

                case "nav":
                    RequestPage.prototype.ShowNav.call();
                    break;

                default:
                    console.log("not supported type");
            }
        }
    }    
}


RequestPage.prototype.ShowPage    = function(){
    // console.log("Post Page stuff " + this._string.key);
    //dump contents of this.string element(Json) to console log(string)
    console.log(this._string);

    this._element.innerHTML = this._string.page;
}


RequestPage.prototype.ShowLogin   = function(){
    console.log("ShowLogin stuff");

    this._element.innerHTML = "Login stuff";    
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