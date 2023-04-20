//Declarar dos variables con var 
function EnviarForm() {
//obtencion de datos de html
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

// Realizar las operaciones aritméticas
var suma = parseFloat(num1) + parseFloat(num2);
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

// Imprimir los resultados en la consola
document.getElementById("suma").innerHTML = suma;  
document.getElementById("resta").innerHTML = resta;  
document.getElementById("multiplicacion").innerHTML = multiplicacion;  
document.getElementById("division").innerHTML = division;  
}


//Declarar dos variables con let
function Form2(){
    //obtencion de datos de html
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let res=document.getElementById("res");
      // Imprimir concatenación en la consola
    res.innerHTML=var1.concat(' ',var2);
}


//Declarar dos variables con const
function ConstType(){
    //obtencion de datos de html
    const vars1 = document.getElementById("vars1").value;
    const vars2 = document.getElementById("vars2").value;
    const res1=document.getElementById("res1");
    const res2=document.getElementById("res2");

    // Imprimir concatenación en la consola
    res1.innerHTML= typeof vars1;
    res2.innerHTML= typeof vars2;
}


// Declarar una variable tipo objeto
function TipoObjetos(){
    const objetos = {
        numero: 88,
        cadena: "ejemplo",
        booleano: false,
        objeto: {}
      };
      
    const res3 = document.getElementById("res3");
    res3.innerHTML = "Número: " + objetos.numero + "<br>" +
                      "Cadena: " + objetos.cadena + "<br>" +
                      "Booleano: " + objetos.booleano + "<br>" +
                      "Objeto: " + JSON.stringify(objetos.objeto);

}


function CalcularNum() {
    const number1 = parseInt(document.getElementById("number1").value);
    let suma = 0;
    
    for (let i = 1; i < number1; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
      }
    }
    
    document.getElementById("res4").innerHTML =suma;
  }