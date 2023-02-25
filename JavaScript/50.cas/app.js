const zbir=(a,b)=>{
    console.log(a+b)
};

const num = 55;

//JS moduli nam dozvoljavaju da podelimo nas kod u odvojene fajlove
//oslanjaju se na 2 naredbe(staitments):
//1- import
//2- export

//postoje 2 nacina exportovanja neke funkcije, promenljive:
//1- default export    *moze samo jednom*
//2- export

export default zbir;
export { num };