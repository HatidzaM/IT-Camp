// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

const niz = [2,3,4,5,6];
const nizS = niz.join("🐸");
console.log(nizS);



// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// const addsum = (num) => {
//     let newNum = "";
//     for(let i = 0; i<= num.length-1; i++){
//         if(num[i] % 2 === 0 && num[i+1]%2===0){
//             newNum += num[i] + "-"
//         }
//         else{
//             newNum += num[i]
//         }
//     }
//     return newNum
// }
// console.log(addsum("012345"));

const addSomething = (num) => {
    let newNum = "";
    for (let i = 0; i <= num.length - 1; i++) {
      if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
        newNum += num[i] + "-";
      } else {
        newNum += num[i];
      }
    }
    return newNum;
  };
  
  console.log(addSomething("025468"));