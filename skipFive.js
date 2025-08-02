//display odd number from 55 to 85 and skip the numbers divisible by 5.
let number = 55;
while(number <=84){
    number++;
    if(number % 5 === 0){
        continue;
    }
    console.log('None of the numbers are dividable by 5')
    console.log(number);
}

//we can only use the number dividable by 5 only

for(i=55; i<=85; i=i+1){
    if(i % 5 !== 0){
        continue;
    }
    console.log('Only numbers which are dividable by 5 only',i);
}