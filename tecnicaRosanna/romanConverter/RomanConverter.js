const input = document.getElementById("input");
const btn = document.getElementById("btn");
const resultNumber = document.getElementById("resultNumber");
const resultRoman = document.getElementById("resultRoman");

const romanConverter = number => {
	number = Number(number);
	if (number < 1 || number > 3999) {
		alert("Please enter a number between 1 and 3999.");
		return;
	}
	let roman = "";
	const romanNumList = {
		1000: "M",
		900: "CM",
		500: "D",
		400: "CD",
		100: "C",
		90: "XC",
		50: "L",
		40: "XL",
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I",
	};
	const numberValues = Object.keys(romanNumList);
	let iterador = numberValues.length - 1;

	while (number > 0) {
		if (number >= numberValues[iterador]) {
			roman += romanNumList[numberValues[iterador]];
			number -= numberValues[iterador];
		} else iterador--;
	}
	return roman;
};

btn.addEventListener("click", () => {
	resultNumber.innerHTML = input.value;
	resultRoman.innerHTML = romanConverter(input.value);
});
