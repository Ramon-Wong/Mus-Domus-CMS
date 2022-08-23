var Element = document.getElementById("Button6");
Element.addEventListener("click", Funct5);

function Funct5(){      RequestPage("listener.php", JSON.parse('{"key": "' + key + '", "type": "page", "page": "Request"}'), content);}