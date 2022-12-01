//ispisati prvih 10 brojeva u consoli jedan ispod drugog

//petlja(loop) - nacin da se neki kod izvrsi uz odredjene uslove vise puta

for(let i=1; i<=10; i++){
    console.log(i)}

//ispisati brojeve od 1 do 10 izuzev broja 2 i broja 5

//1.nacin
for(let i=1; i<11; i++){
    if(i!==2 && i!==5){
        console.log(i)
    }
}

// continue keyword - ako se nadje u nekoj iteraciji zapravo oznacava da se ta iteracija zanemari i da se nastavi dalje sa sledecom
//2.nacin
for(let i=1; i<11; i++){
    if(i===2 || i===5){
        continue
    }
    else{
        console.log(i)
    }
}

//ispisati sve brojeve 1-10. Ako je neki broj deljiv sa 7 neka se prekine petlja

// break keyword - od tog trenutka for petlja prestaje sa radom
for( let i=1; i<11; i++){
    if(i%7===0){
        break
    }
    else{
        console.log(i)
    }
}


//ispisati parne brojeve 1-20 
//1.nacin
for( let i=1; i<21; i++){
    if(i%2===0){
        console.log(i)
    }
}
//2.nacin
for( let i=2; i<21; i+=2){
    console.log(i)
}