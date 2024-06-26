var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var resultArea = document.querySelector(".comment");

var modalContent = document.querySelector(".modal-content");
var modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate() {
    if (age.value === '' || height.value === '' || weight.value === '' || (!male.checked && !female.checked)) {
        modal.style.display = "block";
        modalText.innerHTML = `All fields are required!`;
    } else {
        countBmi();
    }
}

function countBmi() {
    var p = [age.value, height.value, weight.value];
    var bmi = Number(p[2]) / ((Number(p[1]) / 100) * (Number(p[1]) / 100));
    var comment = '';
    var benefits = '';

    if (bmi < 18.5) {
        comment = 'Underweight';
        benefits = 'Consider a balanced diet and proper nutrition to gain healthy weight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment = 'Normal weight';
        benefits = 'Great job! Maintain your current lifestyle to keep up your healthy weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        comment = 'Overweight';
        benefits = 'Incorporate regular physical activity and a balanced diet to achieve a healthier weight.';
    } else {
        comment = 'Obesity';
        benefits = 'Consult a healthcare provider for personalized advice and strategies to manage your weight.';
    }

    resultArea.style.display = "block";
    resultArea.innerHTML = `You are <span id="comment">${comment}</span><br>${benefits}`;
    document.getElementById("result").innerHTML = bmi.toFixed(2);
}

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
