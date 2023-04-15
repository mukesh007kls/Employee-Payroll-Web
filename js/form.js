window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
       if(name.value.length == 0){
           textError.textContent = "";
           return;
       } 
       try{
           (new EmployeePayRollData()).name = name.value;
           textError.textContent = "";
       }catch(e){
           textError.textContent = e;
       }
    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
    
});
    
    
const save = () => {
    let employeePayrollData;
    try{
        employeePayrollData = createEmployeePayroll();
    }catch(e){
        return;
    }
}


const salaryValue=document.querySelector('.salary-output');
const salaryInputRange=document.querySelector('#salary');

salaryInputRange.addEventListener("input",(event)=>{
    salaryValue.textContent=salaryInputRange.value;
});

function createEmployeePayroll() {
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.name = getInputValue("name");
    employeePayrollData.profilePic = getSelectedValues("[name = profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name = gender]").pop();
    employeePayrollData.department = getSelectedValues("[name = department]");
    employeePayrollData.salary = getInputValue("salary");
    employeePayrollData.notes = getInputValue("notes");
    employeePayrollData.startDate = new Date(getInputValue("year") + getInputValue("month") + getInputValue("day"));
    alert(employeePayrollData.toString());
    
}
    
function getInputValue(id) {
    let value = document.getElementById(id).value;
    return value;
}
    
function getSelectedValues(propertyValue) {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}