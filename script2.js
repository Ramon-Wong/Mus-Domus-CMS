


var Payload = ( type, value) => {

    this.obj = {};
    this.obj["key"] = key;
    this.obj["type"] = type;
    this.obj["page"] = value;

    return this.obj;
}


var ReadFetch = (url, message, element) => {
    
    return fetch( url, { method:'POST', headers:{'Accept':'application/json','Content-type':'application/json'}, body:JSON.stringify(message)})
            .then( response => response.json())
            .then(data =>{  console.log(data);          
                            element.innerHTML = JSON.stringify(data);
                        
    }).catch(err => console.log(err));
}



function RequestPage( path, string, element){

    this._path      = path;
    this._string    = string;
    this._element   = element;

    RequestPage.ShowPage    = function(){}
    RequestPage.ShowLogin   = function(){}
    RequestPage.ShowLogout  = function(){}
    RequestPage.ShowTest    = function(){}
    RequestPage.ShowNav     = function(){}

    ReadFetch( this._path, this._string, this._element);
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

