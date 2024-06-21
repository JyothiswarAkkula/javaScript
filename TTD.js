/* RAW DATA
  1.Date=Dec1st
  2.Reporting Time=4:00 AM
  3.Aadhaar Card=733498928758
  4.Ticket_Type,=Special Entry Darshan
*/

class TTD {
    //4.Ticket_Type,=Special Entry Darshan
    constructor(Ticket_Type) {
        this.TT = Ticket_Type


    }
    check(Aadhaar_Card, Reporting_Time, date) {
        console.log("Details of the person in TTD")

        //1.Date=Dec1st
        if (date == "Dec1st 2024") {
            console.log("Entry inside the tollgate")
        }
        else {
            console.log("No Entry inside the tollgate")
            return
        }

        //2.Reporting Time=4:00 AM
        if (Reporting_Time >= "4AM") {
            console.log("Reporting_Time is verified Allowed inside the queue")
        }
        else {
            console.log("Reporting_Time not is not match Allow inside queue")
            return
        }

        //3.Aadhaar Card=733498928758
        if (Aadhaar_Card == 733498928758) {
            console.log("Aadhar card  verified Allow for Darshanamu")

        }
        else {
            console.log("Aadhar card verified Dont Allow for Darshanamu")
            return
        }


        console.log(this.TT)
    }

}

let jyo = new TTD("Special Entry Darshan",)
jyo.check(733498928758, "4AM", "Dec1st 2024")

