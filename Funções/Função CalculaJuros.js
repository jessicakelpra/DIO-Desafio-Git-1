function incrementarJuros(valor,percentualJuros){

    const valorJuros = (percentualJuros/100)*valor;
    return valor + valorJuros;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));

function calcularJuros(){


}


function main(){
    console.log('Programa Principal');
    calcularJuros();

}
main();