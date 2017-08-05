module.exports = function(headers){
  //a little verbose, but you get the point--get em, strip out the non-essentials and return.
  var userAgentStr = headers['user-agent'];
  var ipStr=headers['x-forwarded-for'];  
  var langStr= headers['accept-language'];  
  
  var IP=firstCSV(ipStr);  
  var language=(firstCSV(langStr));
  var userAgent=(inParens(userAgentStr));   
  
  return JSON.stringify({"ipaddress":IP,"language":language,"os": userAgent});
  
  
  
  function firstCSV(str){
    var comma=str.indexOf(",");
    return str.slice(0,comma);     
  }
  
  function inParens(str){
    var open=str.indexOf("(");
    var close=str.indexOf(")");
    return str.slice(open+1, close)
    
    }
  
  
  
  }

 