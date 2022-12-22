//JS MATH OBJECT//
// math object nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima.


//math properties (konstante)// ima ih 8:

//1. Math.E - vraca Ojlerov broj
console.log(Math.E);
//2.Math.PI
console.log(Math.PI);
//3.Math.SQRT2
console.log(Math.SQRT2);
//4.Math.SQRT1_2
console.log(Math.SQRT1_2);
//5.Math.LN2 - vraca vrednost logaritma osnove e broja 2
console.log(Math.LN2);
//6.Math.LN10 - vraca vrednost logaritma osnove e broja 10
console.log(Math.LN10);
//7.Math.LOG2E - vraca vrednost logaritma osnove 2 broja e
console.log(Math.LOG2E);
//8.Math.LOG10E - vraca vrednost logaritma osnove 10 broja e
console.log(Math.LOG10E);


//Math methods//
// Math.method(number)

//number to intiger:
//1.Math.round() - vraca blizi ceo broj
console.log(Math.round(22.33)); //22
//2.Math.ceil() - vraca sledeci ceo broj
console.log(Math.ceil(22.22)); //23
//3.Math.floor() - vraca prethodni ceo broj
console.log(Math.floor(22.22)); //22
//4.Math.trunc() - vraca ceo broj bez decimalnog zapisa
console.log(Math.trunc(22.22)); //22

//Math.sign(number) - vraca -1,0 ili 1 u zavisnosti od toga kog je znaka broj
console.log(Math.sign(22)); //1

//Math.pow(number,power) - vraca number stepenovan na power
console.log(Math.pow(2,3)); //2**3

//Math.sgrt(number) - vraca kvadratni koren broja number
console.log(Math.sqrt(9))

//Math.abs(number) - vraca apsolutnu vrednost broja number
console.log(Math.abs(-5))

//Math.sin(radians) - vraca vrednost sinusa (izmedju -1 i 1). vrdnost u radijanima
console.log(Math.sin(Math.PI/2))
console.log(Math.sin(0))
//Math.cos(radians) - vraca vrednost kosinusa (izmedju -1 i 1). vrdnost u radijanima
console.log(Math.cos(Math.PI/2))
console.log(Math.cos(0))



// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const bliziSto = (num1, num2)=>{
    const razlika1 = Math.abs(100-num1);
    const razlika2 = Math.abs(100-num2);
    const blizibr = razlika1>razlika2 ? num2 : razlika1<razlika2 ? num1 : null;
    if(blizibr===null){
        return `brojevi su jednako udaljeni od broja 100`
    }
    else{
        return `blizi je broj ${blizibr}`
    }
}
console.log(bliziSto(120,89));
console.log(bliziSto(99,101));
console.log(bliziSto(120,-120));