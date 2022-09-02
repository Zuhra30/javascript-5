var elAnswer = document.querySelector(".js-answer");
var elInputNumber = document.querySelector("#exampleInputNumber");
var elBtn = document.querySelector(".btn");
elBtn.addEventListener("click", function(e){
    e.preventDefault();
    var elInputNumberValue = elInputNumber.value;
    if (elInputNumberValue % 3 === 0 && elInputNumberValue % 5 === 0) {
        elAnswer.textContent = "FizzBuzz";
    } else if (elInputNumberValue % 3 === 0){
        elAnswer.textContent = "Fizz";
    } else if (elInputNumberValue % 5 === 0){
        elAnswer.textContent = "Buzz";
    } else {
        elAnswer.textContent = "Bunday son topilmadi";
    }
});