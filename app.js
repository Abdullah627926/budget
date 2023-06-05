let editRowIndex = null;
function budval() {
  var totalBudgetc = document.getElementById("total-bugetc");
  var totalBudgetAmount = document.getElementById("total-budget-value");
  let inputAmount = document.getElementById("budget-amount");
  if (inputAmount.value === "") {
    alert("you must write something");
  }
  else {
    totalBudgetAmount.innerText = inputAmount.value;
    totalBudgetc.innerText = inputAmount.value;

    inputAmount.value = "";
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
  var descriptionCell = newRow.insertCell(3);
  var actionCell = newRow.insertCell(4)

  // Create an edit button
  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.color = "green";
  editBtn.style.backgroundColor = "white";
  editBtn.style.padding = "2px 20px 3px 27px";
  editBtn.style.fontWeight = "900";
  editBtn.style.borderStyle = "dashed";
  editBtn.addEventListener("click", function () {
    // Get the corresponding row index
    var rowIndex = this.parentNode.parentNode.rowIndex;
    expenseAmount.value = table.rows[rowIndex].cells[1].textContent;
    expenseDescription.value = table.rows[rowIndex].cells[3].textContent;
    expenseDate.value = table.rows[rowIndex].cells[2].textContent;
    expenseCategory.value = table.rows[rowIndex].cells[0].textContent;
    document.getElementById("exp-sub-but").style.display = "none";
    document.getElementById("exp-edit-but").style.display = "inline-block";
    document.getElementById("exp-cancel-but").style.display = "inline-block";

    editRowIndex = rowIndex;
  });

  // Create a delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.color = "red";
  deleteBtn.style.backgroundColor = "white";
  deleteBtn.style.padding = "2px 20px 3px 27px";
  deleteBtn.style.fontWeight = "900";
  deleteBtn.style.borderStyle = "dashed";
  deleteBtn.addEventListener("click", function () {
    // Remove the corresponding row when the delete button is clicked
    table.deleteRow(this.parentNode.parentNode.rowIndex);
  });

  // Add the edit and delete buttons to the action cell
  actionCell.appendChild(editBtn);
  actionCell.appendChild(deleteBtn);

  categoryCell.textContent = expenseCategory.value;
  amountCell.textContent = expenseAmount.value;
  dateCell.textContent = expenseDate.value;
  descriptionCell.textContent = expenseDescription.value;

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

document.getElementById("exp-edit-but").addEventListener("click", function () {
  if (editRowIndex) {
    var table = document.querySelector(".tbox");
    var rows = table.getElementsByTagName("tr");
    var amountCell = rows[editRowIndex].getElementsByTagName("td")[1];
    var descriptionCell = rows[editRowIndex].getElementsByTagName("td")[3];
    var dateCell = rows[editRowIndex].getElementsByTagName("td")[2];
    var categoryCell = rows[editRowIndex].getElementsByTagName("td")[0];

    const expenseAmount = document.getElementById("exp-amount");
    const expenseDescription = document.getElementById("exp-discrip");
    const expenseDate = document.getElementById("exp-date");
    const expenseCategory = document.getElementById("exp-categ");

    amountCell.textContent = expenseAmount.value;
    descriptionCell.textContent = expenseDescription.value;
    dateCell.textContent = expenseDate.value;
    categoryCell.textContent = expenseCategory.value;

    document.getElementById("exp-sub-but").style.display = "inline-block";
    document.getElementById("exp-edit-but").style.display = "none";
    document.getElementById("exp-cancel-but").style.display = "none";
    expenseAmount.value = "";
    expenseDescription.value = "";
    expenseDate.value = "";
    expenseCategory.value = "rent";
    editRowIndex = null;
  }
});


document.getElementById("exp-cancel-but").addEventListener("click", function () {
  document.getElementById("exp-sub-but").style.display = "inline-block";
  document.getElementById("exp-edit-but").style.display = "none";
  document.getElementById("exp-cancel-but").style.display = "none";
  const expenseAmount = document.getElementById("exp-amount");
  const expenseDescription = document.getElementById("exp-discrip");
  const expenseDate = document.getElementById("exp-date");
  const expenseCategory = document.getElementById("exp-categ");
  expenseAmount.value = "";
  expenseDescription.value = "";
  expenseDate.value = "";
  expenseCategory.value = "rent";
  editRowIndex = null;
}
);