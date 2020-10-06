$(document).ready(function () {
    traerJson()
});

function traerJson(){
    const xhttp = XMLHttpRequest;
    xhttp.open('GET','https://www.datos.gov.co/resource/gt2j-8ykr.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText());
        }
    }
}