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
let button5backward = document
  .querySelector(".step-five")
  .querySelector(".btn-backward");
button5backward.addEventListener("click", removePage5);

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
let button9 = document.querySelector(".step-nine").querySelector(".btn-submit");
button9.addEventListener("click", calculate);

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

function findAnswer4() {
  answer4 = [];
  let car = document.getElementById("car");
  let bus = document.getElementById("bus");
  let train = document.getElementById("train");
  let plane = document.getElementById("plane");

  if (car.checked) answer4.push("car");
  if (bus.checked) answer4.push("bus");
  if (train.checked) answer4.push("train");
  if (plane.checked) answer4.push("plane");
  console.log("answer4 is: " + answer4);

  if (answer4.length === 0) {
    document
      .getElementById("journeys_by_car")
      .classList.add("show_car_checkbox");
    document.getElementById("journeys_by_bus").classList.remove("hidden_info");
    document
      .getElementById("journeys_by_train")
      .classList.remove("hidden_info");
    document
      .getElementById("journeys_by_plane")
      .classList.remove("hidden_info");
  }
  if (answer4.includes("car"))
    document
      .getElementById("journeys_by_car")
      .classList.add("show_car_checkbox");
  if (answer4.includes("bus"))
    document.getElementById("journeys_by_bus").classList.remove("hidden_info");
  if (answer4.includes("train"))
    document
      .getElementById("journeys_by_train")
      .classList.remove("hidden_info");
  if (answer4.includes("plane"))
    document
      .getElementById("journeys_by_plane")
      .classList.remove("hidden_info");
}

function removePage5() {
  document.getElementById("journeys_by_bus").classList.add("hidden_info");
  document.getElementById("journeys_by_train").classList.add("hidden_info");
  document.getElementById("journeys_by_plane").classList.add("hidden_info");
}

function findAnswer5() {
  let car_mile = Number(document.getElementById("car_mileage").value);
  let bus_mile = Number(document.getElementById("bus_mileage").value);
  let train_mile = Number(document.getElementById("train_mileage").value);
  let plane_mile = Number(document.getElementById("plane_mileage").value);

  //   if (car_mile.length === 0) car_mile = 0;
  //   if (bus_mile.length === 0) bus_mile = 0;
  //   if (train_mile.length === 0) train_mile = 0;
  //   if (plane_mile.length === 0) plaine_mile = 0;

  //car footprint
  if (car_mile < 100) {
    car_mile *= 0.03;
  } else if (car_mile < 1000) {
    car_mile *= 0.13;
  } else if (car_mile > 1000) {
    car_mile *= 1.18;
  } else {
    car_mile = 0;
  }

  //bus footprint
  if (bus_mile < 100) {
    bus_mile *= 0.01;
  } else if (bus_mile < 1000) {
    bus_mile *= 0.12;
  } else {
    bus_mile = 0;
  }

  //train footprint
  if (train_mile < 100) {
    train_mile *= 0.01;
  } else if (train_mile < 1000) {
    train_mile *= 0.12;
  } else if (train_mile > 1000) {
    train_mile *= 0.2;
  } else {
    train_mile = 0;
  }

  //plane footprint
  plane_mile *= 0.25;
  console.log(car_mile);
  console.log(bus_mile);
  console.log(train_mile);
  console.log(plane_mile);

  answer5 = car_mile + bus_mile + train_mile + plane_mile;

  console.log("answer5 is: " + answer5);
}

function findAnswer6() {
  if (document.getElementById("none").checked) answer6 = 0.7;
  if (document.getElementById("some").checked) answer6 = 0.5;
  if (document.getElementById("most").checked) answer6 = 0.2;
  if (document.getElementById("all").checked) answer6 = 0;

  console.log("answer6 is: " + answer6);
}

function findAnswer7() {
  if (document.getElementById("above-dairy").checked) answer7 = 0.6;
  if (document.getElementById("average-dairy").checked) answer7 = 0.4;
  if (document.getElementById("below-dairy").checked) answer7 = 0.25;
  if (document.getElementById("lacto-vege").checked) answer7 = 0.1;
  if (document.getElementById("vegan").checked) answer7 = 0;

  console.log("answer7 is: " + answer7);
}

function findAnswer8() {
  if (document.getElementById("above").checked) answer8 = 0.6;
  if (document.getElementById("average").checked) answer8 = 0.4;
  if (document.getElementById("below").checked) answer8 = 0.2;
  if (document.getElementById("little").checked) answer8 = 0.05;

  console.log("answer8 is: " + answer8);
}

function calculate() {
  if (document.getElementById("above-average").checked) answer9 = 5;
  if (document.getElementById("average-average").checked) answer9 = 3.4;
  if (document.getElementById("below-average").checked) answer9 = 2.4;
  if (document.getElementById("much-below-average").checked) answer9 = 1.4;

  if (document.getElementById("yes").checked) answer9 -= 0.7;
  if (document.getElementById("yes-answering").checked) answer9 -= 0.14;

  console.log("answer9 is: " + answer9);

  let totalResult =
    answer2 / answer1 +
    answer3 / answer1 +
    answer5 +
    answer6 +
    answer7 +
    answer8 +
    answer9;
}
