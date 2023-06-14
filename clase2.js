    function alertar() {
  
        let a= document.getElementById('nombre').value;
        let b= document.getElementById('apellido').value;
        let fn = document.getElementById('fnacimiento').value;
        
        
        let texto = " Hola " + a + "  " + b + " te saludamos en este dia " + fn;
        
        let textoUp = texto.toUpperCase();
        let textoDown = texto.toLowerCase();
        let textoFinal = textoUp + '<hr>' + textoDown;
        document.getElementById('parrafoSaludo').innerHTML= textoFinal;
        document.getElementById('parrafoSaludo').style="font-family: 'Montserrat'; font-weigth: normal; padding-left: 2%; padding-bottom: 2%;" ;
    }
    
    

    function telefono(){
        let phone = document.getElementById('telefono').value;
        let a= document.getElementById('nombre').value;
        let b= document.getElementById('apellido').value;
        let texto = " Hola " + a + "  " + b + " entonces tu numero de movil es  " + phone

        document.getElementById('parrafoSaludo1').innerHTML= texto;
        document.getElementById('parrafoSaludo1').style="font-family: 'Montserrat'; font-weigth: normal; padding-left: 2%; padding-bottom: 2%;" ;
    }

    function modificarParrafo(){
        let phone = document.getElementById('telefono2').value;
        let a= document.getElementById('nombre2').value;
        let b= document.getElementById('apellido2').value;
        let texto = " Hola " + a + "  " + b + " entonces tu numero de movil es  " + phone
        
        let textoUp = texto.toUpperCase();
        let textoDown = texto.toLowerCase();

        document.getElementById('parrafoSaludo2').innerHTML= textoUp;
        document.getElementById('parrafoSaludo2').style="font-family: 'Montserrat' font-weight: bolder; font-style: italic; color: blue; border: solid 1px black;border-radius: 10px; padding-left: 2%; padding-bottom: 2%;";
        document.getElementById('parrafoSaludo3').innerHTML= textoDown;
        document.getElementById('parrafoSaludo3').style="font-family: 'Montserrat'; font-weight: bolder; font-style: italic; color: brown; border: solid 1px black; border-radius: 10px; padding-left: 2%; padding-bottom: 2%;";

    }
    function calcularPi(radio){
        
	    const pi = 3.1416;
	    let r = +radio;

	    let  area = pi*r*r;
        area = area.toFixed(2);
        let perimetro = 2*pi*r;
        perimetro = perimetro.toFixed(2);
        let texto = "El area de un circulo de radio " + r + " es igual a: " + area +'<br>' + "El perimetro de un circulo de radio " + r + " es igual a: " + perimetro;

        document.getElementById('mensajeAreaPerimetro').innerHTML= texto;
        document.getElementById('mensajeAreaPerimetro').style="font-family: 'Montserrat'; color: white; padding-bottom: 2%;";
    }
    function calculaIva(precio){
        let p = +precio;
        let texto = "El " + '<strong>' + "4%" +'</strong>' + " de IVA del precio ingresado, equivale a "+ '<strong>'+(p*0.04).toFixed(2)+ '</strong>' + ". El total es entonces:  " + '<strong>'+(p*1.04).toFixed(2) + '</strong><br>' ;
         texto += "El " + '<strong>' + "5%" +'</strong>' + " de IVA del precio ingresado, equivale a "+ '<strong>'+(p*0.05).toFixed(2)+ '</strong>' +". El total es entonces:  "+ '<strong>' +(p*1.05).toFixed(2)+ '</strong><br>';
        texto += "El " + '<strong>' + "10%" +'</strong>' + " de IVA del precio ingresado, equivale a "+ '<strong>'+(p*0.1).toFixed(2)+ '</strong>' +". El total es entonces:  " + '<strong>'+(p*1.10).toFixed(2)+ '</strong><br>';
        texto += "El " + '<strong>' + "21%" +'</strong>' + " de IVA del precio ingresado, equivale a "+ '<strong>'+(p*0.21).toFixed(2)+ '</strong>' + ". El total es entonces:  " + '<strong>'+ (p*1.21).toFixed(2)+ '</strong><br>';
        document.getElementById('textoIva').innerHTML = texto;

    }
    function esParImpar() {
        let n= +document.getElementById('numero').value
       return n % 2 === 0 ? 'Par' : 'Impar';
        
      }

      function verificar(){
        let num = esParImpar();
        document.getElementById('parImpar').innerHTML = num;
      }
      function eliminar(){
    
        document.getElementById('aBorar').style="Display: none";
        
      }
      function regresar(){
              document.getElementById('aBorar').style="Display: contents ";
        }
        
        function mayorNumero(){

            var n1,n2,n3,t,mayor;
        n1 = parseInt(prompt("Número 1"));
        n2 = parseInt(prompt("Número 2"));
        n3 = parseInt(prompt("Número 3"));
    
        if (n1 > n2) {
            t = n1;
        }else{
            t = n2;
        }
    
        if (t > n3) {
            mayor = t;
        }else{
            mayor = n3;
        }
    



        // document.writeln('El mayor es: ' + Math.max(a,b,c));
        
        
         document.getElementById('textoMayor').innerHTML =  ("El mayor es "+mayor); 


        }
        
    


