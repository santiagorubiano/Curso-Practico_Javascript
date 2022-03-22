//helpers   

function esPar(numero){
    return (numero % 2 ===0);  // creampos una funcion que comprueba si un numper es par o inpar, si es par devuelve true si es impar devuelve false
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(       
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+ nuevoElemento;
        }
    )
    const promedioLista = sumaLista/ lista.length;
    return promedioLista; // sacamos el promedio de la lista de sueldos 
    }
//calculadora de mediana 

function medianaSalarios(lista){
    const mitad =parseInt(lista.length/2)  // convertimos el numero a un entero 
    if(esPar(lista.length)){   
        const personaMitad1 =lista [mitad];  // encontramos los dos numeros de la mitad
        const personaMitad2 =lista [mitad-1];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana
    
    
    }else{
        const personaMitad =lista [mitad] 
        return personaMitad  // encontraos el numoer de la mitad
    }
    };
//mediana general 

const salariosColombia = colombia.map(
    function (personita) {          //creamos un array con nombre salarios colombia 
        return personita.salary; 
    }
);

const salariosColombiaSorted = salariosColombia.sort((salaryA,salaryb)=>salaryA-salaryb); // ordenaos el array


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(       
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+ nuevoElemento;
        }
    )
    const promedioLista = sumaLista/ lista.length;
    return promedioLista; // sacamos el promedio de la lista de sueldos 
    }



const medianaGeneralCol= medianaSalarios(salariosColombiaSorted)

//mediana del top10%


const spliceStart =(salariosColombiaSorted.length * 90)/ 100;
const spliceCount =salariosColombiaSorted.length- spliceStart; 
const salariosColTop10 = salariosColombiaSorted.splice(
    spliceStart,
    spliceCount,  
);


const medianaTop10Col = medianaSalarios(salariosColTop10)
console.log( {
    medianaGeneralCol,                   // imprimimos la funcionn medianaSalarios y le damos como paramtro salariosColombiaSorted  
    medianaTop10Col,

}
)
   