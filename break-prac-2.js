let number = 0;
let sum = 0;
while(number<200){
    number++;
    sum= sum + number;
    console.log(number, sum)
    if(sum >=100){
        break;
    }
}

let sum2 =1;
for(i=0; i<200; i=i+1){
    sum2 +=i;
    if(sum2 >=100){
        break;
    } 
    console.log(i, sum);
}