// function display()
// {
//     console.log("Hii")
// }

// display();
// display();

// console.log("first")
// console.log("second")
// function abc(){
//     console.log("okk")
// }
// console.log("third")
// abc()



// function arguments

// function display(a,b){parameters
    // console.log(a+b);
// }
// display(110,12)arguments



// function without third argument

// function display(a,b,c){
//     console.log(a,b,c)

// }
// display(10,22)


// Arguments objects:-The argument objects contains an array of the arguments used when the function was called.
// The obj contains an entry for each argument passed to the function.The first entry index start at 0.The argument obj is not array.
// It is similar to an array but does not have array property except length.


// function dis(name1,name2){
//     console.log(arguments[0]) ;
//     console.log(arguments[1]);
// }
// dis("hii","nitin)


// Many Function Arguments:-
// If a function is  called with too many arguments can be 
// reached using the arguments object which is a built in.

// function sum(var1,var2,varc){
//     console.log(var1 ,var2,varc)
// }
// console.log(10,20,35)


//  Default Parameters:-

// function abc(a,b,c=60){
//     console.log(a,b,c)

// }
// abc(20,200)



// Rest parameters:-  




// return 
// function myname(x,y){
//     return x+y;
// }
// var result=myname(23,45)
// console.log(result)



// function myname(x){
// console.log()
// }
// myname(12);



// abc()

// function abc(){
//     console.log("myname")
// }
// console.log("My Name is Nitin")



// Return Statement:-
// function add(a,b){
//     return (a+b);
// }
// console.log(add(10,54))
// console.log(add(10,84))
// console.log(add(100,54))
// console.log(add(45,54))



// global Variables:-
var a="I am a global variable"

function show(){
    console.log(a)
}
show();

console.log(a)


function disp(){

    console.log(a)
}
disp()