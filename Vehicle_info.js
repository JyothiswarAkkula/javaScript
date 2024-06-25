/*Vehicle information:

 Vehicle type:light motor vehicle- car
 Colour:red
 Engine number:kp98gtyihh457797
Chassis number:tc5678898335r45
Company:BMW */

class Vehicle_info
{
    constructor(Vehicle_type,Colour,Engine_number,Company)
    {
        this.VT=Vehicle_type
        this.color=Colour
        this.EN=Engine_number
        this.CN=Company
    }
    Details()
    {
        console.log("${this.VT}")
        console.log("${this.color}")
        console.log("${this.EN}")
        console.log("${this.CN}")
    }
}
function createVehicle()
{
    VT=prompt("Enter your Vehicle_type=")
    color=prompt("Enter your car Colour=")
    EN=prompt("Enter your car Engine_number=")
    CN=prompt("Enter what comapany car you want =")
}
jyo=createVehicle()
jyo.Details()
