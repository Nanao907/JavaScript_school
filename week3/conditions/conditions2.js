/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */
function getTemperature(temp){
    //let promt = promt ("give me a number");
    //console.log(typeof promt)
    if getTemperature(temp<15) {
        console.log("they should wear a jacket")
        
    }
    else {
        console.log("you are good to go")
    }
}
getTemperature(Number(prompt('What is the current temperature?')))