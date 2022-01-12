module.exports = function toReadable (number) {
    let result;
    let arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number >= 0 && number <= 19){
       result = arrUnits[number];
    } else if(number >= 20 && number <= 99){
        if(number%10 === 0){
        result = arrTens[Math.floor(number/10)];  
        } else {
        result = arrTens[Math.floor(number/10)] + ' ' + arrUnits[number%10];
    }
    } else if(number >= 100 && number < 1000){
        if(number%100/10 === 0 && number%100%10 === 0){
        result = arrUnits[Math.floor(number/100)] + ' hundred'; 
        } else if(Math.floor(number%100 < 20)){
        result = arrUnits[Math.floor(number/100)] + ' hundred ' + arrUnits[number%100];
        } else if((number%100/10) >= 2 && number%100%10 === 0){
        result = arrUnits[Math.floor(number/100)] + ' hundred ' + arrTens[Math.floor((number%100)/10)];
        } else if((number%100/10) >= 2){
        result = arrUnits[Math.floor(number/100)] + ' hundred ' + arrTens[Math.floor((number%100)/10)] + ' ' + arrUnits[number%100%10];
        }
    }
    return result;
}
