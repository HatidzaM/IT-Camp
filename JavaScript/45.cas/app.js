//JOS JEDAN  NACIN PRAVLJENJA OBJEKTA

const objectFunctions = {
    incrementScore: function(){
        this.score += 1
    }
}

function createUser(firstName, lastName, score){
    const newUser = Object.create(objectFunctions)
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.score = score
    return newUser
}

const tarik = createUser("tarik", "ibrovic", 16);
console.log(tarik);

tarik.incrementScore();
console.log(tarik);