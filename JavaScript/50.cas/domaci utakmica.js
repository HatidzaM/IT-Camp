// function events(mapa){
//     const events = [];
//     const entries = mapa.entries();
//     for((key,value) in entries){
//         console.log(key)
//     }
//     return entries;
// }

/* We have a MAP with log of the events that happened during the game. 
The VALUES are the events themselves,and the KEYS are the minutes in which each event happened a football game has 90 minutes plus some extra time

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from 64 minutes was unfair. So remove this event from the game events log
3. Print the following string to the console: "an event happened, on average, every 9 minutes"
4. Loop over the events and log them to the console, marking whether it's in the first half or the second half (after 45 min) of the game like this:
    [FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
    [17, "Goal"],
    [17, "offside"],
    [36, "Substitution"],
    [47, "Goal"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "Goal"],
    [80, "Goal"],
    [92, "Yellow card"],
]);

function events(someMap) {
    const events = [...new Set(someMap.values())];
    return events;
}

console.log(events(gameEvents));