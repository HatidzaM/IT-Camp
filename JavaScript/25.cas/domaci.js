// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function bliziSto(prvi, drugi){
     let brojac1 = 0;
     let brojac2 = 0;
     let blizi;
    if(prvi<=100 && drugi<=100){
        for(let i=prvi; i<=100; i++){
         brojac1++
        }
        for(let j=drugi; j<=100; j++){
         brojac2++
        }
    }
    else if(prvi>=100 && drugi>=100){
        for(let i=prvi; i>=100; i--){
         brojac1++
        }
        for(let j=drugi; j>=100; j--){
         brojac2++
        }
    }
    else if(prvi>=100 && drugi<=100){
        for(let i=prvi; i>=100; i--){
         brojac1++
        }
        for(let j=drugi; j<=100; j++){
         brojac2++
        }
    }
    else if(prvi<=100 && drugi>=100){
        for(let i=prvi; i<=100; i++){
         brojac1++
        }
        for(let j=drugi; j>=100; j--){
         brojac2++
        }
    }
    if(brojac1<brojac2){
     blizi = prvi;
        return `broj blizi 100 je prvi broj ${blizi}`
    }
    else if(brojac2<brojac1){
         blizi = drugi;
        return `broj blizi 100 je drugi broj ${blizi}`
    }
}
console.log(bliziSto(57, 40));
console.log(bliziSto(101, 200));
console.log(bliziSto(98, 150));
console.log(bliziSto(-4, 220));



// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function inRange(a,b){
    if( (a>=40 && a<=60) && (b>=40 && b<=60) ){
        return `oba broja se nalaze 40-60`
    }
    else if( (a>=70 && a<=100) && (b>=70 && b<=100) ){
        return `oba broja se nalaze 70-100`
    }
    else{
        return `pih`
    }
}
console.log(inRange(45,57));
console.log(inRange(5,50));
console.log(inRange(50,80));



// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function veci(br1,br2){
    let max;
    if((br1>=40 && br1<=60) && (br2>=40 && br2<=60)){
        if(br1>br2){
         max = br1;
        }
        else if(br2>br1){
         max = br2;
        }
    return `veci broj je ${max}`
    }
    else{
        return `nema`
    }
}
console.log(veci(5,8));
console.log(veci(44,55));