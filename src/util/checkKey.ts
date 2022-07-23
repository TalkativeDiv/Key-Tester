import { isInteger, isString } from "lodash-es";
const specialChars = "[`!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~]/";
/**
 * Checks a type of key pressed using lodash
 * @constructor
 * @returns type
 * @param {any} key - The key we want to check
 */
let checkType = (key: any) => {
  if (key == null) return "not a key";
  if (isInteger(parseFloat(key))) return "integer";
  if (specialChars.split("").some((specialChar) => key.includes(specialChar)))
    return "special";
  if(key.toString().contains("Arrow"))  return "arrow key";
  else if (isString(key.toString())) return "string";
  return;
};

export default checkType;
