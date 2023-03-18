const messages=[];
const event_name="Birthday";
const names=["Jack","Diane","Fiona"];
function writeCards(names,event_name){
    for(let i=0; i<=2; i++){
        console.log(`Thankyou,${names[i]},for the wonderful,${event_name}gift`);
        
    }
   
}
messages.push(writeCards(names,event_name));
    return messages;

    function countdown(number){
        while(number>0){
console.log(number--);
        }
    }
 
