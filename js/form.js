const salaryValue=document.querySelector('.salary-output');
const salaryInputRange=document.querySelector('#salary');
salaryInputRange.addEventListener("input",(event)=>{
    salaryValue.textContent=salaryInputRange.value;
});