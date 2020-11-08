
function nueva_compra() {
    console.log("hora vamos a comprar");

    compra = document.forms[0];
    art ="";
    for (i=0; i<compra.length; i++){
        if (compra[i].checked){
            art = art + compra[i].value + " ";
        }
    }
   alert('Los articulos que agregaste al carrito son: '+ art );      
}
