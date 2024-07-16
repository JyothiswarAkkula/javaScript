//craeting a empty array(phonepay) static fixed data
phonepay = []

//Adding the elements into the array(phonepay) by using push method
phonepay.push({ Deva: [{ customer_name: "Jyothiswar", amount: 100, transcation_id: "NB24071317210566456144942", date: "04/11/2022" }] })
phonepay.push({ Ramesh: [{ customer_name: "Jyothiswar", amount: 2000, transcation_id: "NB22071317210566456144942", date: "04/11/2023" }] })
phonepay.push({ Bharathi: [{ customer_name: "Jyothiswar", amount: 3000, transcation_id: "NB23071317210566456144942", date: "04/11/2024" }] })

console.log(phonepay)
console.log(phonepay[2])

/*optional
//prints the index values
for (i=0;i<=phonepay.length; i++)
{
  console.log("jyo1",i)
}

// prints the index values
for (i in phonepay)
{
  console.log("jyo2",i)
}*/

//print the index values
for (k of phonepay) {
    console.log("Before", k)
    inn = Object.values(k)

    for (j of inn) {
        console.log("After creating object,values", j)


        if (j[0].amount <= 10) {
            console.log("Money resived from the Deva")

        }
        else {
            console.log("Money not resived from the Deva")
        }

    }
}




















