// getElementById Function
function getElementById(id) {
  const field = document.getElementById(id);
  return field;
}
const incomeInputField = getElementById("income");
const foodInputField = getElementById("food");
const rentInputField = getElementById("rent");
const clothesInputField = getElementById("clothes");
const totalExpenseText = getElementById("total-expense");
const balanceText = getElementById("balance");
const saveInputField = getElementById("saveInput-Id");
const savingAmount = getElementById("saving-amount");
const remainingBalance = getElementById("remaining-balance");
// function for getting input value
function getInputValue(idName) {
  const value = parseInt(idName.value);
  return value;
}
function validateInputValue(value) {
  if (isNaN(value)) {
    return false; // Not a number
  }
  if (value < 0) {
    return false; // Negative value
  }
  return true;
}

// Validate input fields
function validateInputFields() {
  if (!validateInputValue(getInputValue(foodInputField))) {
    alert("Please enter a valid value for Food Expense.");
    return false;
  }
  if (!validateInputValue(getInputValue(rentInputField))) {
    alert("Please enter a valid value for Rent Expense.");
    return false;
  }
  if (!validateInputValue(getInputValue(clothesInputField))) {
    alert("Please enter a valid value for Clothes Expense.");
    return false;
  }
  if (!validateInputValue(getInputValue(incomeInputField))) {
    alert("Please enter a valid value for Income.");
    return false;
  }
  return true;
}
// Validate save input field
function validateSaveInputField() {
  if (!validateInputValue(getInputValue(saveInputField))) {
    alert("Please enter a valid value for Save Percentage.");
    return false;
  }
  return true;
}

//AddEventLister Function for Calculate Button
document.getElementById("calculate-btn").addEventListener("click", function () {
  if (validateInputFields()) {
    const foodValue = getInputValue(foodInputField);
    const rentValue = getInputValue(rentInputField);
    const clothesValue = getInputValue(clothesInputField);
    const sumOfTotalINputValue = foodValue + rentValue + clothesValue;
    totalExpenseText.innerText = sumOfTotalINputValue;
    const incomeValue = getInputValue(incomeInputField);
    balanceText.innerText = incomeValue - sumOfTotalINputValue;
  }
});
//AddEventLister Function for Save Button
document.getElementById("save-id").addEventListener("click", function () {
  if (validateSaveInputField()) {
    const balance = parseInt(balanceText.innerText);
    const incomeValue = getInputValue(incomeInputField);
    const saveValue = getInputValue(saveInputField);
    savingAmount.innerText = (incomeValue * saveValue) / 100;
    const totalSavingAmount = parseInt(savingAmount.innerText);
    if (totalSavingAmount > balance) {
      alert("Save input cannot be greater than balance.");
      savingAmount.innerText = 0;
      saveInputField.value = "";
      return;
    }
    remainingBalance.innerText = balance - totalSavingAmount;
  }
});
