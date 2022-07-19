const fibonacci = function(num) {
if(+num<0)return 'OOPS';
let first =1;
let second=1;
let i=1;
let third=0;
while(i<+num){
   
     third= first+second;
     first=second;
     second=third;
     i++;
}
return first;
};

// Do not edit below this line
module.exports = fibonacci;
