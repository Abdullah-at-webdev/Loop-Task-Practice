//Generate a multiplication table for number 9

let singleNumber = 9;
let useMultiply = 1;
while(singleNumber <= 90 && useMultiply <=10){
    if(singleNumber % 9 !==0){
        singleNumber++;
        continue;
    }
    console.log(`${useMultiply} X 9:`, singleNumber);
    singleNumber++;
    useMultiply++;
}
console.log(' ')
console.log(' ')

// Try another way of doing it 
console.log('We Are good to try out with the for loop with the single line on the work')
console.log(' ')

for ( let multliply = 1; multliply<=10; multliply++){
    console.log(`${multliply} X 9 = ${multliply * 9}`);
}