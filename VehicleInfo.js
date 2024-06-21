/*  Vehicle information:
    Vehicle type:light motor vehicle- car
    Colour:red
    Engine number:kp98gtyihh457797
    Chassis number:tc5678898335r45
*/
class vehicle {
    constructor(Vehicle_type, Engine_number,
        Chassis_number) {
        this.VT = Vehicle_type
        this.EN = Engine_number
        this.CN = Chassis_number

        console.log("Vehicle type =" + this.VT)
        console.log("Engine numbe =" + this.EN)
        console.log("Chassis_number=" + this.CN)
    }
    check(Colour) {
        if (Colour == "red") {
            console.log("Buy the car")
        }
        else {
            console.log("Dont buy the car")
            return
        }
    }
}
console.log("Customer1")
let jyo = new vehicle(" light motor vehicle- car", " kp98gtyihh457797", " tc5678898335r45")
jyo.check("pink")
console.log("Customer2")
let jyo1 = new vehicle("heavy car", "kp34gtihh457745", "joihhg2354545")
jyo1.check("red")