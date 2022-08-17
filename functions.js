/*  Read or get data of pages    */
function Recuperare_Recordum(path){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', path, true);
    console.log(path);

    xhr.onload = function(){
        if(this.status == 200){
            //console.log(this.responseText);                
        }
    }

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            content.innerHTML = this.responseText; 
        }
    }
    xhr.send();
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
