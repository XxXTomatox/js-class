const proto_switch = {
    consultar: (saldo) => {
        console.log(saldo);
    },
    dep: (monto) => {
        console.log("tu saldo se aumenta en ",monto);
    }
}



const response = prompt("Eligue tu opcion \n 1;consutar saldo");
proto_switch[response](500);
proto_switch.dep(100);