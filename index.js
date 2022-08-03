// Code your solutions in this file
for(let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(nameArray, eventName){
    let newArray = [];
    for(let i = 0; i < nameArray.length; i++){
        newArray[i]=`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArray;
}

function countDown(m){
    if(m > 0){
        while(m >=0 ){
            console.log(m);
            --m;
        }
    }
    else{
        /*DO NOTHING*/
    }
}