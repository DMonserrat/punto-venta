function pregunta_nom() {
    person_nom = prompt ('Ingresa tu nombre');
    if (person_nom !=null) {
        alert('Hola '+person_nom.toUpperCase()+' te invitaos a ser emprendedora y a desarrollar tu autonomía económica');  
    }
}
function confirma(){
    confirm('¿Deseas saber acerca de autonomía económica de las mujeres?');
    pregunta_nom();
}

alert('BIENVENIDAS MUJERES EMPRENDEDORAS!!');
confirma();







