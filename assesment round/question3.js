let str = 'virat sachin dhoni virat rahul virat rahul sachin '; 
let word = "sachin"; 
let temp = str.split(" "); 
let count = 0;  
for (let i = 0; i < temp.length; i++) { 
   if (word === temp[i])  
   count++; 
} 
console.log(`${word} = ${count}`)

//or

// let str = "virat sachin dhoni virat rahul virat rahul sachin";
// let arr = str.split(" ");
// let map = new Map();
// for( let i=0;i<arr.length;i++)
// {
//   if(map.has(arr[i]))
//   {
//     map.set(arr[i],map.get(arr[i])+1)
//   }
//   else 
//   {
//     map.set(arr[i],1)
//   }
// }

// console.log(map)