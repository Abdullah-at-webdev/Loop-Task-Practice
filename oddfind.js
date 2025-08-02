let num = 61;
let oddNum;
while ( num < 100){
    oddNum = num++;
    if(num % 2 !== 0){
        continue;
    }
    console.log(oddNum);
}

// You can do it another way
console.log(' Here is another model');
for( i=60; i<100; i=i+1){
    if(i % 2 ===0){
        continue;
    }
    console.log(i);
}