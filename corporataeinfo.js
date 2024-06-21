
function Corporate_Information() {
    Name = "Jai Venkateswara Technologies"
    Email = "venkatesh.db@gmail.com"
    Reporting_Manager = "Venkatesh"
    Educational_Qualification = "BTECH,MCA,MBA,BSC,MSC"


    //check
    PANCARD_NO = "11111111111"
    Residence_Number = "11111111111"
    Mobile = "11111111111"
    Skill = "C"
    Total_Exp = 0
    Date_Birth = 1989


    //communication 
    checkPANCARD_NO(PANCARD_NO)
    checkResidence_Number(Residence_Number)
    checkMobile(Mobile)
    checkTotal_Exp(Total_Exp)
    checkDate_Birth(Date_Birth)
    checkSkill(Skill)


}
function checkPANCARD_NO(PANCARD_NO) {
    if (PANCARD_NO.length == 10) {
        console.log("pan card is Accepted")

    }
    else {
        console.log("invailde pan card number")

    }
}
function checkResidence_Number(Residence_Number) {
    if (Residence_Number.length == 10) {
        console.log("valid residence number")

    }
    else {
        console.log("invalid residence number")

    }
}
function checkMobile(Mobile) {
    if (Mobile.length == 10) {
        console.log("valid mobile number")

    }
    else {
        console.log("invalid mobile number")
        return
    }
}
function checkTotal_Exp(Total_Exp) {
    if (Total_Exp >= 1) {
        console.log("selected in exp")
    }
    else {
        console.log("not selected in exp")
    }
}
function checkDate_Birth(Date_Birth) {
    if (Date_Birth <= 1988) {
        console.log("u are eligible ")
    }
    else {
        console.log("u are not eligible ")
    }
}
function checkSkill(Skill)
{
    if(Skill=="C")
        {
            console.log("u are selected")
        }
        else
        {
            console.log("u are not selected")
        }
}
Corporate_Information()