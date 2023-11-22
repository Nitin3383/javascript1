// reverse method(mutate the origial array)

// let abc=["a","b","c","d"]
// console.log(abc.reverse())


// concat

// let a=[1,2,3,4,5]
// console.log(a.concat(abc))



// join (It will convert the array into the string).

// let a=[1,2,34,5]
// console.log(a.join("@"))


// slice method:-
// usedto extract part of the array.
// array.slice(startindex,lastindex(excluded))
// return new array of extracted elements.

// let abc=[1,2,3,4,5,6]
// let slices=abc.slice(1,3)  //1to 2 
// console.log(slices)



// splice method

// used to add new elements into the arr
// array.splice(index,deleteValue,valueTo be added)
// return deleted items in the form of array.

// let num=[1,2,3,4,5]
// console.log(num.splice(1,2,3))
// console.log(num)

// at method:-
// let name=[1,2,3,44,56]
// console.log(name.at(-2))


// map method:-

// create new array from original array by applying.
// transformation function.


// let salaries=[3000,4000,5000,6000]
// let newslaries=salaries.map(salary=>{
//     let incsalary=salary/2
//     return salary+incsalary
// })
// console.log(newslaries)
// length of new array is always equal to new array.
// let abc=[1,2,3,4,5]
// let numbers=abc.map()
// console.log(map*2)


// filter method:-
// filter method (used to perform on Array.)

// let gg=[1,2,3,4,4,4,5,2]
// let fliterarray=gg.filter(g=>{
//     if(g=="4" || g=="2"){
//         return g
//     }

// })
// console.log(fliterarray)


// reduce method:-
// run reducer function for each array Element.
// array.reduce00(function(total,currentvalue),initialValue)
// it return single value.
// sum of all elements using reduce method.


// length:-

// let name1=[1,2,3,4,5,7]
// console.log(name1.length)


// string method:-
// let str=["nitin","red","apple"]
// console.log(str.toString())

// pop method :-it removes the last element from an array.
// let abc=["ab","gg","ss"]
// console.log(abc.pop())
// console.log(abc)


// push method:-it adds the last element from an array:-

// let abc=["abc","gg","cc"]
// console.log(abc.push(34))
// console.log(abc)


// shift method:- it removes the first elemnt of an element:-
// let name=[33,2,3,4,5]
// console.log(name.shift())


// unshift method:-it adds an element to the array a the begining.
// const color=["red","green","blue"]
// console.log(color.unshift("2"))
// console.log(color)




// filter method:-
const arr=[1,2,3,4,5,6]
function odd(x){
    return x%2;
}
const output=arr.filter(odd)

console.log(output)