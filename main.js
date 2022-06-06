let inputBill = document.querySelector("input#bill");
let inputPeople = document.querySelector("input#people");
let inputTipCustom = document.querySelector("#tip-custom");
let tipOptions = document.querySelectorAll(`input[type="radio"]`);
let resultAmount = document.querySelector("#result-amount");
let resultTotal = document.querySelector("#result-total");
let btnReset = document.querySelector("#button-reset");

let bill = 0;
let tipPercentage = 0;
let people = 0;
let tip = 0;
let tipPerPerson = 0;
let total = 0;
let totalPerPerson = 0;

inputBill.addEventListener("change", () => {
  if (inputBill.value <= 0) {
    alert("Bill can't be equal or less then zero, FOOL!");
  } else {
    bill = +inputBill.value;
    updateResult();
  }
});

inputPeople.addEventListener("change", () => {
  if (inputPeople.value <= 0) {
    alert("No. of people can't be equal or less then zero, FOOL!");
  } else {
    people = +inputPeople.value;
    updateResult();
  }
});

inputTipCustom.addEventListener("change", () => {
  tipOptions.forEach((element) => {
    element.checked = false;
  });
  if (inputTipCustom.value <= 0) {
    alert("Custom tip can't be less than 0, FOOL!!");
  } else {
    tipPercentage = +inputTipCustom.value;
    updateResult();
  }
});

tipOptions.forEach((element) => {
  element.addEventListener("click", () => {
    tipPercentage = +element.value;
    updateResult();
  });
});

function resetCalc() {
  bill = 0;
  inputBill.value = 0;
  tipPercentage = 0;
  inputTipCustom.value = 0;
  tipOptions.forEach((element) => {
    element.checked = false;
  });
  pepole = 0;
  inputPeople.value = 0;

  updateResult();
}

btnReset.addEventListener("click", () => {
  resetCalc();
});

function updateResult() {
  tip = bill * (tipPercentage / 100);
  console.log(`Base Tip: ${tip}`);

  total = bill + tip;
  console.log(`Base Total: ${total}`);

  tipPerPerson = tip / people;
  console.log(`Tip per person: ${tipPerPerson.toFixed(2)}`);

  totalPerPerson = total / people;
  console.log(`Total per person: ${totalPerPerson.toFixed(2)}`);

  resultAmount.innerText = `$${tipPerPerson.toFixed(2)}`;
  resultTotal.innerText = `$${totalPerPerson.toFixed(2)}`;
}
