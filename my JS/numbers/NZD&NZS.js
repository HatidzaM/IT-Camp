const NZD = (a, b) => {
    
    let manji = Math.min(a, b);
    let zeljeniBroj;
    while (manji >= 1) {
        if (a % manji === 0 && b % manji === 0) {
            zeljeniBroj = manji;
            break;
        }
        manji--;
    }
return zeljeniBroj;
};
console.log(NZD(10, 15));
console.log(NZD(5, 10));
console.log(NZD(4, 9));


const NZS = (a,b) =>{
    const veci = Math.max(a,b);
    let i = veci;
    let nzs;
    while(true){
        if(i%a===0 && i%b===0){
            nzs=i;
            break
        }
        i++
    }
return `nzs od ${a} i ${b} je: ${nzs}`
}
console.log(NZS(4,2));
console.log(NZS(15,20));