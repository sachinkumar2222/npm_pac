const v = require('./index');

console.log("Email:", v.isEmail("sparky@email.com"));           // true
console.log("Phone:", v.isPhone("+919876543210"));              // true
console.log("URL:", v.isURL("https://openai.com"));             // true
console.log("Password:", v.isStrongPassword("Aa@123456"));      // true
console.log("Empty:", v.isEmpty({}));                           // true
console.log("Numeric:", v.isNumeric("123.45"));                 // true
console.log("Alpha:", v.isAlpha("hello"));                      // true
console.log("Alphanumeric:", v.isAlphanumeric("abc123"));       // true
console.log("Length:", v.isLength("hello", { min: 2, max: 10 })); // true
console.log("Date:", v.isDate("2023-06-15"));                   // true
console.log("Boolean:", v.isBoolean("false"));                  // true
console.log("JSON:", v.isJSON('{"a":1}'));                      // true
console.log("UUID:", v.isUUID("550e8400-e29b-41d4-a716-446655440000")); // true
console.log("Hex Color:", v.isHexColor("#FF00FF"));             // true
console.log("IP:", v.isIP("192.168.1.1"));                       // true
console.log("Credit Card:", v.isCreditCard("4111 1111 1111 1111")); // true
console.log("PIN Code:", v.isIndianPIN("110001"));              // true
console.log("PAN:", v.isPAN("ABCDE1234F"));                     // true
