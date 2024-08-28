const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";
const password = "";
const cheked = false;

const selectCheked = document.querySelectorAll(".label__input");
const inputPassword = document.querySelector(".wrap__input");
const svgEye = document.querySelector(".wrap__svg");
const buttonPassword = document.querySelector(".generate__password");

const checkActive = () => {
	// añade simbolos

	if (cheked === true && cheked.getAttribute("symbols")) {
	}
	// añade numeros

	if (cheked === true && cheked.getAttribute("numbers")) {
	}

	// añade letras

	if (cheked === true && cheked.getAttribute("characters")) {
	}
};
