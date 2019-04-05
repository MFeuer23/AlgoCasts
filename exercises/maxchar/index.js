// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hashmap = {};
  let max = 0;
  let maxChar = "";

   for (let i = 0; i < str.length; i++) {
     hashmap[str[i]] = hashmap[str[i]] + 1 || 1
   }

   for (let key in hashmap) {
     if (hashmap[key] > max) {
       max = hashmap[key];
       maxChar = key;
     }
   }

   return maxChar;
}

module.exports = maxChar;
