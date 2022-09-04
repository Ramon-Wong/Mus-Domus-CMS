


// Hey CoPilot.
// Gimme the best suggestion on where I can insert a Callback in the RequestPage function.
// for now the Callback can be an empty function, I'll change things when I get the test that I wanted
// Go go go Copilot.

function RequestPage( path, string, element, callback){

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
            this._string = json;
            console.log("json: " + JSON.stringify(this._string));
            
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

    xhr.done = function(){
        callback();
        console.log("done: > ". this._string);
    }
}


RequestPage.prototype.ShowPage    = function(){
    // console.log("Post Page stuff " + this._string.key);
    //dump contents of this.string element(Json) to console log(string)

    this._element.innerHTML = this._string.page;
}


RequestPage.prototype.ShowLogin   = function(){
    // note to self: 
    // need to figure out on sending encrypted data to the server
    // link https://stackoverflow.com/questions/24337317/encrypt-with-php-decrypt-with-javascript-cryptojs
    
    // this._element.innerHTML = this._string.message;
    
    this._element.innerHTML = JSON.stringify( this._string);
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


var CryptoJSAesJson = {
    stringify: function(cipherParams){
        var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();

        return JSON.stringify(j);
    },
    parse: function(jsonStr) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)

        return cipherParams;
    }
}

// usage
// var encrypted = CryptoJS.AES.encrypt(JSON.stringify("value to encrypt"), "my passphrase", {format: CryptoJSAesJson}).toString();
// var decrypted = JSON.parse(CryptoJS.AES.decrypt(encrypted, "my passphrase", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));

