
// need to change RequestPage, adding virtual functions and parameters
// need to create a seperate branch for this.


function RequestPage( path, string, element){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", path, true);

    xhr.setRequestHeader("Content-type", "application/json");

    var obj = JSON.stringify(string);
    xhr.send(obj);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            element.innerHTML = this.responseText;
        }
    }    
}


function ShowMsg(){
    console.log("Hello World");
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