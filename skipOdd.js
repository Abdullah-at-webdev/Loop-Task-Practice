let num = 1;
while(num<=40){
    num++;
    if(num % 2 !== 0) //!== is meaning not equal to Zero.
        {
        continue;
    }
    console.log(num);
}

//If i want to skip all the even numbers
let even;
for(i=1; i<=40; i=i+1){
    if(i%2===0){
        continue;
    }
    console.log(i);
}