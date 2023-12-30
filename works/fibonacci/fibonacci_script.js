document.addEventListener("DOMContentLoaded", function () {
    const countInput = document.getElementById("count");
    const generateButton = document.getElementById("generate-button");
    const sequence = document.getElementById("sequence");

    countInput.addEventListener("input", updateGenerateButtonState);
    generateButton.addEventListener("click", generateFibonacci);

    function updateGenerateButtonState() {
        if (countInput.value.trim() !== "") {
            generateButton.disabled = false;
        } else {
            generateButton.disabled = true;
        }
    }

    function generateFibonacci() {
        const count = parseInt(countInput.value);
        if (!isNaN(count)) {
            if (count <= 0) {
                sequence.textContent = "Please enter a positive number.";
            } else {
                let fibSequence = [0, 1];
                for (let i = 2; i < count; i++) {
                    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
                }
                sequence.textContent = fibSequence.join(", ");
            }
        } else {
            sequence.textContent = "Please enter a valid number.";
        }
    }
});