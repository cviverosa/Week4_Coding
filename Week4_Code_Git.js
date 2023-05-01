console.log(`--------------------------
1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.\n`)

// Code block//

let ages = [3,9,23,64,2,8,28,93]; //this is my age array with values given

//Code Block ends//
console.log(`--------------------------
1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.\n`)   
console.log('Do not use numbers to reference the last element, find it programmatically.')
console.log("ages[7] – ages[0] is not allowed!\n")

//Code Block//
 
let subtractTwoElements = ages[ages.length-1]- ages[0]; //Index values are given for the ages in the array
console.log(subtractTwoElements); //Print the results of subtracting the first element from the last element

//Code Block Ends//


console.log(`--------------------------
1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths.)\n`)
//Code Block//

ages.push(57); //Adding a new age using push
//console.log(ages); //Make sure the new value got added
subtractTwoElements = ages[ages.length-1]- ages[0]; //repeating step above to ensure the code written is dynamic, setting the new value for subtractTwoElements
console.log(subtractTwoElements);
//Code Block Ends//

console.log(`--------------------------
1c. Use a loop to iterate through the array and calculate the average age.\n`) 

//Code Block//
let sum = 0;
for (let i = 0; i < ages.length; i++){
  sum += ages[i]; //using a for loop since we know the lenght of array, the sum end value is adding up after each loop
}

console.log((sum/ages.length))//Printing the average of the ages by dividing the sum from the loop by the length of the array (number of items in the array)

//Code Block Ends//

console.log(`--------------------------
2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.\n`)

//Code Block//
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'] //declaring my array names and adding the values in the array

//Code Block Ends//

console.log(`--------------------------
2a. Use a loop to iterate through the array and calculate the average number of letters per name.\n`)

let sumOfLetters = 0; //setting it to 0 to have a starting point
for( let i = 0; i< names.length; i++){   
    sumOfLetters+= names[i].length;//Each of the characters of the strings will be added after each iteration 
}
console.log(sumOfLetters/(names.length)); // The sum of the characters of the strings will be divided by the number of elements of the array to get the average of characters per string

console.log(`--------------------------
2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.\n`) 

let concatenateNames = " "; // Create a variable where the initial starting string is empty
for( let i =0; i< names.length; i++){ // Loop goes through each element and adds  each strong together with  space inbwteen in name
    concatenateNames += names[i] + " ";
}
console.log(concatenateNames); //prints the concatenated names with spaces in bewteen them

console.log(`--------------------------
3.  How do you access the last element of any array?\n`)

//Code Block//
console.log("To access the last element of an array you have to execute console.log(array.length-1)") //This prints the function to use for getting the last element of the array
//Code Block End//

console.log(`--------------------------
4.  How do you access the first element of any array?\n`)

//Code Block//

console.log("To access the first element of an array you can execute console.log(array[0])") //This prints the function to use for getting the first element of the array

//Code Block End//

console.log(`--------------------------
5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.\n`)

//console.log("For example:")

//console.log("let names = [Kelly, Sam, Kate]; ")    // starting with this array
//console.log("let nameLengths = [5, 3, 4]; ")            // create a new array

//Code Block//

let characterCount = 0;
let namesLength = []; //start with a new empty new array to be used later
for(let i =0; i< names.length; i++){
    namesLength.push(names[i].length); //After each loop, the name length for each element of the names array is pushed into the namesLength array

   
}
console.log(namesLength); //new array and its values are printed


//Code Block End//

console.log (`--------------------------
6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array\n`)

let sumOfNamesLength = 0; //Starting base of sum value before we enter the loop

for( let i = 0; i < namesLength.length; i++){ //Loop goes through each element of the array and adds the values together to get the sum
    sumOfNamesLength += namesLength[i];
}
console.log(sumOfNamesLength); //sum of the array is printed here

console.log(`--------------------------
7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).\n`)
let concatenateNTimes = (word, n)=>{ //creating a function that has a loop inside of it
    let result = " ";   //the function has a loop that will result in WORD , N times and add each WORD together after each loop within the N value
    for(let i=0; i <n;i++){
       result+= word;// Every time it loops through, the word is being concatenated each time with the +
    }
    return result
}
console.log(concatenateNTimes('Hello', 3)); //printing the results to ensure code works

