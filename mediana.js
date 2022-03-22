function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+ nuevoElemento;
        }
    )
    const promedioLista = sumaLista/ lista.length;
    return promedioLista;
    }

const lista1=[
    500, //100
    200,//200
    100,//500
    400000000,// 900
    900//400000000
    
];
    const mitadLista1= parseInt(lista1.length/2);

function esPar(n){ 
    if (n % 2 ===0){
        return true
    }else{
        return false
    }
}
let mediana
let listaOrdenada

if (esPar(lista1.length)){
    const listaOrdenada = lista1.sort((a,b)=>a-b)
    const elemento1 = listaOrdenada[mitadLista1];
    const elemento2 = listaOrdenada[mitadLista1 -1];
    const promedioElemento1y2 =  calcularMediaAritmetica([
        elemento1,
        elemento2,
        alert(listaOrdenada)
    ])
    mediana = promedioElemento1y2;
}else{
    const listaOrdenada = lista1.sort((a,b)=>a-b)

    mediana = listaOrdenada[mitadLista1];
    alert(listaOrdenada)


}