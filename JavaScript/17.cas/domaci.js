//ZBIR CIFARA CETVOROCIFRENOG BROJA
//napisi program koji ucitava cetvorocifreni broj i ispisuje zbir svih cifara tog broja

const sumacf = (broj)=>{
    // let zbir=0;
    // let unos = 1234;
    // const unos = +prompt("unesite cetvorocifreni broj:");
    if (isNaN(broj)|| (broj < 1000 || broj > 9999)){
        return "niste uneli vazuci broj."
    }
    else{
        const jedinice = broj % 10;
        // const desetice = (broj % 100) / 10;
        const desetice = Math.trunc((broj % 100) / 10);
        const stotine = Math.trunc((broj % 1000) / 100);
        const hiljade = Math.trunc(broj / 1000);
        return jedinice + desetice + stotine + hiljade;
        }
}
console.log(sumacf(1234));

