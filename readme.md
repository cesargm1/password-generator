1. math floor redondea hacia abajo un numero si el numero que pasamos por parametro es 5,2 redondeara a 5 y si es 5,9 redondeara a 5

2. math random genera un mumero aleatorio del 0 al 0,9999999999999999 con 16 decimales sin contar el 1

resultado de los pasos 1 y 2 primero redondeamos el numero hacia abajo con math floor que sera la longitud de la constante symbols ahora que tenemos un numero entero porque lo multiplicamos por la longitud del string que son 25 digitos como se cuenta a partir del 0 generamos un numero aleatorio del 0 al 24

3. cuando nosotros llamemos a symbolsIndex Nos dara un numero entre 0 y 24 cada vez que ejecutemos el console.log

example guarda la longitud del string symbols

> Todos los tipos de datos tienen un indice javascript lo genera automaticamente

Por ejemplo si tenemos un string con numeros del 1 al 10 y queremos acceder al numero 8

tendriamos que poner esto nombre de variable[7]

**const example = symbols.length;**

```js
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";

const symbolsIndex = Math.floor(Math.random() * symbols.length);

console.log(symbolsIndex);

const example = symbols.length;

console.log(example);
```

## Expliquemos como conseguir un caracter aleatorio

esto se aplica tanto a numeros como simbolos

```js
const generateLetters = () => {
	let result = "";

	for (i = 0; i <= 7; i++) {
		const lettersIndex = Math.floor(Math.random() * letters.length);
		const randomLetter = letters[lettersIndex]; // Accede al símbolo en ese índice

		result += randomLetter;
	}
	return result;
};

console.log(generateLetters());
```

1. creamos una funcion que nos genere letras aleatorias

2. creamos una variable resultado vacio ahi almacenaremos el resultado de las letras aleatorias

3. definimos un bucle for la variable i sera cada elemento y si es menor a 7 se ira incrementando hasta llegar al mismo en este ejemplo sacara 7 numeros

4. si esta condicion se cumple creamos un indice este paso ya explicamos al principio del documento

5. Generamos una letra aleatoria con la constante **randomLetter** obtendra la letra accediendo a la posicion del indice que tenga dicha letra

6. por ultimo a la variable result le asignamos el contenido de randomLetter con el operador += que sirve para abreviar la concatenacion en js si no tendramos que poner esto

```js
const allResult = result + randomLetter;
```

7. hacemos un return de result

8. Hacemos un console.log() llamando a la funcion
