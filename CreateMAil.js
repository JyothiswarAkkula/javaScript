function account() {
    First_Name = "Jyothiswar"
    Last_Name = "Akkula"
    Gender = "male"
    Mobile = 9347341911

    //check
    Choose_Username = "jyothi"
    user_pasword = "Naniiiii"
    Conform_Password = "Nani"
    Birth_year = 2001
    email_address = "jyolthiswarakkula@gmail.com"

    //communication
    checkChoose_Username(Choose_Username)
    checkuser_pasword(user_pasword)
    checkBirth_year(Birth_year)
    checkemail_address(email_address)
}
function checkChoose_Username(Choose_Username) {
    if (Choose_Username == "jyothi") {
        console.log("user name unavailable")
    }
    else {
        console.log("user is available")
    }
}
function checkuser_pasword(user_pasword) {
    if (user_pasword.length >= 7) {
        console.log("password is accepted ")
    }
    else {
        console.log("invalid password")
    }

}
function checkBirth_year(Birth_year) {
    if (Birth_year <= 2000) {
        console.log("valide birthYear")
    }
    else {
        console.log("invalide birthYear")
    }

}
function checkemail_address(email_address) {
    if (email_address == "jyothiswarakkula@gmail.com") {
        console.log("valide Email")
    }
    else {
        console.log("invalide Email")
    }
}
account()









