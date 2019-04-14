// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

//helper function
function clean(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;

// ALTERNATE SOLUTION
// function anagrams(stringA, stringB) {
//   let hashmapA = {}
//   let hashmapB = {}
//   let a = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let b = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   if (a.length !== b.length) {
//     return false
//   }
//
//   for (i = 0; i < a.length; i++) {
//      hashmapA[a[i]] = hashmapA[a[i]] + 1 || 1;
//      hashmapB[b[i]] = hashmapB[b[i]] + 1 || 1;
//   }
//
//   for (key in hashmapA) {
//     if (!hashmapB[key] || hashmapB[key] !== hashmapA[key]) {
//       return false
//     }
//   }
//
//   return true
// }

// ALTERNATE SOLUTION with HELPER function
// function anagrams(stringA, stringB) {
//   let hashmapA = buildHashmap(stringA)
//   let hashmapB = buildHashmap(stringB)
//
//   if (Object.keys(hashmapA).length !== Object.keys(hashmapB).length) {
//     return false
//   }
//
//   for (let key in hashmapA) {
//     if (hashmapA[key] !== hashmapB[key]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// // Helper function
// function buildHashmap(str) {
//   const hashmap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     hashmap[char] = hashmap[char] + 1 || 1
//   }
//   return hashmap
// }
