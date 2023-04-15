
const salaryValue=document.querySelector('.salary-output');
const salaryInputRange=document.querySelector('#salary');

salaryInputRange.addEventListener("input",(event)=>{
    salaryValue.textContent=salaryInputRange.value;
});

function createObject() {
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
    
function getSelectedValues(property) {
    let allItems = document.querySelectorAll(property);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}