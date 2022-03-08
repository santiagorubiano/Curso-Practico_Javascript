//codigo del cuadreado
 console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado) { 
    return lado + lado;
}
console.groupEnd();
//codigos del truangulo
console.group("triangulos")
function perimetroTriangulo(lado1,lado2,base){
    return Number(lado1)+Number(lado2)+Number(base);

}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}


console.groupEnd();
console.group("circulo")

function diametroCirculo(radio){
    return radio*2;
}
const PI= Math.PI;
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*PI;
}
function areaCirculo(radio){
    return (radio*radio)*PI
}


console.groupEnd();

//aqui interactuamos con html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);

    
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro= areaCuadrado(value);
    alert(perimetro);

    
}
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Inputtriangulo1");
    const L1 = parseInt(lado1.value);

    const lado2=document.getElementById("Inputtriangulo2");
    const L2 =parseInt(lado2.value);

    const base =document.getElementById("Inputtriangulobase");
    const B =  parseInt(base.value);
    const perimetro = perimetroTriangulo(L1,L2,B);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const base = document.getElementById("Inputtriangulobase");
    const  B =  parseInt(base.value);

    const altura = document.getElementById("Inputtrianguloaltura");
    const A = parseInt(altura.value);
    const area = areaTriangulo(B,A);
    alert (area)
}

// //// triangulo perimetro
// function calcularPerimetroTriangulo() {
//     const Lado1 = document.getElementById("InputTrianguloLado1");
//     const L1 = parseFloat(Lado1.value);


//     const Lado2 = document.getElementById("InputTrianguloLado2");
//     const L2 = parseFloat(Lado2.value);


//     const Base = document.getElementById("InputTrianguloBase");
//     const B = parseFloat(Base.value);


//     const perimetro = perimetroTriangulo(L1, L2, B)
//     alert("El Perimetro del triangulo es de: " + perimetro + " cm");
// }

// // triangulo area
// function calcularAreaTriangulo() {
//     const Base = document.getElementById("InputTrianguloBase");
//     const B = parseFloat(Base.value);


//     const Altura = document.getElementById("InputTrianguloAltura");
//     const A = parseFloat(Altura.value);

//     const perimetro = areaTriangulo(A,B);
//     alert("El area del triangulo es de: " + perimetro + " cm");
// }

// // circulo Diametro
// function calcularDiametroCirculo() {
//     const Diametro = document.getElementById("InputCirculoDiametro");
//     const D = parseFloat(Diametro.value);

//     const diametro = diametroCirculo(D);
//     alert("El Diametro de tu circulo es de: " + diametro + " cm");
// }
//  //Circulo Area
// function calcularAreaCirculo() {
//     const Area = document.getElementById("InputCirculoArea");
//     const A = parseFloat(Area.value);

//     const area = Math.round(areaCirculo(A));
//     alert("El Area de tu circulo es de: " + area + " cm");
// }
// //Circulo Circunferencia
// function calcularCircunferenciaCirculo() {
//     const Circunferencia = document.getElementById("InputCirculoCircunferencia");
//     const C = parseFloat(Circunferencia.value);

//     const circunferencia = Math.round( perimetroCirculo(C));
//     alert("La Circunferencia de tu circulo es de: " + circunferencia + " cm");
// }
// triangulo perimetro
