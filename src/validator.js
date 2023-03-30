const validator = {

  isValid: function(valorPrueba) {
    //Aqui estoy conviertiendo el numero de la tarjeta en un string porque el split solo funciona con string y es el unico metodo que me se para separarlos digitos
    const cambioAString= valorPrueba.toString();
    //Aplico split para separar los digitos del string y aprovecho de darles reversa
    const separadoString= cambioAString.split('').reverse();
    //console.log(separadoString);
    //voy a hacer un for para poder multiplicar los digitos pares x2 
    //el for tiene que hacer que me tome los numeros pares
    for (let i = 1; i < separadoString.length; i += 2) {
      separadoString[i] = separadoString[i] * 2;
    //console.log(separadoString);
    }
    
    //ya tengo los numeros multiplicados por 2, ahora quiero sumar los digitos 
    //defino que suma empiece en 0 para despues sumarle los digitos a suma
    let suma=0;
    //con un for, voy a decirle que quiero que recorra todos los numeros, a todos los numeros mayores de 10 les saque el residuo de dividirlos entre 10 y le sume el 1 que es del 10
    for (let i =0; i <separadoString.length; i++){
    //Primero voya a encontrar las posiciones del array donde el numero es mayor a 10 con este if
      if(separadoString[i]>=10){
      //si imprimo este console log me va a dar las posiciones del array donde i>10
        separadoString[i] = separadoString[i] - 9;
      }
            
      suma+= parseInt(separadoString[i]);
    }
    if(suma % 10 === 0){
      return true;
    }else{
      return false;
    }
  },
    
  maskify: function(valorPrueba){

    const cambioAStringMaskify = valorPrueba.toString();
    let vacio= "";
    for(let i=0; i<cambioAStringMaskify.length; i++){
      if(i >= cambioAStringMaskify.length - 4 ){
        vacio= vacio + cambioAStringMaskify[i]
      }else{
        vacio = vacio + "#"
      }
    }
    return vacio;
  
    
    
  }
}

export default validator;
