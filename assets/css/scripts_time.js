document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    var selectedTime = document.getElementById('time').value;
    var fromTimeZone = document.getElementById('from-zone').value;
    var toTimeZone = document.getElementById('to-zone').value;

    // Perform your time conversion logic here (replace with your actual conversion logic)
    var convertedTime = convertTime(selectedTime, fromTimeZone, toTimeZone);

    // Function to convert time to 12-hour format with AM/PM
    function convertTo12Hour(timeString) {
        var hours = parseInt(timeString.substr(0, 2), 10);
        var minutes = timeString.substr(3, 2);
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (00:00) as 12 AM
        return ('0' + hours).slice(-2) + ':' + minutes + ' ' + ampm;
    }

    // Convert the time to 12-hour format with AM/PM
    var formattedTime = convertTo12Hour(convertedTime);

    // Display the selected options and converted time with AM/PM
    var result = 'Time: ' + formattedTime + '<br>';
    result += 'From Time Zone: ' + fromTimeZone + '<br>';
    result += 'To Time Zone: ' + toTimeZone;

    // Display the result
    document.getElementById('result').innerHTML = result;
});

// Replace this function with your actual time conversion logic
function convertTime(time, fromTimeZone, toTimeZone) {
    // Replace with your actual conversion logic based on time zones
    return time; // Placeholder return for demonstration
}
