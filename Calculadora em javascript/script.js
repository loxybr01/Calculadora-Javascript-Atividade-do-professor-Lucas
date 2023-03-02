let display = document.getElementById('display');

function insert(value) {
	display.value += value;
}

function clearDisplay() {
	display.value = '';
}

function calculate() {
	display.value = eval(display.value);
}
