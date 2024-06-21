function CorporateInformation() {
    Company_name = "JVT"
    Designation = "Programmer"
    Salary = 23000
    Location = "Bangalore"

    //communication
    checkCompany_name(Company_name)
    checkDesignation(Designation)
    checkSalary(Salary)
}
function checkCompany_name(Company_name) {
    if (Company_name = "JVT") {
        console.log("entry")
    }
    else {
        console.log("no entry")
    }

}
function checkDesignation(Designation) {
    if (Designation = "Programmer") {
        console.log("accepted")
    }
    else {
        console.log("not Accepted")
    }

}
function checkSalary(Salary) {
    if (Salary <= 230000) {
        console.log("selected")
    }
    else {
        console.log("not selected")
    }
}
CorporateInformation()