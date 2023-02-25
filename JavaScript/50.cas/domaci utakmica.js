const gameEvents = new Map([]);

function events(mapa){
    const events = [];
    const entries = mapa.entries();
    for((key,value) in entries){
        console.log(key)
    }
    return entries;
}
