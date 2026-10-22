function getNumbers() {
    let firstNumber =
        Number(document.getElementById("first-number").value);

    let secondNumber =
        Number(document.getElementById("second-number").value);

    return [firstNumber, secondNumber];
}


function displayResult(result) {
    let output = document.getElementById("output");

    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#f5d37e";
    }
}


function addition() {
    let numbers = getNumbers();

    let result = numbers[0] + numbers[1];

    displayResult(result);
}


function subtraction() {
    let numbers = getNumbers();

    let result = numbers[0] - numbers[1];

    displayResult(result);
}


function multiplication() {
    let numbers = getNumbers();

    let result = numbers[0] * numbers[1];

    displayResult(result);
}


function division() {
    let numbers = getNumbers();

    let result = numbers[0] / numbers[1];

    displayResult(result);
}


function power() {
    let numbers = getNumbers();

    let base = numbers[0];
    let exponent = numbers[1];

    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }

    displayResult(result);
}


function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}