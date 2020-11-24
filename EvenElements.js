var arr = [3,4,2,6,0,10,12,14,2];

console.log("Program to find number of even elements");

var count = 0;

for(let i=0;i<arr.length;i++){

if(arr[i]%2==0){

count++;

}

}
console.log("The number of even elements are : " +count);