let odd = 51;
let oddSum = 0;
while(odd <= 85){
    // odd += 1;
    odd++;
    oddSum = oddSum + odd;
    if(odd % 2 !== 0){
        continue;
    }
    console.log(odd);
    console.log('Now see their sum in action', oddSum)
}