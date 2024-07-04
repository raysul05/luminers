document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    var selectedTime = document.getElementById('time').value;
    var fromTimeZone = document.getElementById('from-zone').value;
    var toTimeZone = document.getElementById('to-zone').value;

    // Perform your time conversion logic here
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

// Function to convert time between time zones
function convertTime(time, fromTimeZone, toTimeZone) {
    // Define time zone offsets in hours
    const timeZones = {
        'UTC': 0,
        'USA (PST)': -8,
        'USA (MST)': -7,
        'USA (CST)': -6,
        'USA (EST)': -5,
        'Malaysia (GMT)': 8,
        'India (IST)': 5.5,
        'Australia (AEST)': 10,
        'Australia (ACST)': 9.5,
        'Australia (AWST)': 8,
        'Japan (JST)': 9,
        'UK (GMT)': 0,
        'Germany (CET)': 1,
        'France (CET)': 1,
        'China (CST)': 8,
        'Brazil (BRT)': -3,
        'South Africa (SAST)': 2,
        'New Zealand (NZST)': 12,
        'Russia (MSK)': 3,
        'Singapore (SGT)': 8,
        'Canada (NST)': -3.5
    };
    
    // Get offsets
    const fromOffset = timeZones[fromTimeZone];
    const toOffset = timeZones[toTimeZone];
    
    // Parse the time
    const [hours, minutes] = time.split(':').map(Number);
    
    // Convert to UTC
    let utcHours = hours - fromOffset;
    if (utcHours < 0) utcHours += 24;
    if (utcHours >= 24) utcHours -= 24;
    
    // Convert to destination time zone
    let convertedHours = utcHours + toOffset;
    if (convertedHours < 0) convertedHours += 24;
    if (convertedHours >= 24) convertedHours -= 24;
    
    // Format the converted time
    const formattedHours = convertedHours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
}
