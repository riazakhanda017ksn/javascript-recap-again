// const names = ["riaz", "samiya", "siyam"];
// const name2 = ["sakib", "mahid", "siam"];

// const totalCount = names.concat(name2);
// document.write(totalCount);

///

// const firstName = prompt("enter your first-name: ");
// const secondName = prompt("enter your second name: ");
// const totalName = firstName + secondName;
// document.write(totalName);
// document.write(totalName.length);
// document.write(totalName.charAt(1));
// document.write(totalName.toUpperCase());

// const a = parseInt(prompt("enter your a number : "));
// const b = parseInt(prompt("enter your b number : "));
// const height = parseInt(prompt("enter your height : "));

// const triAngle = a + b * height;
// const Area = triAngle / 2;
// document.write(triAngle + " <br>");
// document.write(Area);

// var one, two, three, four, five;

// one = firstNumber + secondNumber;
// document.write(one);

// two = firstNumber - secondNumber;
// document.write(two);

// three = firstNumber * secondNumber;
// document.write(three);

// four = firstNumber / secondNumber;
// document.write(four);

// five = firstNumber % secondNumber;
// document.write(five);

// const farenH = parseInt(prompt("enter your F number : "));

// const celsius = (farenH - 32) * (5 / 9);

// const result = celsius;

// document.write("celsius " + result);

// const cels = parseInt(prompt("enter your Temperature number : "));

// const farenHeight = cels * (9 / 5) + 32;

// document.write(farenHeight);

// const number = parseInt(prompt("enter your grade number : "));
// if (number >= 80 && number <= 100) {
//   document.write("you got a plus");
// } else if (number >= 33 && number <= 60) {
//   document.write("you are passed in the examination");
// } else if (number >= 101) {
//   document.write("please your number never get over the 100");
// } else {
//   document.write(
//     "Fail !! please read properly to be passed the last examination"
//   );
// }

// const selectVowel = prompt(
//   "please enter the any letter to select vowel or consonant : "
// );

// const VowelOrConsonant = selectVowel.toLocaleLowerCase();

// if (
//   VowelOrConsonant == "a" ||
//   VowelOrConsonant == "i" ||
//   VowelOrConsonant == "o" ||
//   VowelOrConsonant == "e"
// ) {
//   document.write("vowel is --> " + VowelOrConsonant);
// } else {
//   document.write("The latter is consonant");
// }

// const selectVowel = prompt(
//   "please enter the any letter to select vowel or consonant : "
// );

// switch (selectVowel) {
//   case "a":
//     document.write("a");
//     break;
//   case "i":
//     document.write("i");
//   case "o":
//     document.write("o");
//   case "u":
//     document.write("u");
//   case "e":
//     document.write("e");

//   default:
//     document.write("this is consonant");
// }
// switch (selectVowel) {
//   case "a":
//   case "i":
//   case "o":
//   case "u":
//   case "e":
//     document.write("this is vowel");
//     break;

//   default:
//     document.write("this is consonant");
// }

// for (let i = 99; i >= 1; i = i - 2) {
//   document.write(i + "<br/>");
// }

// document.write("End");

// for (let i = 2; i <= 100; i = i + 2) {
//   document.write(i + "<br/>");
// }

// document.write("End");

// const ind = parseInt(prompt("enter the first value: "));
// const lastMoment = parseInt(prompt("enter the last value: "));
// var element = 0;
// for (let index = ind; index <= lastMoment; index = index + 1) {
//   element = element + index;
// }

// document.write(element);

// for (let i = 0; i <= 5; i++) {
//   const ind = parseInt(prompt("enter the first value: "));
//   const lastMoment = parseInt(prompt("enter the last value: "));
//   const result = ind + lastMoment;
//   document.write(result + "<br/>");
// }

// var i = 1;
// let sum = 0;
// while (i <= 50) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     sum = sum + i;
//   }
//   i = i + 1;
// }

// document.write(`<h1>$ ${" " + sum}</h1>`);
// document.write(`<h1>end</h1>`);

