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

function calcularDiametroCirculo(){
    const radio = document.getElementById("InputradioCirculo")
    const R = parseInt(radio.value);

    const diametro = diametroCirculo(R);
    alert(diametro )
   
}
function calcularAreaCirculo(){
    const radio = document.getElementById("InputradioCirculo")
    const R = parseInt(radio.value);

    const area = areaCirculo(R);
    alert(area )

    
}