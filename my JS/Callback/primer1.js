function glavnaF (callbek){
    console.log("prvi broj stepenovan drugim je:")
    callbek(2,3);//ovde je pozivamo
}

function callbek(par1, par2){
    console.log(par1**par2);
}

glavnaF(callbek);
