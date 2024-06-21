/*  
System Properties
Rating=4.5
Processor=Intel® Core™ i5-2450 CPU
RAM=4.00GB
System_Type=64-bit OS
Computer_Name=BALU-PC
Computer_Description=WORKGROUP
*/

class System_Properties {
    constructor(Computer_Name, Computer_Description) {
        this.CN = Computer_Name
        this.CD = Computer_Description
        console.log("This system belongs to " + this.CN)
        console.log("This Computer Description is " + this.CD)
    }
    check(Rating, Processor, RAM, System_Type) {
        if (Rating = 4.5) {
            console.log("Rating is 4.5 so Accept")
        }
        else {
            console.log("Rating is less so dont accept")
            return
        }
        if (Processor = "Intel® Core™ i5-2450 CPU") {
            console.log("Intel® Core™ i5-2450 CPU accept")
        }
        else {
            console.log("Intel® Core™ i5-2450 CPU not accept")
            return
        }
        if (RAM = "4.00GB") {
            console.log("RAM=4.00GB so Accept")
        }
        else {
            console.log("RAM=4.00GB so not Accept")
            return
        }
        if (System_Type = "64-bit OS") {
            console.log("64-bit OS so accept")
        }
        else {
            console.log("64-bit OS so not accept")
            return
        }


    }
}
let jyo = new System_Properties("BALU-PC", "WORKGROUP")
jyo.check(4.5, "Intel® Core™ i5-2450 CPU", "4.00GB", "64-bit OS")
