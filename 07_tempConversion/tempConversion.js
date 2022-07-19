const ftoc = function(F) {
  if(F ===32) return 0;
 else return parseFloat(((F-32)*5/9).toFixed(1)); 
 
};

const ctof = function(C) {
return parseFloat(((C*9/5)+32).toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
