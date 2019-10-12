module.exports = function check(str, bracketsConfig) {
  var round_c_r = 0;
  var round_c_l = 0;
  var rect_c_r = 0;
  var rect_c_l = 0;
  var br_c_r = 0;
  var br_c_l = 0;
  var st_c = 0;
  for(let i = 0; i<str.length;i++){
    if(str[i]=='('){
      round_c_l++;
    }
    if(str[i]==')'){
      round_c_r++;
    }
    if(str[i]=='['){
      rect_c_l++;
    }
    if(str[i]==']'){
      rect_c_r++;
    }
    if(str[i]=='{'){
      br_c_l++;
    }
    
    if(str[i]=='}'){
      br_c_r++;
    }
    if(str[i]=='|'){
      st_c++;
    }
    
    if(round_c_r>round_c_l) return false;
    if(rect_c_r>rect_c_l) return false;
    if(br_c_r>br_c_l) return false;

  }
  
  if(round_c_l!=round_c_r){
    return false;
  }
  if(rect_c_l!=rect_c_r){
    return false;
  }
  if(br_c_l!=br_c_r){
    return false;
  }
  if(st_c%2!=0){
    return false;
  }
  
  
  return true;
  // your solution
}
