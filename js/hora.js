document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Consola del Navegador");
    startTime();
});
function fecha(){
    var d = new Date();
        var n = d.toLocaleDateString();
        document.getElementById("dia").innerHTML = n;
}
function startTime() {
    /*f = new Date();
    document.getElementById("fecha").innerHTML = f;*/

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hora').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    fecha();
}function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}