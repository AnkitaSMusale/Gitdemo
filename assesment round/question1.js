
let str = "C1e7h3P4k11"
function result(str) 
{
  let res = ""
  let stack = [] ; 
  for ( let i=0;i<str.length;i++) 
  {
    if(isNaN(str[i]))
    {
      stack.push(str[i])
    }
    if(!isNaN(str[i]))
    {
      if(isNaN(str[i+1]))
      {
        for( let j=0;j<str[i];j++)
      {
        res += stack[0];
      }
      stack.pop();
      }
      else if(!isNaN(str[i+1]))
      {
        for( let j=0;j<str[i]+str[i+1];j++)
      {
        res += stack[0];
      }
      stack.pop();
      i++;
      
    }
  }
  }
  return res;
}


console.log(result(str))