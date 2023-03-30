import validator from './validator.js';

//Con esto estoy estoy definiendo que tengo que acceder primero al formulario con querySelector
const formularioTarjeta = document.querySelector('#formularioTarjeta');

//Con esto esoty definiendo que tengo que acceder primero al numero y luego al nombre de la forma tarjeta
const formaTarjetaNumero= document.querySelector('#allFormaTarjeta .numeroFormaTarjeta');
const formaTarjetaNombre= document.querySelector('#allFormaTarjeta .nombreFormaTarjeta');

//Esto de aqui no tiene mucho sentido a mi parecer, si se puede busca mas información
//const numerotarjeta = document.querySelector('#numeroTarjeta');


//Para voltear la tarjeta
//const mostrarFrente =() => {
//  if (formularioTarjeta.classList.contains('active')){
//    formularioTarjeta.classList.remove('active')
//  }
//}

formularioTarjeta.numeroFormularioTarjeta.addEventListener ('keyup', (e) => {
  //Este console.log es para ver la impresión de e en la consola
  //console.log(e.target.value)
  //Esta variable me guarda el valor de formulario.numeroTarjeta
  const valorNumeroFormularioTarjeta= e.target.value;

  //vamos a eliminar todo lo que no sea numero del input de la tarjeta
  formularioTarjeta.numeroFormularioTarjeta.value=valorNumeroFormularioTarjeta
    //Para los espacios en blanco expresion regular \s
    .replace(/\s/g, '')
    //Para las letras expresion regular \D
    .replace(/\D/g, '')
    //Para poner un bonito espacio cada 4 numeros y se vea como de tarjeta
    //.replace(/([0-9]{4})/g, '$1 ')
    //Para que el último espacio se borre 
    .trim();

  formaTarjetaNumero.textContent=valorNumeroFormularioTarjeta;
  if (valorNumeroFormularioTarjeta === ""){
    formaTarjetaNumero.textContent= '#### #### #### ####';
  }else{
    const ValorPrueba = valorNumeroFormularioTarjeta2.value;
    const maskifyVariable = validator.maskify(ValorPrueba);
    //console.log(maskifyVariable);
    formaTarjetaNumero.textContent= maskifyVariable
    //console.log(formaTarjetaNumero.textContent);
  }
   
});
    

formularioTarjeta.nombreFormularioTarjeta.addEventListener('keyup', (e) => {
  const valorNombreFormularioTarjeta = e.target.value;
  formularioTarjeta.nombreFormularioTarjeta.value = valorNombreFormularioTarjeta
    .replace(/[0-9]/g, '');
  formaTarjetaNombre.textContent = valorNombreFormularioTarjeta;
  if(valorNombreFormularioTarjeta === ""){
    formaTarjetaNombre.textContent = 'Jhon Doe';
  }
    
});

//formularioTarjeta.mesFormularioTarjeta.addEventListener('keyup', (e) => {
//    let valorMesFormularioTarjeta = e.target.value;
//    formularioTarjeta.mesFormularioTarjeta.value = valorMesFormularioTarjeta
//    .replace(/[0-9]/g, '');
//    formaTarjetaNombre.textContent = valorMesFormularioTarjeta;
//    if(valorMesFormularioTarjeta == ""){
//        formaTarjetaNombre.textContent = 'MM';
//    }
    
//});




const botonValor=document.getElementById('botonPagar');
const valorNumeroFormularioTarjeta2 =document.getElementById('numeroFormularioTarjeta');
const valorNombreFormularioTarjeta2 =document.getElementById('nombreFormularioTarjeta');
const valorCvvFormularioTarjeta2 = document.getElementById('cvvFormularioTarjeta')

botonValor.addEventListener('click', function boton() {
  
  const valorPrueba = valorNumeroFormularioTarjeta2.value;
  const valorNombre = valorNombreFormularioTarjeta2.value;
  const valorCVV = valorCvvFormularioTarjeta2.value;
    
  //console.log(valorPrueba);
  
  
  if (valorPrueba==="" && valorNombre!=="" && valorCVV!=="") {
    alert("Por favor introducir el numero de la tarjeta"); 
  }else if (valorPrueba!=="" && valorNombre==="" && valorCVV!==""){
    alert("Por favor introducir el nombre de titular de la tarjeta");
  }else if (valorPrueba!=="" && valorNombre!=="" && valorCVV===""){
    alert("Por favor introducir el CVV de la tarjeta");
  }else if (valorPrueba==="" && valorNombre==="" && valorCVV!==""){
    alert("Por favor introducir el numero y el nombre de titular de la tarjeta");
  }else if (valorPrueba==="" && valorNombre!=="" && valorCVV===""){
    alert("Por favor introducir el numero y el CVV de la tarjeta");
  }else if (valorPrueba!=="" && valorNombre==="" && valorCVV===""){
    alert("Por favor introducir el nombre y el CVV de la tarjeta");
  }else if (valorPrueba==="" && valorNombre==="" && valorCVV===""){
    alert("Por favor introducir el numero, el nombre de titular y el CVV de la tarjeta");
  }else if (valorPrueba!=="" && valorNombre!=="" && valorCVV!=="" && validator.isValid(valorPrueba)=== true){
    alert("Su pago esta siendo procesado");
  }else if (valorPrueba!=="" && valorNombre!=="" && valorCVV!=="" && validator.isValid(valorPrueba)=== false){ 
    alert("La tarjeta no es válida, introduzca otra tarjeta");
  }
// if (validator.isValid(valorPrueba)=== true && valorPrueba !== ""){
//   alert("Su pago esta siendo procesado");
// }else if (validator.isValid(valorPrueba)===false){
//   alert("La tarjeta no es válida, introduzca otra tarjeta");
});

    

console.log(validator);
