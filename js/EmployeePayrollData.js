// const EmployeePayrollData = require("./EmployeePayrollData.js");
// import EmployeePayrollData from "./EmployeePayrollData.js";
class EmployeePayrollData {
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        let idRegex = RegExp('[1-9]*');
        if(idRegex.test(id))
            this._id = id;
        else
            throw 'Id is incorrect';
    }

    // constructor(...params) {
    //     this.name = params[0];
    //     this.profilePic=params[1];
    //     this.salary= params[2];
    //     this.gender=params[3];
    //     this.department=params[4];
    //     this.startDate=params[5];
    //     this.note=params[6];
    // }
    get name()
    {
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else {
            throw 'Name is incorrect';
        }

    }

    get profilePic()
    {
        return this._profilePic;
    }

    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender()
    {
        return this._gender;
    }

    set gender(gender)
    {
        this._gender = gender;
    }

    get department()
    {
        return this._department;
    }

    set department(department)
    {
        this._department = department;
    }

    get salary()
    {
        return this._salary;
    }

    set salary(salary)
    {
        this._salary = salary;
    }

    get note()
    {
        return this._note;
    }

    set note(note)
    {
        this._note = note;
    }

    get startDate()
    {
        return this._startDate;
    }

    set startDate(startDate)
    {
        let date = new Date();
        if(startDate<=date)
        {
            this._startDate = startDate;
        }
        else
            throw 'StartDate is incorrect';
    }

    toString()
    {
        const format = {year:'numeric', month:'numeric', day:'numeric'};
        const date = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US",format);
        return " Name = "+this.name+", Gender = "+this.gender+", ProfilePic = "+this.profilePic+", Department = "+this.department+", Salary = "+this.salary+
            ", StartDate = "+date+", Note = "+this.note;
    }

}