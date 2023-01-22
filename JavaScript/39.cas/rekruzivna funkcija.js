// REKRUZIVNA funkcija poziva izvrsenje same sebe unutar funkcije
// efekat petlje mozemo postici rekruzivnom funkcijom

//ispisati brojeve od 10 do 1
for(let i=10; i>=1;i--){
    console.log(i)
}
const ispisivanje=(n)=>{
    console.log(n)
    if(n-1>0){
        ispisivanje(n-1)
    }
}
ispisivanje(10);


