function calculateBodyFat() {
    // Get the values entered in the form
    var weight = parseFloat(document.getElementById("weight").value);
    var waist = parseFloat(document.getElementById("waist").value);
    var neck = parseFloat(document.getElementById("neck").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate body fat percentage (US Navy Method)
    var bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;

    // Calculate muscle mass percentage
    var muscleMass = (weight - bodyFat) / weight * 100;

    // Display results
    var resultText = `Body Fat Percentage: ${bodyFat.toFixed(2)}%<br>Muscle Mass Percentage: ${muscleMass.toFixed(2)}%`;
    document.getElementById("result").innerHTML = resultText;
}
