
let myFirstname="TOHEEB";
let secondName="Raheem";
let yearOfbirth="1987"
let presentYear="2021"
let age=(presentYear)-(yearOfbirth)
let myDetails
myDetails=["Hi, my name is "+` ${myFirstname} ${ secondName}`, " I am " + age + " years old"]
document.getElementById("student_message").innerHTML=myDetails

let quotient = "100";
let divisor ="7";
let result = quotient/divisor;
result =+result.toFixed(2)


document.getElementById("box1").innerHTML=quotient
document.getElementById("box2").innerHTML=divisor
document.getElementById("box3").innerHTML=result

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
console.log(typeof phone3=== typeof phone1);
console.log(typeof phone3=== typeof phone2);

// let base1 = 32;
// let exponent1 =6;
// exponential = base1**exponent1
// console.log(exponential)

let base1 = 32;
let exponent1 =1/3;
exponential = base1**exponent1
console.log(exponential)

let base2 = 32;
let exponent2=6;
exponential2=Math.pow(32,6);
console.log(exponential2)

/*a) var NAME;.......valid

b) var $num1;.....valid

c) var typeof;.....invalid

d) var first-name;,,,,,invalid

e) var attempt_2;...valid

f) var 2ndAttempt;....invalid

g) var full name....invalid;*/


var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity); 
    console.log(quantity =+ quantity); 
    console.log(quantity)
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);

    let urla="www.udemy.com"
    let urlb="show the url with https:// here"
    let urlc="https://www.google.com"
    let urld="show the url without https:// here"

    document.getElementById("urla").innerHTML=urla
    document.getElementById("urlb").innerHTML=urlb
    document.getElementById("urlc").innerHTML=urlc
    document.getElementById("urld").innerHTML=urld

    let temperature1 = "38"
    document.getElementById("conversiona").innerHTML=temperature1

    // Conversion of celcius to fahrenhiet  F = (9*C/5)+32 / C=(F-32)/1.8
    const farenheit=(x)=>{
        let c=38
        let f =9*c/5+32;
        // return  f;  
        return document.getElementById("conversionc").innerHTML=f  
    }

    let temperature2 = "24"
    document.getElementById("conversione").innerHTML=temperature2

const fahrenheit2=(x)=>{
    let c2=24
    let f2 =9*c/5+32;
    // return  f; 
    return document.getElementById("conversiong").innerHTML=f2    
}


document.getElementById("conversioni").innerHTML=temperature3

const fahrenheit2=(x)=>{
    let c3=-1
    let f3 =9*c/5+32;
    // return  f;     
  return  document.getElementById("conversionj").innerHTML=f3
}




    // document.getElementById("conversion1").innerHTML=fahrenheit

    const percentage=(a,total)=>{
        let t=557
             a=420

        let p =(a/total)*100;
        return p}
    console.log(percentage(420,557))
     


   let classification =[fir,sec,thr,fort,fiv,six]= [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
   let position1 = [fort,fiv,six]
   console.log(position1.reverse())
    document.getElementById("position").innerHTML=position1

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    'stars5_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
    console.log(course.title)
    console.log(course.categories)
document.getElementById("title").innerHTML=course.title
document.getElementById("category").innerHTML=course.categories
document.getElementById("fivestar").innerHTML=course.stars5_reviews


let shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
// console.log(shoppingList.pop())
// console.log(shoppingList.unshift("Chocolate"))
// console.log(shoppingList)
// console.log(shoppingList.push("Cheese","Egg"))
// console.log(shoppingList)

console.log(shoppingList.pop())
console.log(shoppingList.unshift("Chocolate"))
console.log(shoppingList)
console.log(shoppingList.push("Cheese","Egg"))
console.log(shoppingList)

document.getElementById("remove").innerHTML=shoppingList
document.getElementById("chocolate").innerHTML=shoppingList
document.getElementById("add").innerHTML=shoppingList




const myQuestions = [
    {
      question: "What is the name of codelab's TL instructor?",
      answers: {
        a: "Fellow Malush",
        b: "Mrs Bukola Gbemi",
        c: "Mr Ubani Friday"
       },
      correctAnswer: "b" 
    
    },
    {
      question: "How many percentage is codelab's set 05 first fund raising target",
      answers: {
        a: "40%",
        b: "10%",
        c: "80%"
      },
      correctAnswer: "a"
    },]
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];})
         console.log(myQuestions)
