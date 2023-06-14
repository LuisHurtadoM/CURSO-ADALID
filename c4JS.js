function calcular(){
    var edad = document.getElementById('number1').value
    switch (edad) {
        case 18:
            document.write("Votas por primera vez")
            break;
    
        default:
            document.write("No votas en esa oportunidad.")
            break;
    }
}
function sumar(){
    var i = 0;
     let Texto =  '</br>' +"  El texto es el siguiente  ";
    let suma = 0;
    while(i<101){
        
        Texto += document.getElementById('parrafo').innerHTML= suma + ' + ' + i + ' = '+ (suma+i) + '</br>';
        suma += i;
        document.getElementById('parrafo').innerHTML=  Texto ; 

        i++;
    };

    
}

function usoFor(){

        Texto = '<br>' + " " ;
        let suma = 0;
    for (let i = 0; i<201; i++) {
        
        Texto += suma + " + " + i + " = " + (suma+i) +'<br>';
        suma += i;
        
        
    }
    document.getElementById('parrafo').innerHTML =suma + Texto;
}