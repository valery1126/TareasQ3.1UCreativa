/* Tarea #1 
*  Valery Campos Vasquez
*/

/* ------ Ejecicio 1 ------ */

function uniqC(...values) {
    return getSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
  }
  
  function getSubArrays(...values) {
    let start = 0;
    let end = 0;
    const subValues = [];
    for (let index = 0; index < values.length; index++) {
      if (values[index] === values[index + 1]) end++;
      else {
        subValues.push(values.slice(start, end + 1));
        start = end + 1;
        end = start;
      }
    }
    return subValues;
  }

  console.log(uniqC('a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'b', 'c'));

/* ------ Ejecicio 2 ------ */

function aplanar(values){

    return values.some(Array.isArray) ? aplanar([...values.flat()]) : values;
    
}

console.log("------ Ejecicio 2 ------");
console.log(aplanar(['v', [2, 3], 4, 5, [6, [7,[8]]]]));

/* ------ Ejecicio 3 ------ */

let arrayPalabras = ['bow','crystal','organic','ally','rain','line']
let meta = "rainbow";

function palabraCompuesta(arrayPalabras, meta){

    let  i=0;
    let palabraCompuesta;
    let result;

    while(i < arrayPalabras.length){

        let palabra = arrayPalabras[i];

        for (let index = 0; index < arrayPalabras.length; index++){

            palabraCompuesta = palabra + arrayPalabras[index];

            if(meta == palabraCompuesta){
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



