//                      chapter 12-13
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var char = prompt("write any number or character");

// // var result = typeof

// if (char===char.toUpperCase()){
//     console.log("the string  is in uppercase")
//     }
//         else if (char===char.toLowerCase()){
//             console.log("the string is in lower case")
//     }
//     else {
//         console.log("the string is in mix uppercase and lower case character")
//     }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var input1 = +prompt("write any number")
// var input2 = +prompt("write second number")

// if (input1>=input2){
//     console.log(input1)
// }
// else{
//     console.log(input2)
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("write any number")

// if(num < 0){
//     console.log("the number is negative")
// }
// else if (num>0){
//     console.log("the number is positive")
// }
// else{
//     console.log("the number is zero")
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("write any number")

// if(char=== "a" ||
//     char=== "o" ||
//     char=== "e" ||
//     char=== "i" ||
//     char=== "u"
// ){
//     console.log("the character is vowel")
// }
// else{
//     console.log("the character is not a vowel")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = "pass"
// if(password===''){
//     alert("please enter your password")
// }
// var confirmPassword = prompt("confirm your password")

// if(password===confirmPassword){
//     console.log("YOur password is correct")
// }
// else{
//     console.log("your password is not  correct")
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"}
// else{
// greeting = "Good evening";
// }
// console.log(greeting)

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = prompt("write the time in 24 format")

// if (time>="0000" && time< "1200"){
//     alert("good morning")
// }
// else{
//     if(time>="1200" && time<"1700"){
//         alert("Good afternoon")
//     }
//     else{
//         if(time>="1700" && time<"2100")
//             alert("good evening")
//     if(time>="2100" && time<="2359"){
//         alert("good night")
//     }
//     else{}
//     }

// }



                  // chapter 14-16
                  // 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr = {[]};

// 3. Declare and initialize a strings array.

// var arr = ["hi","hi"]

// 4. Declare and initialize a numbers array.

// var arr = [1,1,1,1,]

// 5. Declare and initialize a boolean array.

// var arr = [true,false]

// 6. Declare and initialize a mixed array.

// var arr = [true,1,"hi"]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifcationinpk = ["SSC", "HSC", "BCS",
//     "BS", "BCOM", "MS", "MPhil", "PhD"]
//     document.write(`<h1>Qualifications
//         <br> 1:${qualifcationinpk[0]}
//         <br> 2:${qualifcationinpk[1]}
//         <br> 3:${qualifcationinpk[2]}
//         <br> 4:${qualifcationinpk[3]}
//         <br> 5:${qualifcationinpk[4]}
//         <br> 6:${qualifcationinpk[5]}
//         <br> 7:${qualifcationinpk[6]}
//         <br> 8:${qualifcationinpk[7]}`)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students = ["sameer","ahmed","baloch"]
// var obtmarks = [200,444,222]
// var totalmarks = 500

// document.write(`score of ${students[0]} is ${obtmarks[0]}. percentage:${(obtmarks[0]/totalmarks)*100}%
// <br> score of ${students[1]} is ${obtmarks[1]}. percentage:${(obtmarks[1]/totalmarks)*100}%
// <br>score of ${students[2]} is ${obtmarks[2]}. percentage:${(obtmarks[2]/totalmarks)*100}%`)

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// var colors = ["red","green","blue"]

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var addcolorfirst = prompt("<br>write the name of a color which you want to add first")
// colors.unshift(addcolorfirst)
// // document.write(colors)

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var addcolorend = prompt("write the name of a color which you want to add at end")
// colors.push(addcolorend)
// document.write(colors)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var addtwoarr = prompt("Add two more color to the beginning of the array")
// var addtwoarr2 = prompt("Add two more color to the beginning of the array")
// colors.unshift(addtwoarr,addtwoarr2)
// document.write(colors)

// d. Delete the first color in the array. Display the updated
// array in your browser.

// colors.shift(colors)
// document.write(colors)

// e. Delete the last color in the array. Display the updated
// array in your browse

// colors.pop(colors)
// document.write(colors)

//     f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var index = +prompt("at which index you want to add a color")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colorname = prompt("name that color")

// colors.splice(index,0,colorname)
// document.write(colors)

// var index = +prompt("at which index you want to delete a color")

// var index2 = +prompt("at which index you want to delete a color")

// colors.splice(index,index)
// document.write(colors)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var scores = [233,333,44,535,353]
// document.write(scores)

// scores.sort(function(a, b){return a-b})
// document.write(scores)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","baiklkwnhdkj","wdsad","wdswd","sdsads","dAD"]

// var seletdcities=cities.slice(2,3)
// document.write(seletdcities)

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is ", "my ", "cat"];

// var arr2 = arr.join(" ",",")

// document.write(arr2)

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var arr = ["samsung","nokia","oppo","moto","zte","infinix"]

// document.write(`<select>
//     <br><option>${arr[0]}</option>
//     <br><option>${arr[1]}</option>
//     <br><option>${arr[2]}</option>
//     <br><option>${arr[3]}</option>
//     <br><option>${arr[4]}</option>
//     </select>`)
                        

                        //    Chapter 17-20 
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [
//     [
//         [
//             [
//                 [
//                     [
//                         []
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr = [["0123"],["1012"],["2101"]]
// document.write(arr)

// 3. Write a program to print numeric counting from 1 to 10.

// for (i=0; i<=10; i++){
//     document.write(i+"<br>"
//     )
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var num1 = +prompt("write the number for table")
// var num2 = +prompt("write how many time you need the multiflication")

// for (i=1; i<=num2; i++){
//     document.write(`${num1} X ${i} = ${num1*i}<br>`)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple","banana","mango","orange"]

// for(i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")
// }

// 6. Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// for(i=0; i<=15; i++){
//     document.write(i+"<br>")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (i=10; i>0; i--){
// document.write(i="<br>")
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for (i=0; i<=20; i=i+2){
//     document.write(i+"<br>")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (i=1; i<=20; i=i+2){
//     document.write(i+"<br>")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (i=0; i<=20; i=i+2){
//     document.write(i+" K")
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var a=["cake","apple pie","pineapple","bnanan","orange"]
// var userinput = prompt("what you want to search")

// for(i=0; i<a.length; i++){
//     if(a[i].includes(userinput)){
//         alert(`${userinput} is found `)
//     }

//     else{
//         alert(`${userinput} not found`)
//     }
//     break
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var arr = [2,42,434,345,3232,2323,2323,23,23,21,3,13253,53,5,3,53,456,5]
// // sort this arr
// arr.sort(function(a,b){ return a-b
//     })

// for(i=0; i<arr.length; i++){
// }
// document.write(`the largest number is ${arr[i-1]}`)

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var arr = [2,42,434,345,3232,2323,2323,23,23,21,3,13253,53,5,3,53,456,5]
// // sort this arr
// arr.sort(function(a,b){ return b-a
//     })

// for(i=0; i<arr.length; i++){
// }
// document.write(`the largest number is ${arr[i-1]}`for

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (i=0; i<=100; i=i+5){
//     document.write(i)
// }