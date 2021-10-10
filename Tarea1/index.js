/* Tarea #1 
*  Valery Campos Vasquez
*/

/* ------ Ejecicio 1 ------ */

function uniqC(){
    let data = ['a','a','b','b','c','a','b','c'];
    const dataArry = new Set(data);
    let unique = [...dataArry];
    result = [];
    

    for (let i = 0; i < unique.length; i++){

        let cont=0;

        for (let j = 0; j < data.length; j++){

            if(unique[i] == data[j]){
                cont++;               
            }
        }

        result[i]=unique[i]+","+cont;
    }


    console.log(data);
    console.log(result);
    
}
console.log("------ Ejecicio 1 ------")
uniqC();

/* ------ Ejecicio 2 ------ */

let lista = [1, [2, 3], 4, 5, [6, [7,[8]]]];//Probar con letras

function aplanar(lista){

    let listaAplanda = lista.flat(Infinity);
    return listaAplanda
    
}

console.log("------ Ejecicio 2 ------");
console.log(aplanar(lista));

/* ------ Ejecicio 3 ------ */

let arrayPalabras = ['bow','crystal','organic','ally','rain','line']
let meta = "rainbow";

function palabraCompuesta(arrayPalabras, meta){

    let  i=0;
    let palabraComb;
    let result;

    while(i < arrayPalabras.length){

        let palabra = arrayPalabras[i];

        for (let index = 0; index < arrayPalabras.length; index++){

            palabraComb = palabra + arrayPalabras[index];

            if(meta == palabraComb){
                result = "Palabras: " + palabra +","+ arrayPalabras[index] + "\n" + "Posiciones: "+ i +","+ index;
                break;
            }          
        }

        i++;

    }
    
    return result;

}

console.log("------ Ejecicio 3 ------")
console.log(palabraCompuesta(arrayPalabras,meta));

/* ------ Ejecicio 4 ------ */

function elevaCuadrado(num){
    let str = num.toString();
    let result="";

    for (let index = 0; index < str.length; index++){
        numStr = Math.pow(str[index],2).toString();
        result = result+""+numStr;
    }
    
    return result;
}

console.log("------ Ejecicio 4 ------")
console.log(elevaCuadrado(9119));



