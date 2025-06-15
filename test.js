// const v = require('./index');
const v = require("@sparky002/validator-lite")

console.log("Email:", v.isEmail("sparky@email.com"));           
console.log("Phone:", v.isPhone("+919876543210"));              
console.log("URL:", v.isURL("https://openai.com"));             
console.log("Password:", v.isStrongPassword("Aa@123456"));      
console.log("Empty:", v.isEmpty({}));                           
console.log("Numeric:", v.isNumeric("123.45"));                 
console.log("Alpha:", v.isAlpha("hello"));                      
console.log("Alphanumeric:", v.isAlphanumeric("abc123"));       
console.log("Length:", v.isLength("hello", { min: 2, max: 10 })); 
console.log("Date:", v.isDate("2023-06-15"));                   
console.log("Boolean:", v.isBoolean("false"));                  
console.log("JSON:", v.isJSON('{"a":1}'));                      
console.log("UUID:", v.isUUID("550e8400-e29b-41d4-a716-446655440000")); 
console.log("Hex Color:", v.isHexColor("#FF00FF"));             
console.log("IP:", v.isIP("192.168.1.1"));                       
console.log("Credit Card:", v.isCreditCard("4111 1111 1111 1111")); 
console.log("PIN Code:", v.isIndianPIN("110001"));              
console.log("PAN:", v.isPAN("ABCDE1234F"));                     
