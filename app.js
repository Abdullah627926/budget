function budval(){
    var totalBudgetc=document.getElementById("total-bugetc");
    var totalBudgetAmount=document.getElementById("total-budget-value");
    let inputAmount=document.getElementById("budget-amount");
    if(inputAmount.value===""){
        alert("you must write something");
    }
    else{
        totalBudgetAmount.innerText=inputAmount.value;
        totalBudgetc.innerText=inputAmount.value;

        inputAmount.value="";
    }
}
// first function for total amount 
function setBudgetAmount() {
  var budgetInput = document.getElementById("budget-amount");
  var totalBudget = document.getElementById("total-budget-value");

  if (budgetInput.value !== "") {
    totalBudget.textContent = "$" + budgetInput.value;
    budgetInput.value = "";
  }
}

// Function to add expenses
function addExpense() {
  var expenseAmount = document.getElementById("exp-amount");
  var expenseDescription = document.getElementById("exp-discrip");
  var expenseDate = document.getElementById("exp-date");
  var expenseCategory = document.getElementById("exp-categ");

  var table = document.querySelector(".tbox");

  // Create a new row for the expense
  var newRow = table.insertRow(-1);

  // Create cells for the expense data
  var categoryCell = newRow.insertCell(0);
  var amountCell = newRow.insertCell(1);
  var dateCell = newRow.insertCell(2);
  // var expenseDescription =newRow.insertcell(3);
  // Set the values of the cells
  categoryCell.textContent = expenseCategory.value;
  amountCell.textContent = expenseAmount.value;
  dateCell.textContent = expenseDate.value;
  // expenseDescription.textContent = expenseDescription.value; 
  // Clear the input fields
  expenseAmount.value = "";
  expenseDescription.value = "";
  expenseDate.value = "";
  expenseCategory.value = "rent";
}

// Function to update the budget details
function updateBudgetDetails() {
  var totalBudget = parseFloat(document.getElementById("total-budget-value").textContent.replace("$", ""));
  var totalExpenses = 0;

  var table = document.querySelector(".tbox");
  var rows = table.getElementsByTagName("tr");

  // Calculate the total expenses
  for (var i = 1; i < rows.length; i++) {
    var amountCell = rows[i].getElementsByTagName("td")[1];
    totalExpenses += parseFloat(amountCell.textContent);
  }

  var totalBudgetElement = document.getElementById("total-bugetc");
  var totalExpensesElement = document.getElementById("total-exp");
  var totalBalanceElement = document.getElementById("total-balance");

  // Update the budget details
  totalBudgetElement.textContent = "$" + totalBudget;
  totalExpensesElement.textContent = "$" + totalExpenses;
  totalBalanceElement.textContent = "$" + (totalBudget - totalExpenses);
}

// Event listener for the "Set Budget Amount" button
document.getElementById("exp-sub-but").addEventListener("click", setBudgetAmount);

// Event listener for the "Submit" button in the expense section
document.getElementById("exp-sub-but").addEventListener("click", addExpense);

// Event listener for updating the budget details
document.getElementById("exp-sub-but").addEventListener("click", updateBudgetDetails);




