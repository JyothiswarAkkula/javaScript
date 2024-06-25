/*Electric bill paid via netbanking

website:www.tnebnet.org
tnebusername; agilan
password:1234567
consumer number:23456123
Billing status:paid/unpaid
mode of payment :netbanking
choose bank:sbi
username;kumar007
password:1234567
Transaction no-18cv21828578437
payment status: successful*/

class netbanking {

    check(username, password, payment) {
        if (username == "agilan") {
            console.log("vaild username")
        }
        else {
            console.log("invaild username")
            return
        }
        if (password == "1234567") {
            console.log("vaild password")
        }
        else {
            console.log("invaild password")
            return
        }
        if (payment == "netbanking") {
            console.log("payment successfully")
        }
        else {
            console.log("Payment is incomplete")
            return
        }
    }

}
jyo = new netbanking()
jyo.check("agilan", "1234567", "netbanking")
