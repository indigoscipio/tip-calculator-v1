let inputBill = document.querySelector("input#bill");
let inputPeople = document.querySelector("input#people");
let inputPeopleCustom = document.querySelector("#tip-custom");
let tipOptions = document.querySelectorAll(`input[type="radio"]`);
let resultAmount = document.querySelector("#result-amount");
let resultTotal = document.querySelector("#result-total");

let bill;
let tipPercentage;
let people;
let tip;
let tipPerPerson;
let total;
let totalPerPerson;

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

inputPeopleCustom.addEventListener("change", () => {
  tipOptions.forEach((element) => {
    element.checked = false;
  });
  if (inputPeopleCustom.value <= 0) {
    alert("Custom tip can't be less than 0, FOOL!!");
  } else {
    tipPercentage = +inputPeopleCustom.value;
    updateResult();
  }
});

tipOptions.forEach((element) => {
  element.addEventListener("click", () => {
    tipPercentage = +element.value;
    updateResult();
  });
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
