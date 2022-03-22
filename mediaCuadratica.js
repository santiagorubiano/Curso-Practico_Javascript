// cacular la media cuadratica//

// - 1.Elevar los datos y guardarlos en nuevo array //
// - 2.sumar todos los elementos del array//
// - 3.Dividirlos en la cantidad de elementos que hay //
// - 4.calcular la raiz cuadrada del valor anterior//
const numerosElevados=[];
let sumaLista;
const lista = [
    4,
    5,
    6,
    10,
    12,
    15,
    
];
function mediaCuadratica(lista){
     lista.forEach(element => {
         numerosElevados.push(Math.pow(element,2));
       });
   

      sumaLista = Math.sqrt(numerosElevados.reduce(function(a,b){return a+ b})/ numerosElevados.length).toFixed(2);
        return sumaLista
    }
  
   
    