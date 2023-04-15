class EmployeePayrollData {
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { this._profilePic = profilePic; }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }
    get department() { return this._department; }
    set department(department) { this._department = department; }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const empDate = this._startDate.toLocaleString().split(',')[0];
        return "name = " + this.name + ", profilePic = " + this.profilePic + ", salary = " + this.salary + ", gender = " + this.gender + ", department = " + this.department + ", startDate = " + empDate + ", notes= " + this.notes;
    }
}