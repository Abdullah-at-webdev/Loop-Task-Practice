let number = 1;
let square;
// while (number <100){
    
//     square = Math.sqrt(number);
//     number = number+1;
//     if(square % 2 === 0){
//         break;
//     }
//     // if(square % 3 === 0){
//     //     break;
//     // }
//     console.log(number);
// }

for (let i = 3; i<100; i++){
    square = Math.sqrt(i);
    if ( square % 4 === 0){
        break;
    }
    console.log(i);
}