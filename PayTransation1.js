//craeting phonepay filter Taking inputs from the user(Dynamically)

function RawData(to, Amo, Dateee) {
    phonepay = []
    phonepay.push({ Deva: [{ customer_name: to, amount: Amo, date: Dateee }] })
    /*console.log("First",phonepay)
    console.log(phonepay[0])
     for(I of phonepay)
    {
      console.log(I)
    }*/
    logics()
}

function logics() {
    for (k of phonepay) {
        console.log("Before", k)
        inn = Object.values(k)

        for (j of inn) {
            console.log("After creating object,values", j)


            if (j[0].amount <= 1000) {
                console.log("Money reserved from the Deva")

            }
            else {
                console.log("Money not reserved from the Deva")
            }

        }
    }
}

RawData("Jyothiswar", 800, "04/11/2022")
RawData("Vinitha", 3000, "23/12/2022")