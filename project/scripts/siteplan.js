// JavaScript for Finance Social project

// Form validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }
}

// Dynamic content generation
document.addEventListener("DOMContentLoaded", function() {
    // Example of dynamic content generation
    var scenariosList = document.getElementById("scenarios");
    var scenarios = ["How can I track my expenses efficiently?", "Where can I find tips on saving money?"];

    scenarios.forEach(function(scenario) {
        var listItem = document.createElement("li");
        listItem.textContent = scenario;
        scenariosList.appendChild(listItem);
    });

    // Set the last updated date and time
    var lastUpdated = new Date(document.lastModified);
    document.getElementById("last-updated").textContent = "Last updated: " + lastUpdated.toLocaleString();
});
