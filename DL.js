/* Driving license validation 
RAW DATA
Last_name="kumar"
First_name="Pavan"
Middle_name="Bijjavaram"
license_number="ka50201500006939"
license_state="karnataka"
license_country="india"
Civilian_type="around india"
Employee_type="software engineer"*/

class DL
{
    constructor(Last_name,First_name,Middle_name,Employee_type)
    {
        this.LN=Last_name
        this.FN=First_name
        this.MN=Middle_name
        this.ET=Employee_type
        console.log( this.LN)
        console.log(this.FN)
        console.log(this.MN)
        console.log("employement Type is =" +this.ET)
    }
    check(license_number,license_country,Civilian_type,license_state)
    {
        if(license_number=="ka50201500006939")
        {
            console.log("license number is verified")
        }
        else
        {
            console.log("license number is not verified")
            return
        }
        if(license_country=="India")
        {
            console.log("Allow to drive in India")
        }
        else
        {
            console.log("Dont allow to driver to drive in India")
            return
        }
        if(Civilian_type=="around india")
        {
            console.log("This DL is vaild through the India")
        }
    
        if(license_state=="karnataka")
        {
            console.log("This license is verified for karnataka state ")
        }
        else
        {
            console.log("This is not a vaild license for karnataka state ")
            return
        }
        
        
    }
}
let jyo=new DL("jyothi","Akkula","Ramesh","software engineer")
jyo.check("ka50201500006939","India","around india","karnataka")
