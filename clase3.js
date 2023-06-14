function alertar() {

    let a= document.getElementById('nombre').value;
    let b= document.getElementById('apellido').value;
    
    operaciones = " Hola " + a + "  " + b + " te saludamos en este dia"

     document.getElementById('textoEjercicio1').innerHTML= operaciones; 
}