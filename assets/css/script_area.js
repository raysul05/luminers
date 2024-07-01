// Rectangle Area Calculation
function calculateRectangle() {
    var width = parseFloat(document.getElementById('rectWidth').value);
    var height = parseFloat(document.getElementById('rectHeight').value);
    var area = width * height;
    document.getElementById('rectResult').innerText = 'Area: ' + area;
}

// Square Area Calculation
function calculateSquare() {
    var side = parseFloat(document.getElementById('squareSide').value);
    var area = side * side;
    document.getElementById('squareResult').innerText = 'Area: ' + area;
}

// Triangle Area Calculation
function calculateTriangle() {
    var base = parseFloat(document.getElementById('triBase').value);
    var height = parseFloat(document.getElementById('triHeight').value);
    var area = 0.5 * base * height;
    document.getElementById('triResult').innerText = 'Area: ' + area;
}

// Circle Area Calculation
function calculateCircle() {
    var radius = parseFloat(document.getElementById('circleRadius').value);
    var area = Math.PI * radius * radius;
    document.getElementById('circleResult').innerText = 'Area: ' + area.toFixed(2);
}

// Trapezium Area Calculation
function calculateTrapezium() {
    var base1 = parseFloat(document.getElementById('trapBase1').value);
    var base2 = parseFloat(document.getElementById('trapBase2').value);
    var height = parseFloat(document.getElementById('trapHeight').value);
    var area = 0.5 * (base1 + base2) * height;
    document.getElementById('trapResult').innerText = 'Area: ' + area;
}
