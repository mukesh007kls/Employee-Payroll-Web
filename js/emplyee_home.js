window.addEventListener('DOMContentLoaded',event=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml="<th>Profile</th> <th>Name</th> <th>Gender</th> <th>Department</th>"+
                 "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    let empPayrollList=createEmployeePayrollJSON();
    let innerHtml=`${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector(`#display`).innerHTML=innerHtml;
}

const createEmployeePayrollJSON=()=>{
    let employeePayrollList=[
        {
            _name:'klsa',
            _gender:'male',
            _department:[
                'Engineering',
                'Finance',
                'HR',
                'Sales'
            ],
            _salary:'450000',
            _startDate:'29 Jan 2021',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'mukesh',
            _gender:'male',
            _department:[
                'Engineering'
            ],
            _salary:'450000',
            _startDate:'29 Jan 2021',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -1.png'
        },
        {
            _name:'akhila',
            _gender:'female',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'450000',
            _startDate:'29 Jan 2021',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -3.png'
        },
    ];
    return employeePayrollList;
}

const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}