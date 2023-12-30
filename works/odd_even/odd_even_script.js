document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("number");
    const checkButton = document.getElementById("check-button");
    const result = document.getElementById("result");

    numberInput.addEventListener("input", updateCheckButtonState);
    checkButton.addEventListener("click", checkOddEven);

    function updateCheckButtonState() {
        if (numberInput.value.trim() !== "") {
            checkButton.disabled = false;
        } else {
            checkButton.disabled = true;
        }
    }

    function checkOddEven() {
        const number = parseInt(numberInput.value);
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                result.textContent = `${number} is an even number.`;
            } else {
                result.textContent = `${number} is an odd number.`;
            }
        } else {
            result.textContent = "Please enter a valid number.";
        }
    }
});