
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