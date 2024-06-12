// upper-case for harcoded values.
const COLOR_BLUE = "#00F";

// declaration and assignment
let admin;
let name = "John";
admin = name;
console.log(admin);

// naming
let ourPlanetName = "Earth";
let currentUserName = "User";

// extra large or small numbers
let x = 1234e5;
console.log(x);
x = 1234e-5;
console.log(x);

// integers are accurate upto 15 digits
x = 123456789012345;
console.log(x);
x = 1234567890123456;
console.log(x);

//floating pt solution
x = 0.1 + 0.2;
console.log(x);
x = (0.1 * 10 + 0.2 * 10) / 10;
console.log(x);

// 64 bit numbers 64-bit IEEE 754 double Just "Number" not float int double
// 52 (0-51) - fraction mantissa
// 11 (52-62) - exponent
// 1 sign

// + sign
x = 1;
let y = 2;
let z = "3";
console.log(x + y + ".");
console.log("x+y" + x + y);
console.log(x + y + z);
console.log(x + y);
y = "i";
console.log(x + y);
console.log(y + x);
x = "h";
console.log(x + y);

// NaN not a number
x = 100 / "Apple";
console.log(x);
isNaN(x);
typeof NaN;

// Infinity -Infinity is different from NaN
typeof Infinity;
x = 2 / 0;
console.log(x);

// 0x prefix for hexadecimal

// Number objects: slow down the execution speed
y = new Number(123);

// Comparing two JavaScript objects always returns false.

// some weird behaviours
console.log(13 + !0); // 14
console.log("13" + !0); // '13true'

// Array
let arr = [1, 2, 3, 4, 5, "hello"];
console.log(arr);
arr[3] = "hi";
console.log(arr);
arr.push("World");
console.log(arr);
console.log(arr.length);
arr.unshift("first");
console.log(arr);
console.log(arr.shift);
console.log(arr);
console.log(arr.pop());
console.log(arr.join(","));
console.log(arr.slice(1, 4)); //1include 4exclude

// Remove 4 elements starting from index 2, and insert there strings
// "hi","wr" and "ld"; return removed subarray
console.log(arr);
console.log(arr.splice(2, 4, "hi", "wr", "ld"));
console.log(arr);
var myObj = { key1: "Hello", key2: "World" };

// objects
const obj = {
  property: "val",
  other: 70,
  etc: function () {
    //something
  },
};
obj.property;
obj["etc"];

// constructor for objects
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player("steve", "X");
console.log(player.name); // 'steve'
