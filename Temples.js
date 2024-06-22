function ListOfTemples(God) {
    if (God == "shiva") {
        listofshivatemple()
    }
    else if (God == "SaiBaba") {
        listofSaiBabatemple()
    }
    else if (God == "venkateshwara") {
        listofvenkateshwaratemple()
    }
    else if (God == "Humanam") {
        listofHumanamtemple()
    }
}
function listofshivatemple() {
    list1 = {
        "Amarnath": "Kashmir",
        "Kedarnath": "Uttarakhand",
        "Mahakaleshwar": "Madhya Pradesh"
    }
    console.log(list1)

}
function listofSaiBabatemple() {
    list2 = {
        "SaiBaba": "shiridi",
        "Ayyapa": "yadamari",
        "kattamanchi": "chittoor"
    }
    console.log(list2)
}
function listofvenkateshwaratemple() {
    list3 = {
        "venkateshwara": "tirumala",
        "balaji": "tirupathi",
        "varadarajaswami": "yadamari"
    }
    console.log(list3)
}
function listofHumanamtemple() {
    list4 = {
        "Humanam": "banglore",
        "jai Humanam": "yadamari",
        "seetharama": "Madhya Pradesh"
    }
    console.log(list4)
}
ListOfTemples("shiva")
ListOfTemples("SaiBaba")
ListOfTemples("venkateswara")
ListOfTemples("Humanam")
