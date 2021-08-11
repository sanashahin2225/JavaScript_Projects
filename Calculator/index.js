//1.  JavaScript Print Ways
// console.log("Hello World");
// document.write("THis is document write");
// alert("Hello Sana");

// 2. JavaScript Console Api
// console.warn("warning");
// console.error("Error");
// console.clear();
// console.assert(4==6);

//3. Variables in JavaScript
// var number1 = 34;
// var number2  = 56;
// console.log(number1+number2);

//4. Data Types in JavaScript
// var str1 = 'This is type one string';
// var str2 = "This is type 2 string";
// var num2 = 22.5;
// var num1 = 146;
// var marks = {
//     ravi: 34,
//     harry: 45,
// }
// console.log(marks['ravi']);

// var a = true;
// var b = false;
// console.log(a,b)

// var und = undefined;  //var und is same as var und = undefined
// console.log(und)

// var n = null;
// console.log(n)

//At a very high level Javascript has two types of data types: 
//1. Primitive data type -------- (number, string, boolean,undefined,null,symbol) 
//2. Reference Data Type ------- arrays and objects

// var arr = [1,2,3,'text',4,5]
// console.log(arr)
// console.log(arr[0])

function display(val){
    x = document.getElementById('textArea').value+=val
    console.log(x)
}

function output(){
    let x = document.getElementById('textArea').value
    let y = eval(x)
    document.getElementById('textArea').value = y
}

function clr(){
    document.getElementById('textArea').value = ''
}