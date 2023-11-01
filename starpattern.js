// let a =5;
// str=""
// for(i=1;i<=a;i++){
//     for(j=1;j<=i;j++){
//         str+=j
//     }
//     str+="\n"
// }
// console.log(str)


// let a =5;
// str=""
// for(i=0;i<a;i++){
//     for(j=0;j<a-i;j++){
//         str+="*"

//     }
//     str+="\n"
// }
// console.log(str)



// for(i=10;i>1;i--){
//     console.log(i)
// }



let i, j, k;
str = ""
for (i = 1; i <= 5; i++) {
    for(k=1;k<=5-i;k++){
        console.log(" ")
    }
    for (j = 1; j <= i; j++) {
        str += "*"
    }
    str+="\n"

}
console.log(str)
