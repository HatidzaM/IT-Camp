//1. nadji najveci broj od data 3 broja

function najveci(br1,br2,br3){
    let max;
    if(br1>=br2 && br1>=br3){
        max = br1;
    }
    else if(br2>=br1 && br2>=br3){
        max = br2;
    }
    else{
        max = br3;
    }
    return `najveci br je ${max}`
}
console.log(najveci(8,11,6));
console.log(najveciBroj(-22, -33, -44));

//2. pronaci vrednost najblizu broju 100

// POKUSAJ------------------------------------
// function blizi(br1,br2){
//     let a = 100-br1;
//     let b = 100-br2;
//     let c = br1 - 100;
//     let d = br - 100;
//     let blizii;
//     if(a<b){
//         b = blizii;
//         return `prvi broj je blizi`
//     }
//     else{
//         a = blizii;
//         return `prvi broj je blizi`
//     }
// }
// console.log(blizi(5,88));


function bliziSto(prvi, drugi) {
    let i;
  let brojac1 = 0;
  let brojac2 = 0;
  if (prvi >= 100) {
    for (i = prvi; i >= 100; i--) {
      brojac1++;
    }
  } else for (i = prvi; i <= 100; i++) brojac1++;

  if (drugi >= 100) {
    for (i = drugi; i >= 100; i--) {
      brojac2++;
    }
  } else for (i = drugi; i <= 100; i++) brojac2++;

  if (brojac1 > brojac2) return "drugi je blizi";
  else if (brojac2 > brojac1) return "prvi je blizi";
  else return "isti su";
}

console.log(bliziSto(-10, 40));
console.log(bliziSto(101, 200));
