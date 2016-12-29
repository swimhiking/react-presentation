///ES5
function fun(n,o){
	console.log(n);
	return{
		fun: function(m){
			return fun(m,n);
        }
    }
}

var a = fun(0).fun(1).fun(2).fun(3);


//example1 let
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); 

//let --- IIFE could replaced:
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();
}());


//Default value example
var [x = 1] = [undefined];

function bar(x = y, y = 2) {
  return [x, y];
}

bar(); 

//Destructuring , Only in assignment non-Model part can use ()
const [a, b, c, d, e] = 'hello';
[x, y] = [y, x];

var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);

//Reduce
let l = [2,3,4,5].reduce((a,b) =>a*b);
//map: iterator