// for (let i = 0; i <= 100; i++) {
//   if (i == 10) {
//     break;
//   }
//   document.write(`<h1>$ ${" " + i}</h1>`);
// }
// document.write(`<h1>end</h1>`);

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   document.write(`<h1>$ ${" " + i}</h1>`);
// }
// document.write(`<h1>end</h1>`);

// let number1 = parseInt(prompt("enter the number : "));
// let number2 = parseInt(prompt("enter the number 2 : "));
// let number3 = parseInt(prompt("enter the number 3 : "));

// const result =
//   number1 > number2
//     ? document.write(`<h1>Number1</h1>`)
//     : number2 > number3
//     ? document.write(`<h1>Number2</h1>`)
//     : document.write(`<h1>number3</h1>`);

// function name(params) {
// }

// function myFunction(a, b) {
//   const result = a * b;
//   return result;
// }
// const fResult = myFunction(5, 6);
// document.write("Function Result ", fResult + "<br/> <br/>");
// ///

// function subtraction(num1, num2) {
//   const resultSubtraction = num1 * num2;
//   document.write("Result Subtraction ", resultSubtraction);
// }

// subtraction(200, 399);

// const names = new Array();
// for (let i = 0; i <= 5; i++) {
//   names[i] = parseInt(prompt("enter the any random number : "));
// }
// var sum = 0;
// for (let i = 0; i < names.length; i++) {
//   document.write(`<h2>${names[i]}</h2>`);
//   sum = sum + names[i];
// }

// document.write(`<h2>total ${sum}</h2>`);

// for (let index = 0; index <= names.length; index++) {
//   document.write(`<h2>${names[index]}</h2>`);
//   sum = sum + names[index];
// }
// document.write(`<h2>R ${sum}</h2>`);

// const names = new Array();
// for (var i = 0; i <= 10; i++) {
//   names[i] = prompt("enter your any random name: ");
// }
// for (var i = 0; i <= names.length; i++) {
//   document.write(`<h2>${names[i]}</h2>`);
// }

// const names = ["riaz", "nafich", "rakib", "sakib"];
///adding
// names.splice(1, 0, "rahim", "amzad");
// document.write(`<h2>${names}</h2>`);

// remove
// names.splice(1, 2);
// names.sort();
// names.reverse();

// const numbers = [14, 20, 31, 57, 100];
// numbers.sort(function numberItem(a, b) {
//   return b - a;
// });
// document.write(`<h2>${numbers}</h2>`);

// do a problem solve using - varriable, if else statement, loops, function and array

// function highestScore(score) {
//   let max = score[0];
//   for (let i = 0; i < score.length; i++) {
//     if (max < score[i]) {
//       max = score[i];
//     }
//   }
//   return max;
// }

// let score = [14, 20, 31, 57, 100];
// let maxScore = highestScore(score);
// document.write(`<h2>${maxScore}</h2>`);

// function lowestNumber(score) {
//   let lowest = score[0];
//   for (let i = 0; i < score.length; i++) {
//     if (lowest > score[i]) {
//       return (lowest = score[i]);
//     }
//   }
//   return lowest;
// }
// const number = [100, 555, 44, 33, 9920, 11, 10];
// const getLowestNumber = lowestNumber(number);
// document.write(`<h2>${getLowestNumber}</h2>`);

// // select largest name from array
// function biggerName(names) {
//   let biggerName = names[0];
//   for (let i = 0; i < names.length; i++) {
//     if (biggerName.length < names[i].length) {
//       biggerName = names[i];
//     }
//   }
//   return biggerName;
// }
// const names = [
//   "riaz ahmed",
//   "Aryan Ahmed",
//   "Adnan Ahmed khaled saifullah",
//   "Saifur Rahman Riaz",
// ];
// const getLargeName = biggerName(names);
// document.write(`<h2>${getLargeName}</h2>`);

// ------------Object_______________________________

// function student(name, age, language) {
//   this.name = name;
//   this.age = age;
//   this.language = language;
//   this.display = function () {
//     document.write(`<h2>${this.name}</h2>`);
//   };
// }

