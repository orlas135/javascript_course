function contarCaracteres(x = ``) {
  if (!x) {
    console.warn(`No se ingresó ninguna cadena`);
  } else {
    console.log(`La cadena ${x} tiene un total de ${x.length} caracteres`);
  }
}
contarCaracteres(`Alexander`);

function recortar(cadena = ``, recorte) {
  !cadena
    ? console.warn(`No se ingresó ninguna cadena para recortar`)
    : cadena == " "
    ? console.warn(`La cadena enviada no puede estar vacía`)
    : !recorte
    ? console.warn(`No se envió caracter para recortar la cadena enviada`)
    : recorte == " "
    ? console.warn(
        `El caracter enviado para recortar la cadena no puede ser un espacio`
      )
    : console.log(
        `La cadena recortada por el carácter ${recorte} es: ${cadena.substring(
          recorte
        )}`
      );
}
recortar(`Isabela`, 3);

function stringToArray(cadena, caracter) {
  !cadena
    ? console.warn(`No se ingresó ninguna cadena para convertir`)
    : cadena == " "
    ? console.warn(`La cadena no puede ser un espacio`)
    : !caracter
    ? console.warn(`El caracter separador no puede estar vacío`)
    : console.log(cadena.split(caracter));
}

stringToArray("Alexander Orlas Gutierrez", " ");

function repetirString(cadena, veces) {
  if (!cadena) return console.warn(`La cadena no puede estar vacía`);
  if (!veces) return console.warn(`La cantidad a repetir no puede estar vacía`);
  if (veces === undefined)
    return console.warn(`El número de veces no fue definido`);
  if (veces == 0)
    return console.warn(
      `La cantidad de veces a repetir el texto no puede ser cero`
    );
  if (Math.sign(veces) == -1)
    return console.warn(
      `La cantidad de veces a repetir el texto no puede ser negativa`
    );
  for (let i = 1; i <= veces; i++) {
    console.log(cadena);
  }
}

repetirString(`Alex`, 4);
