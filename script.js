document.getElementById("calculate-btn").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const neck = parseFloat(document.getElementById("neck").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(waist) || isNaN(neck) || isNaN(height)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const bodyFatPercentage = calculateBodyFat(weight, waist, neck, height);
    const muscleMassPercentage = calculateMuscleMass(weight, bodyFatPercentage);

    // Display results
    document.getElementById("bodyFat").textContent = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
    document.getElementById("muscleMass").textContent = `Muscle Mass Percentage: ${muscleMassPercentage.toFixed(2)}%`;
});

// Function to calculate Body Fat Percentage using the US Navy method for males
function calculateBodyFat(weight, waist, neck, height) {
    const bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    return bodyFat;
}

// Function to calculate Muscle Mass Percentage
function calculateMuscleMass(weight, bodyFatPercentage) {
    const fatWeight = (bodyFatPercentage / 100) * weight;
    const leanMass = weight - fatWeight;
    const muscleMassPercentage = (leanMass / weight) * 100;
    return muscleMassPercentage;
}
