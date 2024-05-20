const reverseString = (cadena) => {
  if (!cadena) {
    console.warn(`La cadena no puede estar vacía`);
  } else {
    reversedString = cadena.split('').reverse().join('')
  }
  console.info(reversedString)
};

reverseString('Alexander');

const contarPalabra = (cadena = "", palabra) => {
  if (!cadena) {
    return `No se envío ninguna cadena para examinar`;
  } else if (cadena == ` `) {
    return `La cadena no puede estar vacía`;
  } else {
    let arreglo = cadena.split(" ");
    let veces = 0;
    for (let index = 0; index < arreglo.length; index++) {
      if (arreglo[index] == palabra) {
        veces++;
      }
    }
    return `La palabra "${palabra}" se repite en la cadena "${cadena}" un total de ${veces} veces.`;
    cadena.index
  }
};

console.log(contarPalabra("Hola mundo adiós mundo", `mundo`));

const palindrome = (cadena = "") => {
  if (!cadena){
    return `No se envió ninguna cadena para examinar`
  } else if(cadena === undefined) {
    return `No se puede examinar una cadena vacía`
  } else {
    let reversedString = cadena.split('').reverse().join('')

    if (reversedString == cadena) {
      return `La palabra es un palíndromo`
    } else {
      return `La palabra no es un palíndromo`
    }
  }
};

console.log(palindrome(`alexander`))

const deletePattern = (phrase = '', pattern = "") => {
  const newString = phrase.replaceAll(pattern, '')

  console.log(newString)
}

deletePattern('AlexanderAlex', 'Alex')