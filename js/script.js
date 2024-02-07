function generateRandomNumbers() {
    const selectedLotto = document.getElementById("countries").value;
    let maxNumber;

    switch (selectedLotto) {
        case "lotto":
            maxNumber = 42;
            generateNumbers(maxNumber);
            break;
        case "mega":
            maxNumber = 45;
            generateNumbers(maxNumber);
            break;
        case "super":
            maxNumber = 49;
            generateNumbers(maxNumber);
            break;
        case "grand":
            maxNumber = 55;
            generateNumbers(maxNumber);
            break;
        case "ultra":
            maxNumber = 58;
            generateNumbers(maxNumber);
            break;
        case "4d":
            generateNumbers(9, 4);
            break;
        case "3d":
            generateNumbers(9, 3);
            break;
        case "2d":
            generateNumbers(30, 2);
            break;
        default:
            alert("Please select a lotto type.");
            return;
    }
}

function generateNumbers(maxNumber, digits = 6) {
    const numCombinations = parseInt(document.getElementById("combinations").value);
    const generatedNumbersDiv = document.getElementById("generatedNumbers");

    // Clear the content before generating new combinations
    generatedNumbersDiv.innerHTML = "";

    // Outer loop for generating multiple combinations
    for (let i = 0; i < numCombinations; i++) {
        const combinationDiv = document.createElement("div");
        combinationDiv.className = "flex gap-1";

        // Inner loop for generating a single combination
        for (let j = 0; j < digits; j++) {
            let randomNumber;

            if (digits === 6) {
                // For Lotto, Mega Lotto, Super Lotto, Grand Lotto, Ultra Lotto
                do {
                    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
                } while (combinationDiv.innerText.includes(randomNumber));
            } else {
                // For 2D, 3D, 4D
                randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            }

            // Create a circular element for each number in the combination
            const ball = document.createElement("div");
            ball.className = "relative w-8 h-8";
            ball.innerHTML = `
                <div class="absolute inset-0 bg-yellow-500 rounded-full shadow-lg"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span class="text-white text-lg font-bold text-center">${randomNumber}</span>
                </div>
            `;
            // Append the ball to the combination div
            combinationDiv.appendChild(ball);
        }

        // Append the combination div to the main container
        generatedNumbersDiv.appendChild(combinationDiv);

        // Add a hyphen after each combination, except the last one
        if (i < numCombinations - 1) {
            const hyphen = document.createElement("span");
            hyphen.className = "text-white text-md font-bold mx-1";
            hyphen.innerText = "-";
            generatedNumbersDiv.appendChild(hyphen);
        }
    }
}
