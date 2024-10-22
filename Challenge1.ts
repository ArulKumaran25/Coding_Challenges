// ask user to enter age,sex,marital status*Y or N) and then using following rules print their place of serice.
// if employee is female then he must be work in urban
// if employee is a male and age is in between 20 to 40 then he may work in anywhere
// if employee is male and age is in between 40 to 60 then he will work in urban areas only
// an any other input of age shopuld print "ERROR"

import { log } from "console";
var input=require("prompt-sync")();
var age=Number(input("Ener the age:"));
var sex=input("Enter the sex:");
var maritial_status=input("Enter the Maritial status (Y or N) :")
 
if(sex==="F"){
    console.log("she may work in urban");
}
else if(sex==="M"){

   if(age>=20 && age<=40){
    console.log("He may work anywhere");
   }

   else if(age>=40 && age<=60){
    console.log(" He will work in Urban areas");
   }
}
else{
    console.log("Error");
}


