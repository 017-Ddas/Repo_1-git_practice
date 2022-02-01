// 1.ways to print in js
// console.log("Hello World");
// alert("me");
document.write("writes in document");


// 2.javascript console api
console.log("Hello World");
// console.warn("this is a warning");
// console.error("This is an error");
console.assert(4 == (6 - 2));

// 3.Javascript Variable
// What are variable? containers to store data variables
/*multi
line
comment*/

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// datatype in javascript
// strings
var str1 = "thia a string";
var str2 = 'this is also a string';
// objects 
var marks = {
    ravi: 90,
    shubham: 90,
    dev_das: 100
}
// console.log(marks);   
// boolean

var a1 = true;
var b1 = false;
// console.log(a, b)


// var und = undefined;
var und;                     //any variable which is not inisizlized is undefined
// console.log(undefined)
// console.log(und)


var n = null;
// console.log(n);

/*at a very high level there are two types of data types
primitive a.undefined 
          b. null
          c.number
          d.string
          e.boolean
          f.symbol
reference  a.objects
           b.arrays*/

// arrays are collection of elements
var arr = [1, 2, 3, 4, 5]
console.log(arr);
// console.log(arr[1]);

// operators
// var a = 84;
// var b = 42;
// console.log("The value of a  + b is", a + b);
// console.log("The value of a  - b is", a - b);
// console.log("The value of a  * b is", a * b);
// console.log("The value of a  / b is", a / b);

// comparison operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x < y);

// loigcal operators 
console.log(true && true);
console.log(true && false);
console.log(true || false);

function avg(a, b) {
    return (a + b) / 2;

}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);


var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function (element)
// {
//     console.log(element);
// })

// const ac = 0;
// ac = ac + 1;
let j = 0;    //block level scope
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
    }
    console.log(arr[i]);
}

