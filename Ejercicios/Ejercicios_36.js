// function randomNumber () {
//     return Math.round((Math.random() * 100) + 500)
// }

// console.log(randomNumber())


// const capicua = (numero = 0) => {
//   if (!numero) return console.error ("No ingresaste un número")

//   if (typeof numero !== "number") return console.error("No se puede ingresar un tipo de dato distinto a número") 

//   numero = numero.toString();
//   let numeroAlReves = numero.split('').reverse().join("");

//   return (numeroAlReves === numero)
//   ? console.info(`El número sí es capicua. Número original: ${numero}. Número al revés: ${numeroAlReves}`)
//   : console.info(`El número no es capicua. Número original: ${numero}. Número al revés: ${numeroAlReves}`)
// }

// capicua(2025)
// capicua(2020)
// capicua({})
// capicua(2002)

const factorial = (numero = undefined) => {
  if(numero === undefined)
    return console.error(`No enviaste ninguno número para operar`)

  if(typeof(numero) !== "number")
    return console.error(`No se puede operar con algo que no sea un número`)

  if(Math.sign(numero) < 0)
    return console.error(`No se puede operar con un número negativo`)

  if(numero === 0)
    return console.error(`El número no puede ser cero`)

  let resultado = 1;

  for (let i = numero; i > 1; i--) {
    resultado = resultado*i;
  }

  return console.info(`El factorial del número especificado es: ${resultado}`)
}

factorial(3)
factorial(5)