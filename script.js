document.getElementById("calculateButton").addEventListener("click", function() {
  // Get values from input fields
  const weight = parseFloat(document.getElementById("weight").value);
  const waist = parseFloat(document.getElementById("waist").value);
  const neck = parseFloat(document.getElementById("neck").value);
  const hip = parseFloat(document.getElementById("hip").value);

  if (isNaN(weight) || isNaN(waist) || isNaN(neck) || isNaN(hip)) {
    alert("Please fill out all fields with valid numbers.");
    return;
  }

  // Use US Navy Method for body fat calculation
  const bodyFatPercentage = calculateBodyFat(weight, waist, neck, hip);
  const muscleMassPercentage = 100 - bodyFatPercentage; // Assuming body fat + muscle mass = 100%

  // Display results
  document.getElementById("results").innerHTML = `
    <p>Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%</p>
    <p>Muscle Mass Percentage: ${muscleMassPercentage.toFixed(2)}%</p>
  `;
});

// US Navy Method to calculate body fat percentage for females
function calculateBodyFat(weight, waist, neck, hip) {
  const bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(weight) - 78.387;
  return bodyFat;
}
