var elForm = document.querySelector(".site-form");
var elInputNumber = document.querySelector("#exampleInputNumber");
var elInputCheckbox = document.querySelector("#exampleInputCheckbox")
var elBtn = document.querySelector(".btn");
var elAnswer = document.querySelector(".js-answer");

var maxScore = 106.6;
var minScore = 57.6;

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    var InputNumber = Math.round(elInputNumber.value);
    if (elInputCheckbox.checked) {
        elAnswer.textContent = "Zo'o'o'r 🤣"
    } else if (InputNumber.value >= maxScore && InputNumber.value >= minScore) {
        elAnswer.textContent = "Urra supper 😀"
    }  else if (InputNumber.value >= maxScore) {
        elAnswer.textContent = "Urraaaaa 🎊"
    }  else {
        elAnswer.textContent = "😒😒😒"
    }
})