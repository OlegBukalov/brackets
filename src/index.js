module.exports = function check(str, bracketsConfig) {
  let configStr = '', tempStr = '';
  bracketsConfig.forEach(element => {
      configStr += element.join('');
  });
  for (let i = 0; i < str.length; i++) {
      if (configStr.indexOf(str[i]) % 2 == 0) {
          if (tempStr[tempStr.length-1] == str[i] && configStr[configStr.indexOf(str[i])] == configStr[configStr.indexOf(str[i])+1]) {
              tempStr = tempStr.slice(0, -1);
              console.log(tempStr);
          }
          else {
              tempStr += str[i];
              console.log(tempStr);
          }
      }
      else {
          if (configStr.indexOf(tempStr[tempStr.length-1]) == configStr.indexOf(str[i])-1) {
              tempStr = tempStr.slice(0, -1);
              console.log(tempStr);
          }
          else {
              return false;
          }
      }
  }
  return tempStr.length > 0 ? false: true;
}