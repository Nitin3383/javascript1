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



// let i, j, k;
// str = ""
// for (i = 1; i <= 5; i++) {
//     for(k=1;k<=5-i;k++){
//         console.log(" ")
//     }
//     for (j = 1; j <= i; j++) {
//         str += "*"
//     }
//     str+="\n"

// }
// console.log(str)



// let n=3;
// str = ""
// for (i = 0; i < n; i++) {
//     for (j = 0; j <n-i; j++){
//         str += "*"
//     }
//     str+="\n"
// }
// console.log(str)




// let n = 3
// str = ""
// for (i = 0; i < n; i++) {
//     for (j = 0; j < n - i; j++) {
//         str += "*"
//     }
//     str += "\n"
// }

// console.log(str)


// let a=5

// str=""
// for(i=1;i<=a;i++){
//     for(j=1;j<a-i;j++){
//         str="";

//     }
//     for(k=0;k<2*i-1;k++){
//         str+="*"
//     }
//     str+="\n"

// }
// console.log(str)



let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string)




// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let k = 0; k < n - i; k++) {
//     string += " ";
//   }
//   for (let j = 1; j <= i; j++)
//     string += (i + j) % 2

//   string += "\n"
// }




// console.log(string)

let a = 5;
string = ""
for (let i = 0; i <= a; i++) {
  for (let k = 0; k < a - i; k++) {

    string += " "
  }



  for (let j = 1; j <= i; j++) {

    string += (j+1)%2
  }



  string += "\n"
}
  console.log(string)




// Diamond Pattern
// var i, j, k, l;
// for (i = 1; i < 5; i++) {
//   for (k = 1; k <= 5 - i; k++) {
//     document.write("&nbsp;&nbsp")
//   }


// for (j = 1; j < i; j++) {
//   document.write("*");
// }
// for (l=1;l<=i;l++){
//   document.write("*")
// }
// document.write("<br/>")
// }


