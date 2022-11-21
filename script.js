// alert('Are you excited to learn about tools?');
//         let usersname = prompt("Please enter your name")
//         let usersresponse = prompt("Before heading to my website, what tools would you like to learn more about?"); 
//         let usertool = prompt ("If you are a craftsperson, what is your favorite tool to use?");  
//         alert('Be sure to see my favorite tool down at the bottom of my page!');
//         let userstore = prompt ("Last question...Do you prefer Lowe's or the Home Depot?");
//         alert('Right answer!')
//         console.log("the tool the user would like to learn more about is: ", usersresponse);
//         document.write("Hello and welcome, " + usersname);

//    FUNCTIONS!!!!

// document.write()
// alert()
// prompt()
// console.log()
// confirm()

// STRUCTURE:

// function functionName(parameters){code you want to execute}
// function functionName(){
    // code to execute;
// }


// function addTwoNumbers(number1, number2){
//     let sum = number1 + number2;
//     return sum;
// }

// console.log(addTwoNumbers(9, 5));

function sayHi(){
let usersname = prompt("Please enter your name");
if (usersname == ""){
    alert("You may have forgotten to type your name...");
}
usersname = prompt("Please include a name.  It helps enhance your experience.");
let usersresponse = prompt("Before heading to my website, what tools would you like to learn more about?"); 
let usertool = prompt ("If you are a craftsperson, what is your favorite tool to use?");
if (usertool == ""){
    alert("Please refresh the page and share what your favorite tool to use is...or else we will have to hammer it out. Lol!!!");
}
alert('Be sure to see my favorite tool down at the bottom of my page!');
let userstore = prompt ("Last question...Do you prefer Lowe's or the Home Depot?");
alert('Right answer!')
console.log("the tool the user would like to learn more about is: ", usersresponse);
document.write("Hello and welcome, " + usersname);
return usersname;
}

let usersname = sayHi();

console.log(usersname);