//Display sum of all the odd numbers from 91 to 129.
let num = 91;
let sum = 0;
while(num <= 129){
    sum = sum + num;
    num++;
    if(num % 2 ===0){
        continue;
    }
    console.log(sum);
}

// You Can do it on for loop too
console.log('We can do it with for loop style not');
let sumForI = 1;
for(let i = 91; i<=129 ; i=i+1){
    sumForI = sumForI + i;
    if(i % 2 ===0){
        continue;
    }
    console.log(sumForI);
}
