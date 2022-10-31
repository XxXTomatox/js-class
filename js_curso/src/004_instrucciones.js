const a= 10
const b =9

const result = (a==b)?console.log('a y b son iguales'):console.log('a y b no son iguales');;
const result2 = (a==b) && console.log('a y b son iguales');
/*
if (a==b) {
    console.log('a y b son iguales ');
}else{
    console.log('no son iguales');
}
*/
const personas = ['america','mario','pedro','juan'];
//                  0        1        2        3
//una funcion que se invoque en lugar de la otra 

function imp(persona) {
    console.log(persona);
}
personas.forEach(imp)

