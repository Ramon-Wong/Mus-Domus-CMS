


var Payload = ( type, value) => {

    this.obj = {};
    this.obj["key"] = key;
    this.obj["type"] = type;
    this.obj["page"] = value;

    return this.obj;
}


var  ReadFetch = (url, message, callback) => { 

    return fetch( url, { method:'POST', headers:{'Accept':'application/json','Content-type':'application/json'}, body:JSON.stringify(message)})
            .then( response => response.json())
            .then( data => 
                { callback(data); }
            ).catch(err => console.log(err));
}


function RequestPage( path, string, callback){
    ReadFetch( path, string, (data) => {callback(data);});
}


function CheckAuthentication( callback){
    ReadFetch("listener.php", Payload("Authentication", 0), callback);
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

