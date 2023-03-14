// const getUsers =()=> {
//  return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data)=>console.log(data))
//     .catch((error) => console.log(error.message));
//     .finally(()=> setTimeout(getUsers, 1000*60*5))// da se refresuje svakih 5 minuta
// }
// getUsers();


//asinhrona funkcija za prikupljanje podataka sa servera
//user sa datim id-jem
const getUsers = async(id)=>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const users = await data.json();
}
getUsers(5);

// async function getUsers(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await data.json();
// }


//prikupiti sve usere a nakon toga vratiti json sa svim userima koji su prikazani sa odredjenim svojstvima:
// id, name, userneame, email(malim slovima), telefon, adresa sa svostvima street, suite

const getMapUsers = async(id)=>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const users = await data.json();
    const mapUsers = users.map((user)=>{
        return{
            id: user.id,
            name : user.name,
            username: user.username,
            email: user.email.toLowerCase(),
            phone: user.phone,
            adress:{
                srteet: user.adress.srteet,
                suit: user.adress.suit
            }
        }
    })
    return mapUsers
}
getMapUsers()
.then((data)=>console.log(data))
.catch((error)=>console.log(error));