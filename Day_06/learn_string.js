//Program to reverse a string in javascript
let str="Fakiha"; //declare the string
let revstr="";   // declare and empty string to store the reversed string

//for loop to reverse the string
for (i=str.length-1;i>=0;i--){
    revstr=revstr+str[i];
}
console.log(revstr);
