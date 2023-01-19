//zbir elemenata fibonacijevog niza
let niz=[1,1];
let i =2;
let zbir = 0;
while(niz[i-2] + niz[i-1]<4000000){
    zbir = niz[i-2] + niz[i-1];
    niz.push(zbir);
    i++
}
const suma = niz
.filter((br)=> br%2===0)
.reduce((prev, curr)=> prev+curr);
console.log(suma);



//najveci palindrom napravljen od proizvoda 2 trofifrena broja
const palindrom = function(pal){
    let novi = "";
    for(let i = pal.length-1; i >= 0; i--){
        novi += pal[i]
    }
    if(pal === novi) { return true }
    else { return false }
}
const maxpalindrom = ()=>{
    for(let i=100;i<1000;i++){
        for(let j=i; j<1000; j++){
            if(palindrom(i*j) && !niz.includes(i*j)){
                niz.push(i*j)
            }
        }
    }
    return Math.max.apply(null, niz);
}
console.log(maxpalindrom());


//2.nacin
