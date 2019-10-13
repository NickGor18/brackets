module.exports = function check(str, bracketsConfig) {
  var arr = [];
  var flag;
  arr.push(str.charAt(0));
  for(let i = 1; i < str.length; i++)
  {
  flag = 1;
  for (let brackets of bracketsConfig)
  {
  if ((arr[arr.length - 1] === brackets[0]) && (str.charAt(i) === brackets[1]))
  {
  arr.pop();
  flag = 0;
  break;
  }
  }
  if (flag)
  {
  arr.push(str.charAt(i));
  }
  }
  if(arr.length===0)
  {
  return 1;
  }
  else
  {
  return 0;
  }
  }
