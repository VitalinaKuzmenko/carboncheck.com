const backBtns = document.querySelectorAll(".btn-backward");
const forwardBtns = document.querySelectorAll(".btn-forward");
const formSteps = document.querySelectorAll(".form-step");

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
