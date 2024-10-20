// v.2 ////////////////////////////////

/*const numarr =[1, -9, 5, 7, -14, 15, 9]
let sum = 0
let i = 0
while(i<numarr.length){
    if(numarr[i]>0){
        sum += numarr[i]; 
    }
    i++
}  
 console.log(sum)*/
//  let i = 40059; 

// v.2 /////////////////////////////

/*function larDig(i){
 let largestDigit = 0;
 while(i>0){
    lastnum = i % 10;
    if(lastnum > largestDigit){
        largestDigit = lastnum
    }
    i = (i - lastnum) / 10
 }
 return largestDigit;
}
 console.log(larDig(84005))*/

// v.3 01 ///////////////////////////

 /*function multiNum(num){
    for(let n = 1; n<=12; n++){
    console.log(`${num} * ${n } = ${num * n} `);
};
   }
   multiNum(12)*/

   // v.3 02 //////////////////////////

/*const myFriends = ["Ghada", "Wafa", "Ayaa", "Razan", "Arwa", "Wajd","Mona"]

 function printNames(arr){
    for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}
 }
 printNames(myFriends)*/

 // v.3 03 ////////////////////////////

 /*const numArr =[5, 45, 42, 304, 209, 3]

 function getMaxNum(arr){
 let maximumNum = 0
 for(let i=0; i<arr.length; i++){
    if(arr[i]>maximumNum){
        maximumNum = arr[i]
    }
 } 
 console.log(maximumNum) 
}
getMaxNum(numArr)*/

// v.3 04 ///////////////////////////

/*const myFriends = ["Ghada", "Wafa", "Ayaa", "Razan", "Arwa", "Wajd","Mona"]

function printNames(arr){
for(let i = arr.length-1; i>= 0 ; i--){
    console.log(arr[i])
}
}
printNames(myFriends)*/

// v.3 05 //////////////////////////

/*const arrNum = [2, 4, 6, 1, 3, 5, 7, 9, 11, 8, 10, 12, 5, 3];
const evenNumbers = [];
 const oddNumbers = [];

   for(let i = 0; i<arrNum.length; i++){
        if(arrNum[i] % 2 ===0){
            evenNumbers.push(arrNum[i])
        }
        else if(arrNum[i] % 2 !==0){
            oddNumbers.push(arrNum[i])
        }
   }
  console.log(evenNumbers)
  console.log(oddNumbers)*/


//   example ////////////// 

  /*const arrNum = [2, -4, 6, -1, -3, -5, 7, -9, -11, -8, -10, -12, 5, 3];

function sumPositive(arr){
    let sum = 0;
    let i = 0;
    while(i<arr.length){
        if(arr[i]>0){
            sum += arr[i]
        }
        i++
    }
    console.log(sum)
}
sumPositive(arrNum)*/