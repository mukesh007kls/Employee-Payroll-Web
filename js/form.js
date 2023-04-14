window.addEventListener('DOMContentLoaded',(event)=>{
    validName();
    salaryRange();
})
function validName(){
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.ariaValueMax.length==0){
            textError.textContent="";
            return;
        }
        try{
            let empData=new EmployeePayrollData();
            empData.name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
}