window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length === 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

    const save=()=> {
        try {
            let employeePayrollData = createEmployeePayroll();
            console.log(employeePayrollData);
            createAndUpdateStorage(employeePayrollData);
        } catch (e) {
            return;
        }
    }

    const createAndUpdateStorage=(employeePayrollData)=> {
        console.log(employeePayrollData);
        let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
        console.log(employeePayrollList);
        if (employeePayrollList != undefined) {
            employeePayrollList.push(employeePayrollData);
        } else {
            employeePayrollList = [employeePayrollData];
        }

        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));

    }



    const resetForm = () => {
        setValue('#name', '');
        unSetSelectedValues('[name=profile]');
        unSetSelectedValues('[name=gender]');
        unSetSelectedValues('[name=department]');
        setValue('#salary', '');
        setValue('#notes', '');
        setValue('#day', '1');
        setValue('#month', 'January');
        setValue('#year', '2020');
    }

    const setValue = (id, value) => {
        const element = document.querySelector(id);
        element.value = value;
    }


    const unSetSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        allItems.forEach(item => {
            item.checked = false;
        });
    }

const createEmployeePayroll=()=> {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValue("name");
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues("[name = profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name = gender]").pop();
    employeePayrollData.department = getSelectedValues("[name = department]");
    employeePayrollData.salary = getInputValue("salary");
    employeePayrollData.note = getInputValue("notes");
    employeePayrollData.startDate = new Date(getInputValue("year") + getInputValue("month") + getInputValue("day"));
    console.log(employeePayrollData);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

function getInputValue(id) {
    return document.getElementById(id).value;
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
