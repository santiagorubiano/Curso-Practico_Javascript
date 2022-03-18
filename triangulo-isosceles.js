function trianguloIsoscelesAltura (Lado1,Lado2,Base,){
    if (Lado1===Lado2 && Lado1!= Base){
        alert('isosceles')
        const altura = Math.sqrt((Lado1 **2) - (Base **2 / 4))       
         console.log(altura)
    }
    else if(Lado1!=Lado2 ){
        console.log("Error no es un triangulo Isosceles")
        
    }
    
}
trianguloIsoscelesAltura(6,6,4)