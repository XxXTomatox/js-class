/**
 * banco 
 * ATM
 * retirro 
 * tranferencias 
 * depocitar 
 * consulas (saldo)
 */

const retiro=(persona,monto) =>{
    console.log("retiro");
    persona.saldo = persona.saldo - monto;
    console.log("tu nuevo saldo es de $" ,persona.saldo);
}
const tranferir=(persona,monto,benef) =>{
    if (persona.saldo < monto) {
        console.log('saldo insuficiente');
    }else{
        persona.saldo = persona.saldo - monto;
        benef.saldo = benef.saldo + monto;
        console.log("tu nuevo saldo es de $" ,persona.saldo);
    }
}
const depocitar=(benef,monto) =>{
    console.log("depocitar");
    benef.saldo = benef.saldo + monto;
    console.log("tu nuevo depocito es de $", benef.saldo);
}
const saldo=(persona) =>{
    return persona.saldo;
}
const consultar_saldo=(persona) =>{
    console.log("consulta saldo");
    console.log('tu saldo es $',persona.saldo);
}

const gustabo ={
    nc:123456,
    saldo:500,
}
const axel ={
    nc:123456,
    saldo:100
}
consultar_saldo(axel);
tranferir(gustabo,100,axel);

/*
let nombre = 'Lorena';
let saldo = 100;

///
let nombre2 = 'padilla'
let saldo2 = 150;

let cuenta = nombre;
let benef = nombre2

//let op = 'consultar saldo';

let cuenta2 =nombre2;
 let op = tranferir ;

switch (op) {
    case 'consultar_saldo':
        switch (cuenta) {
            case 'lorena':
                saldo = saldo + monto
                console.log(saldo);
                break;
            case 'padilla':
                saldo2 =saldo2 + monto;
                console.log(saldo2);
                break;
        }
        if (cuenta == 'lorena') {
            console.log(saldo);
        }
        break;
    case 'tranferir':
            switch (cuenta) {
                case 'lorena':
                    saldo = saldo - monto;
                    saldo2 =saldo2 + monto;
                    console.log(saldo);
                    break;
                case 'padilla':
                    saldo2 = saldo2 - monto;
                    saldo = saldo + monto;
                    console.log(saldo2);
                    break;
            }
            if (cuenta == 'lorena') {
                console.log(saldo);
            }
            break;
    

    default:
        console.log('bye bye');
        break;
}
*/
