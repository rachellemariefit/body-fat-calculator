// Function to calculate body fat percentage and category
function calculateBodyFat() {
    const weight = parseFloat(document.getElementById("weight").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const neck = parseFloat(document.getElementById("neck").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !waist || !neck || !height) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate body fat percentage using the US Navy Method
    const bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist - neck) + 0.22100 * Math.log10(height)) - 450;

    // Display results
    const resultText = document.getElementById("body-fat");
    const categoryText = document.getElementById("category");

    resultText.innerText = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;

    // Determine body fat category
    let category = "";
    if (bodyFatPercentage < 18) {
        category = "Healthy";
    } else if (bodyFatPercentage >= 18 && bodyFatPercentage < 25) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    categoryText.innerText = `Category: ${category}`;
}

// Event listener for the calculate button
document.getElementById("calculate-btn").addEventListener("click", calculateBodyFat);
