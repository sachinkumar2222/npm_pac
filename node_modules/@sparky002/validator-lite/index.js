function isURL(str){
    try{
        new URL(str)
        return true;
    }catch(_){
        return false;
    }
}

function isStrongPassword(str) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
}

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isPhone(str) {
  return /^\+?[0-9]{10,15}$/.test(str);
}

function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

function isEmpty(val) {
  return (
    val == null ||
    (typeof val === "string" && val.trim() === "") ||
    (Array.isArray(val) && val.length === 0) ||
    (typeof val === "object" && Object.keys(val).length === 0)
  );
}

function isNumeric(str) {
  return /^-?\d+(\.\d+)?$/.test(str);
}

function isAlpha(str) {
  return /^[A-Za-z]+$/.test(str);
}

function isAlphanumeric(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

function isLength(str, {min = 0, max = Infinity}){
    return typeof str === "string" && str.length >= min && str.length <= max;
}


function isDate(str) {
  return !isNaN(Date.parse(str));
}

function isBoolean(val) {
  return val === true || val === false || val === 'true' || val === 'false' || val === 0 || val === 1;
}

function isUUID(str) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);
}

function isHexColor(str) {
  return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str);
}

function isIP(str) {
  const ipv4 = /^(25[0-5]|2[0-4]\d|1?\d{1,2})(\.(25[0-5]|2[0-4]\d|1?\d{1,2})){3}$/;
  const ipv6 = /^(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})$/;
  return ipv4.test(str) || ipv6.test(str);
}

function isIndianPIN(str) {
  return /^[1-9][0-9]{5}$/.test(str);
}

function isPAN(str) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(str);
}

function isCreditCard(str) {
  const sanitized = str.replace(/[\s-]/g, '');
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/.test(sanitized);
}


module.exports = {
  isEmail,
  isPhone,
  isURL,
  isStrongPassword,
  isEmpty,
  isNumeric,
  isAlpha,
  isAlphanumeric,
  isLength,
  isDate,
  isBoolean,
  isJSON,
  isUUID,
  isHexColor,
  isIP,
  isCreditCard,
  isIndianPIN,
  isPAN
};
