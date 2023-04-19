var input = document.getElementsByClassName("inputbox");
var button = document.getElementById("button");
var output = document.getElementById("result");

function checkAge() {
    if(input[0].value == 18) {
       output.textContent = "Congratulations on your first year of driving. Drive Safe."
    }
    else if(input[0].value > 18) {
        output.textContent = "Welcome, Enjoy the ride."
    }
    else if(input[0].value < 18) {
        output.textContent = "Sorry, You are not allowed to drive. Powering Off."
    }
}

button.addEventListener("click", checkAge);

// var button = document.getElementById("button");

// button.addEventListener("click", function(){
//     console.log("Clicking");
// })