console.log(`--------------------------
8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  
The full name should be the first and the last name separated by a space.\n`)

//Code Block//
console.log(`___________
let fullName = (firstName,lastName)=>  
    firstName + " " + lastName;   

console.log(fullName(firstName,lastName))\n`);

//Code Block End//
///Arrow function taking in 2 param, firstName and lastName
////return is concanenating the first and last name with a space in between


console.log(`--------------------------
9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.\n`)

//Code Block//
//let newNumbers = [4,5,6,7] this is for testing purposes 
//let arraySum = 0; testing purposes
console.log(`-------------
let sumOfArray = (a)=> {
    for( let i=0; i<newNumbers.length;i++){   
        arraySum += newNumbers[i];
    }
    if( arraySum>100){
        return true
    }
    else{
        return false
    }
}

console.log(sumOfArray(newNumbers));\n`)
//In this code the function is taking in a set array and looping through each element and adding the sum of them together, it breaks out of the loop
//after it gets to the end of the array length. After it goes through if and else to see what boolean it relates to, from there the result gets printed


//Code Block End//


console.log(`--------------------------
10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.\n`)

//Code Block//

console.log(`-------
let averageOfNumbers = (a) => {
    let sumOfNumbers = 0;
    for(let i= 0; i < a.length; i++){
      sumOfNumbers += a[i];
    }
    return (sumOfNumbers/(a.length));
}
console.log(averageOfNumbers(testArray));\n`)

//Arrow function executes by having an array go through a loop, the loop goes through the length of the array and adds the numbers together after each loop
//the return value takes the sum from the loop and divides by the length of the array to get the average

//Code Block End//


console.log(`--------------------------
11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.\n`)

//Code Block//

console.log(`--------------------
let greaterArrayAverage = (param1,param2) =>{
    let sumOfArr1 = 0;
    for( let i = 0; i <param1.length; i++){
        sumOfArr1 += param1[i];
    }
    let sumOfArr2 = 0;
    for(let x = 0; x<param2.length; x++){
        sumOfArr2 += param2[x];
    }
    let avgArr1 = (sumOfArr1/(param1.length));
    let avgArr2 = (sumOfArr2/(param2.length));
    if(avgArr1>avgArr2){
        return true;
    }
    else{
        return false
    }
}\n`)

//In this function, it has two for loops to add the sum of each array. After the loops execute for the arrays, the averages are then calculated then assigned
//to their average variables for each array, following this an if statement is used with a boolean to compare the averages of the arrays to see if the first one is greater than the second

// let arr1 = [6,7,8,9];
// let arr2 = [1,2,3.4];
// console.log(greaterArrayAverage(arr1,arr2)); this was used for testing purposes

//Code Block Ends//

console.log( `--------------------------
12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n`)

//Code Block//


console.log(`--------------
let willBuyDrink = (isHotOutside,moneyInPocket)=>{
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return true
    }
    else{
        return false;
    }
}\n`);

// For this function if statement is taken in where both booleans have to be true in order to return true, if either is false it will return false
//console.log(willBuyDrink(false,11)); testing purposes
    

//Code Block Ends//

console.log(`--------------------------
13.  Create a function of your own that solves a problem.\n`) 

//Code Block//

// console.log(`----------
console.log(`---------
let canGetTattoo = (funds,tattooCost)=>{
    if(funds > tattooCost){
        return ('Yay! You made your goal! Go get that tattoo.');
    }
    else{
        let remainingFunds = tattooCost - funds;
        return ("You are not quite at your goal. Sorry! You need" + " " + "$" + remainingFunds + " " + "more to get your tattoo.");
    }
} \n`)

//console.log(canGetTattoo(300,400)); testing purposes

//For this function, it takes in two parameters of someones current funds vs how much the tattoo piece cost. In that function it does a boolean using if
//If the funds are greater than the cost then it will be true so the person can get the tattoo. Else the function returns a false saying user needs x amount of money to get to their goal


//Code Block End//

console.log("In comments, write what the function does and why you created it.")
//I made this function for myself since I am actually saving to get a new piece done. It's nice to have a tracker to see your progress. Most people do I think so somehting small like this is 
//helpful to have and fun to make