// const student1 = new student("riaz", 22, ["bangla", "english", "arabic"]);
// const student2 = new student("riaz", 22, ["bangla", "english", "arabic"]);
// const student3 = new student("riaz", 22, ["bangla", "english", "arabic"]);

// student1.display();
// student2.display();
// student3.display();

// let highestScore = 0;
// let lowestNumber = 0;
// for (let i = 0; i <= 5; i++) {
//   const number = parseInt(prompt("enter the number 1 to 5 : "));
//   const randomNumber = Math.floor(Math.random() * 5) + 1;

//   if (number === randomNumber) {
//     document.write("you are win <br/>");
//     highestScore++;
//   } else {
//     document.write(`you are lost , random number was ${randomNumber} <br/>`);
//     lowestNumber++;
//   }
// }

// document.write("<br/> <br/><br/><br/><br/><br/>");
// document.write(`you are win: ${highestScore}  <br/>`);
// document.write(`you are lost: ${lowestNumber} `);

// let highestScore = 0;
// let lowestNumber = 0;

// for (let index = 0; index <= 6; index++) {
//   const number = parseInt(prompt("Enter any number between 1 to 6 : "));
//   const random = Math.floor(Math.random() * 6) + 1;

//   if (number === random) {
//     document.write("you are win <br/>");
//     highestScore++;
//   } else {
//     document.write(`you are lost , random number was ${random} <br/>`);
//     lowestNumber++;
//   }
// }

// document.write("<br/> <br/><br/><br/><br/><br/>");
// document.write(`you are win: ${highestScore}  <br/>`);
// document.write(`you are lost: ${lowestNumber} `);

// try {
//   for (let index = 2; index > 100; index = index + 2) {
//     document.write(`${index}  <br/>`);
//   }
// } catch (error) {
//   document.write(error);
// } finally {
//   document.write(`please check your code again`);
// }

// document.querySelector("#send").addEventListener("click", function () {
//   var input = document.querySelector("#input").value;
//   try {
//     if (input < 5) {
//       throw "input is too low";
//     } else if (input > 10) {
//       throw "input is too high";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// hosting and strict

// hosting

// x = 10;
// if (true) {
//   y = 20;
//   console.log(y);
//   var y;
// }
// console.log(x);
// var x;

// this is only possible for old js like var variable

// Note this is not possible in ES6
// x = 10;
// console.log(x);
// let x;

// it showing error because its not feature of Es6
//
// strict mode---------->
// x = 20;
// console.log(x);

///it will showing result without declaring variable but it is not right way , for that we have to use 'use strict mood'

// "use strict";
// x = 20;
// console.log(x);

// error will be -> ReferenceError: x is not defined

// ---------learn default parameter

// function defaultParameter(text = "hello im default parameter") {
//   console.log(text);
// }

// defaultParameter();

// learning rest parameter

// let sum = 0;
// function restParameter(a, b, ...c) {
//   for (let index = 0; index < c.length; index++) {
//     sum = sum + c[index];
//   }
//   console.log("sum", sum);
//   console.log(a, b, ...c);
// }

// restParameter(10, 20, 30, 50, 400, 700, 800, 1000);

//learning spread operator

// const listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const listTwo = [22, 4, 5, 775, 8892, 9005, 1];
// const listThree = [33, 5, 899, 778, 99, 9009];

// const total = [...listOne, ...listTwo, ...listThree];
// console.log(total);
// let sum = 0;
// for (let index = 0; index < total.length; index++) {
//   sum = sum + total[index];
// }
// console.log("total sum - ", sum);

//// learning object literal
// function objectLiteral(name, age, ...others) {
//   return {
//     name,
//     age,
//     ...others,
//   };
// }
// const objLtr = objectLiteral("riaz ahmed", 69, 893, 490, 30);
// console.log(objLtr);

// const object = {
//   name: "riaz",
//   fuc() {
//     return "hello wold";
//   },
// };

// const object = {
//   name: "riaz",
//   "fuc name"() {
//     return "hello wold";
//   },
// };

// console.log(object["fuc name"]);
