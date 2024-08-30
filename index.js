const Letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";
const password = "";
const cheked = false;

const selectCheked = document.querySelectorAll(".label__input");
const inputPassword = document.querySelector(".wrap__input");
const svgEye = document.querySelector(".wrap__svg");
const buttonPassword = document.querySelector(".generate__password");

const generatePassword = () => {
	// añade simbolos
	const password = "";

	if (cheked === true && cheked.getAttribute("symbols")) {
		const generateSymbol = () => {
			let result = "";

			for (i = 0; i <= 7; i++) {
				const symbolsIndex = Math.floor(Math.random() * symbols.length);
				const randomSymbol = symbols[symbolsIndex]; // Accede al símbolo en ese índice

				result += randomSymbol;
			}
			return result;
		};

		console.log(generateSymbol());
	}
	// añade numeros

	if (cheked === true && cheked.getAttribute("numbers")) {
		const generateNumber = () => {
			let result = "";

			for (i = 0; i <= 7; i++) {
				const numbersIndex = Math.floor(Math.random() * numbers.length);
				const randomNumber = numbers[numbersIndex]; // Accede al símbolo en ese índice

				result += randomNumber;
			}
			return result;
		};

		console.log(generateNumber());
	}

	// añade letras

	if (cheked === true && cheked.getAttribute("characters")) {
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
	}
};
