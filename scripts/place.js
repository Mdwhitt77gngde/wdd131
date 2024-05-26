document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;

    // Define the temperature and wind speed
    const temperature = 5; // in °C
    const windSpeed = 10; // in km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
    }

    // Check if the conditions for wind chill calculation are met
    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed);
    }

    // Display the wind chill factor
    document.getElementById("windChill").textContent = windChill;

    // Example static data for the data box
    document.getElementById("area").textContent = "3,796,742 sq mi(9,833,520 km²)";
    document.getElementById("population").textContent = "334,914,895";
    document.getElementById("capital").textContent = "Washington D.C.";
    document.getElementById("languages").textContent = "English";
    document.getElementById("currency").textContent = "U.S. dollar ($)(USD)";
    document.getElementById("timeZone").textContent = "UTC -4/-12,+10,+11";
    document.getElementById("callingCode").textContent = "+1";
    document.getElementById("internetTLD").textContent = ".us";
});
