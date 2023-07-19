let passwordInputs = document.querySelectorAll(".error");
let errorMsg = document.querySelector(".error-msg");
let input1 = passwordInputs[0];
let input2 = passwordInputs[1];

function toggleError() {
  if (
    (input1.value === "" && input2.value === "") ||
    input1.value !== input2.value
  ) {
    input1.style.outline = "1px solid red";
    input2.style.outline = "1px solid red";
    errorMsg.style.visibility = "visible";
  } else {
    input1.style.outline = "1px solid #b8c0ff";
    input2.style.outline = "1px solid #b8c0ff";
    errorMsg.style.visibility = "hidden";
  }
}
passwordInputs.forEach((input) => {
  input.addEventListener("focus", (event) => {
    toggleError();
  });

  input.addEventListener("input", (event) => {
    toggleError();
  });
});
