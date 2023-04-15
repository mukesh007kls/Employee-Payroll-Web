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
           name.computedStyleMap.border='2px solid green';
       }catch(e){
           textError.textContent = e;
           name.computedStyleMap.border='2px solid red';
       }
    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
    
})
    
    
const save = () => {
    let employeePayrollData;
    try{
        employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

const createEmployeePayroll=()=> {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name=getInputValue('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues("[name = profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name = gender]").pop();
    employeePayrollData.department = getSelectedValues("[name = department]");
    employeePayrollData.salary = getInputValue("salary");
    employeePayrollData.notes = getInputValue("notes");
    let year=getInputValue('#year');
    let month=parseInt(getInputValue('#month'));
    let day=getInputValue('#day');
    let date=day+" "+month+" "+year;
    employeePayrollData.startDate = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePeyrollList"));
    
    if(employeePayrollList != undefined){
        employeePayrollList.push(EmployeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    
    alert(employeePayrollList.toString());
     localStorage.setItem("EmployeePeyrollList",JSON.stringify(employeePayrollList)); 
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

const resetForm = () => {
    setValue('#name','');
    unSetSelectedVlaues('[name=profile]');
    unSetSelectedVlaues('[name=gender]');
    unSetSelectedVlaues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','1');
    setValue('#year','2020');
}

const setValue=(id,value)=>{
    const element=document.querySelectorAll(id);
    element.value=value;
}
const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}