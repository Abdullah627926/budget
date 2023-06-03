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
/