const findTheOldest = function(arr) {
return arr.sort((a,b)=>{
if(a.hasOwnProperty('yearOfDeath')===false){
 return (new Date().getFullYear()-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)?-1:1;
}
if(b.hasOwnProperty('yearOfDeath')===false){
    return (a.yearOfDeath-a.yearOfBirth)>(new Date().getFullYear()-b.yearOfBirth)?-1:1;
   }
return (a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)?-1:1;

})[0];

};

// Do not edit below this line
module.exports = findTheOldest;
