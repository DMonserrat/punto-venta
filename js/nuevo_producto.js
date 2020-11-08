document.addEventListener("DOMContentLoaded", function(event) {
    console.log("hora vamos a registrar un nuevo producto");
});

function nuevo_produc(){
    datos =document.getElementsByName("abarr_nombre")[0].value+
            document.getElementsByName("costo")[0].value+
            document.getElementsByName("cantidad")[0].value+
            document.getElementsByName("categoria")[0].value;
    alert("haz agregado un nuevo producto");
}
