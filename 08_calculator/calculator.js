const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(args) {
	return args.reduce((total,elements)=> total+elements,0);
  
};

const multiply = function(args) {
return args.reduce((product,element)=> product*element,1);
};

const power = function(a,b) {
return a**b;
};

const factorial = function(num) {
  // if(num===0 )return 1;
  // let product =1;
  // for(let i= num; i>=1; i--){
  //  product *= i;
  // }
  // return product;
  if(num===0)return 1;
  let next= factorial(num-1);
  return num*next;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
