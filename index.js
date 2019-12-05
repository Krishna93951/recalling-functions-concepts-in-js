// Import stylesheets
import './style.css';

//Declaring a function or also called function statment
function xyz(a,b){

};
//function is a key word.
//xyz is the function name.
//(a,b) are the parameters passed to the function.
//{} is a  blick in which a set of statements are present to be performed.


//funtion Expression
var getRectangleArea = function(width, height) {
    return width * height;
}
console.log(getRectangleArea(3,4));

//primitive data provided as parameters
//calling function
function number (){
  var num1 = 10;
  var num2 = 20;
  add(num1,num2);
  console.log(num1,num2);
}

function add (num1,num2){
  var a = num1;
  var b = num2;
  a +=20;
  b +=30;
  console.log(a,b);
}

number();

//Non - primitive data provided as parameter
//calling function
function car(){
  var honda = new Object();
  honda.color = 'Red';
  honda.type = 'Sedan';
  honda.model = 2019;
  myCar(honda);
  console.log(honda);
}

function myCar(honda){
 honda.color = 'Blue';
}
car();

//Types of Function

//1.Named Function
function user(){
var name = 'Kumar';
return name;
}

//2. Anonymous Function 
var wish = function (occation){
  console.log(occation +' '+user());
}
wish('Happy Birthday');

//3.Immediately-Invoked Function Expression
(function(a){
  console.log(a + 10);
})(10);

//following symbols can also be used !,+,-,~ to indicate iife
!function (){
console.log('Hello world');
}();

//if the iife has to be stored in a variable then the function should be enclosed in ();
var greeting = (function(person){
  return 'Hello' +' '+person;
})('Teacher')
console.log(greeting);

//pure functions 
function square(number){
  return number * number;
}
var xyz = square(10);
console.log(xyz);

//impure functions
var tax = 20;
function calculateTax(productPrice){
  return (productPrice * tax/100) + productPrice;
}
var ball = calculateTax(90);
console.log(ball);

//closure
var createEmployee = function(role){
  return {
    setRole: function (newRole){
      role = newRole;
      console.log(role);
    },

    getRole: function(){
      console.log(role);
    }
  }
}
var employee = createEmployee('Trainee');
employee.getRole();
employee.setRole('Web Developer');
employee.getRole();

//in closure name conflict will occur if variable names are same in both inner and outer functions , but the inner function variable  has highest priority and outer variable has the least.

//arguments object - used if the number of argument passed to a function is not fixed.
function myConcat(pattern) {
  var result = ' ';
   var i;
   var length =arguments.length;
   for (i = 1; i < length; i++) {
      result += arguments[i] + pattern;
   }
   return result;
}
console.log(myConcat('/','kk','Lion','King'));

//Types of parameters passed to a function

//1. Default parameter - providing default value while passing a parameter
function test(a,b=10){
  return a === b;
}
console.log(test(10));

//2. Rest parameter - represent an indefinite number of arguments as an array.
function abc(...theArgs){
  console.log(theArgs);
}
abc(1,2,3);
abc('KK','R','KKR');
abc([1,2,3],[23,4,5,3]);