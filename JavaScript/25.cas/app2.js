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


function bliziSto(prvi, drugi) {}

console.log(bliziSto(-10, 40));
console.log(bliziSto(101, 200));
