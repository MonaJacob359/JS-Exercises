// let name= "Mona Yagoub Edris";
// console.log(name.repeat(10))

//////////////////////////////////////////

/*let the_title = "Elzero", my_discriptoin = "Elzero Web School", date_of_the_day = "20/10";
let my_event = `
<div>
<h3>Hello ${the_title}</h3>
<P>${my_discriptoin} </p>
<span>${date_of_the_day}</span>
</div>
`;
document.write(my_event.repeat(4))*/

//////////////////////////////////////////

// console.log(+100)
// console.log(+"100")
// console.log(+"-100")
// console.log(+"Mona")
// console.log(+"10.5")
// console.log(+null)
// console.log(+false)
// console.log(+true)
// console.log(+0xff)
// ///////////////////////////////
// console.log(-100)
// console.log(-"100")
// console.log(-"-100")
// console.log(-"Mona")
// console.log(-"10.5")
// console.log(-null)
// console.log(-false)
// console.log(-true)
// console.log(undefined)
// console.log(-0xff)
// //////////
// console.log(Number("-Mona"))
// console.log(Number(-0xff))
/////////++e * ++g + f
// let d = "-100", e = "20", f = 30, g = true;
// console.log()//2000
// console.log()//173
/*console.log(-d * +e + f * --g)
let a = 10, b = "20", c = 80;
console.log(++a  - +a++)
console.log( +b++ + +c++)
console.log(3..toString())
console.log(100..toFixed())*/

////////////////////////////////////////// Number Challenges:-  #26
// let a = 1_00 , b = 2_00.5 , c = 1e2 , h =2.4 ;
// console.log(Math.trunc(Math.min(a, b, c, h)));
// console.log(a ** Math.trunc(h));
// console.log(Math.pow(a, Math.trunc(h)));//Elzero methods;
 ///get the integer from h with 4 methods
//  console.log(Math.trunc(h))
//  console.log(Math.floor(h))
//  console.log(Math.round(h))
//  console.log(parseInt(h))
///use b and d to get this value 66.67 string , 67 number
// console.log(Math.round(b)/Math.ceil(h))
// console.log(Math.ceil(b)/Math.ceil(h))
// console.log((Math.trunc(b)/Math.ceil(h)).toFixed(2))

/////////////////////////////////////////

// let n = "Elzero web school"
// console.log(n.split("o"))
//////////////// string challenges:- #30
//////////////
//not finish
// let a = "Elzero Web School";
 
// console.log(a.slice(2, 6).charAt(0).toUpperCase());
// console.log(a.split(" ", 1)) 
// console.log(`${(a.substr(0, 6))} ${a.substr(11, 17)}`)
// console.log()
// let b = "h";

// console.log(b.repeat(8).toUpperCase())

let st = "Elzero Web School";
// console.log((st.length*2).toString())

// if((st.length*2).toString() === "34"){
//     console.log("Good");
// }
// console.log(st.charAt(indexOf("W")))
// console.log(st.indexOf("W").charAt(indexOf("W")))   
 


///////// switch and if condition challenges : #39

// let job = "Support";
// let salary = 0;
// switch(job){
//     case "Manager":
//         salary = 8000
//         console.log(salary)
//         break;
//      case "IT":
//     case "Support":
//         salary = 6000
//         console.log(salary)
//         break;
//     case "Devolper":
//     case "Designer":
//         salary = 7000
//         console.log(salary)
//         break;
//     default:
//         salary = 4000
//         console.log(salary)
// }

// let holiday = 5;
// let money = 0;
// if(holiday === 0){
//     money = 5000;
//     console.log(`My money is ${money}`);
// } else if(holiday === 1 || holiday === 2){
//     money = 3000;
//     console.log(`My money is ${money}`);
// } else if(holiday === 3){
//     money = 2000;
//     console.log(`My money is ${money}`);
// } else if(holiday === 4){
//     money = 1000;
//     console.log(`My money is ${money}`);
// }else{
//     console.log(money);
// }

// for (let i=0 ; i<=4 ; i++){
//     console.log(i)
// }
// let products = ['Keyboard','Mouse', 'Pen', 'Monitor', 'Pad', 'iphone']
// let i = 0;
// for(;;){
//     console.log(products[i]) 
//      i++
//     if(i === products.length){
//         break;
//     }
// } 
// function myFunction() {
//     return "Hello";
// }
// console.log(myFunction())
// document.getElementById('demo').innerHTML = myFunction();

// const fruits = ['banana', 'apple', 'pineapple', 'cherry'];

// const i = fruits.findIndex((fruits) => fruits === 'banana')
// console.log(i)
// fruits.splice(1, 4, 'Mona')
// console.log(fruits)
const num = [1, 2, 3, 4];

// num.forEach((num) => {
//     console.log(num * 2)
// });
num.forEach( (number) => number * 2 );
console.log(number)

// const number = num.map( (num) => num * 2 );
// console.log(number)