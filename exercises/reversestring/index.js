// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";

  for (let i = 0; i <  str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }
