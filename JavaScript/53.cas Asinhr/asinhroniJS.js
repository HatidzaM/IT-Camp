console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3)
}, 0);

console.log(4);

//timeout ide automatski u ppi gde ceka onoliko klk mu treba da se izvrsi
//i posle ide onamo do loopa sve dok se ne oslobodi prostor u call stack,
//pa posle tek na kraju kada je prazan call stack moze tu da dodje  i da se izvrsi

for (let i = 0; i < 10.; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100);
    
}
//0,1,2,3,4,5,6,7,8,9



// var i;
// for (var i = 0; i < 10.; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 100);
    
// }
//10, 10, 10, 10...10



//try catch