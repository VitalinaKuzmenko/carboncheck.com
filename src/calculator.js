const backBtns = document.querySelectorAll(".btn-backward");
const forwardBtns = document.querySelectorAll(".btn-forward");
const formSteps = document.querySelectorAll(".form-step");

//making form-steps as carousel
let formStepsNum = 0;

forwardBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("active-section") &&
      formStep.classList.remove("active-section");
  });
  formSteps[formStepsNum].classList.add("active-section");
}

///checking all answers inside all form-steps
let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";
let answer6 = "";
let answer7 = "";
let answer8 = "";
let answer9 = "";

let button1 = document.querySelector(".step-one").querySelector(".btn-forward");
button1.addEventListener("click", findAnswer1);
let button2 = document.querySelector(".step-two").querySelector(".btn-forward");
button2.addEventListener("click", findAnswer2);
let button3 = document
  .querySelector(".step-three")
  .querySelector(".btn-forward");
button3.addEventListener("click", findAnswer3);

//showing extra info on page 3. If user choose YES => then we will show information
let radioButtonNo = document.getElementById("no_answer");
radioButtonNo.addEventListener("change", hideExtraInfoQuestion3);
let radioButtonYes = document.getElementById("yes_answer");
radioButtonYes.addEventListener("change", showExtraInfoQuestion3);

function hideExtraInfoQuestion3() {
  let extraInfo = document.querySelector(".if_yes");
  extraInfo.classList.remove("show_yes");
}

function showExtraInfoQuestion3() {
  let extraInfo = document.querySelector(".if_yes");
  extraInfo.classList.add("show_yes");
}

let button4 = document
  .querySelector(".step-four")
  .querySelector(".btn-forward");
button4.addEventListener("click", findAnswer4);
let button5 = document
  .querySelector(".step-five")
  .querySelector(".btn-forward");
button5.addEventListener("click", findAnswer5);
let button6 = document.querySelector(".step-six").querySelector(".btn-forward");
button6.addEventListener("click", findAnswer6);
let button7 = document
  .querySelector(".step-seven")
  .querySelector(".btn-forward");
button7.addEventListener("click", findAnswer7);
let button8 = document
  .querySelector(".step-eight")
  .querySelector(".btn-forward");
button8.addEventListener("click", findAnswer8);
let button9 = document.querySelector(".step-none").querySelector(".btn-submit");
button9.addEventListener("click", Calculate);

// functions
function findAnswer1() {
  answer1 = Number(
    document.querySelector(".step-one").querySelector("input").value
  );
  if (answer1.length === 0) {
    answer1 = 1;
  }
  console.log("the first asnwer is " + answer1);
}

function findAnswer2() {
  if (document.getElementById("small").checked) {
    answer2 = 0.93;
  } else if (document.getElementById("medium").checked) {
    answer2 = 1.48;
  } else if (document.getElementById("large").checked) {
    answer2 = 2.16;
  } else if (document.getElementById("hall").checked) {
    answer2 = 0.62;
  }
  console.log("the answer2 is " + answer2);
}

function findAnswer3() {
  if (document.getElementById("no_answer").checked) {
    answer3 = 0;
    console.log("the answer3 is: " + answer3);
  } else {
    let heatingOil = Number(document.getElementById("heating_oil").value);
    let coal = Number(document.getElementById("coal").value);
    let wood = Number(document.getElementById("wood").value);
    let bottledGas = Number(document.getElementById("bottled-gas").value);

    if (heatingOil.length === 0) heatingOil = 0;
    if (coal.length === 0) coal = 0;
    if (wood.length === 0) wood = 0;
    if (bottledGas.length === 0) bottledGas = 0;

    answer3 = (heatingOil + coal + wood + bottledGas).toFixed(2);
    console.log("the answer3 is: " + answer3);
  }
}
