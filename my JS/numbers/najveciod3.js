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