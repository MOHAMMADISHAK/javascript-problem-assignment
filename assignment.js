// problem 1: feet to mile conversion
console.log("");
console.log("problem 1: feet to mile conversion");

function feetToMile(feet){

    if(feet<=0){
        console.log("Converted Mile value is : Feet can't be negative. Please Enter some valid input of feet.");
    }
    else{
    var mile = feet*0.00018939394;
    mile=mile.toFixed(6);
    console.log("Converted Mile value is :",mile);
    }
}
var feetInput= 1;
console.log("Enter the value of feet :",feetInput);
var finalMile = feetToMile(feetInput);




// problem 2: Wood Calculator
console.log("");
console.log("problem 2: Wood Calculator");

function woodCalculator(chair,table,bed){   

    var woodNeeded;
    if(chair<0 && table<0 && bed<0){
        return "Quantity can't be negative. Please Enter some valid quantity of chair, table and bed."
    }
    else{
        woodNeeded=chair*1+table*3+bed*5;
        return woodNeeded;
    }
}
var chairInput = 1, tableInput = 1, bedInput = 2;
console.log("Chair Quantity :",chairInput,"Table Quantity :",tableInput,"Bed Quantity :",bedInput);
totalWood = woodCalculator(chairInput,tableInput,bedInput);
console.log("The total cubic feet of wood will be needed is : "+totalWood);




// problem 3: brick Calculator 
console.log("");
console.log("problem 3: brick Calculator");

function brickCalculator(floorNumber){
    var brickNeeded;
    if(floorNumber<0){
        return "Floor number can't be negative. Please Input a Valid Floor Number.";
    }
    else if(floorNumber<=10){
        brickNeeded=floorNumber*15*1000;
    }
    else if(floorNumber<=20){
        brickNeeded=15*10*1000+(floorNumber-10)*12*1000;
    }
    else{
        brickNeeded=15*10*1000+12*10*1000+10*(floorNumber-20)*1000;
    }
    return brickNeeded;
 }
var floorNumberInput = 22;
console.log("Enter the number of Floor :",floorNumberInput);
var totalBrickNeeded = brickCalculator(floorNumberInput);
console.log("The total number of needed brick is :",totalBrickNeeded);




//  problem 4 : finding small size friends name
console.log("");
console.log("problem 4 : finding small size friends name")

function tinyFriend(friendNames){

    var smallNameLength=friendNames[0].length;
    var tinyName = [];
    for(var i=0;i<friendNames.length;i++)
    {
        if(friendNames[i].length<smallNameLength)
        {
            smallNameLength=friendNames[i].length;    
        }     
    }
    for(var i=0;i<friendNames.length;i++){
        if(friendNames[i].length==smallNameLength){
            tinyName.push(friendNames[i]);
        }
    }
  return tinyName;
}
 
var friendNamesInput=['Tahmid','Sakiba','katrina','tasnim','ishakaa'];
console.log("Enter the name of Friends :",friendNamesInput);
var friendSmallName = tinyFriend(friendNamesInput);
console.log("The smallest length friend's name is :",friendSmallName);