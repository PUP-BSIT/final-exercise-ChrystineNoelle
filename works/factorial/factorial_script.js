document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("number");
    const calculateButton = document.getElementById("calculate-button");
    const factorial = document.getElementById("factorial");

    numberInput.addEventListener("input", updateCalculateButtonState);
    calculateButton.addEventListener("click", calculateFactorial);

    function updateCalculateButtonState() {
        if (numberInput.value.trim() !== "") {
            calculateButton.disabled = false;
        } else {
            calculateButton.disabled = true;
        }
    }

    function calculateFactorial() {
        const num = parseInt(numberInput.value);
        if (!isNaN(num)) {
            if (num < 0) {
                factorial.textContent = "Factorial is not defined for negative numbers.";
            } else if (num === 0) {
                factorial.textContent = "Factorial of 0 is 1.";
            } else {
                let result = 1;
                for (let i = 1; i <= num; i++) {
                    result *= i;
                }
                factorial.textContent = `Factorial of ${num} is ${result}.`;
            }
        } else {
            factorial.textContent = "Please enter a valid number.";
        }
    }
});