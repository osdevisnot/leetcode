// https://leetcode.com/problems/goat-latin/
let VOVELS = { a: 1, e: 1, i: 1, o: 1, u: 1 };
let toGoatLatin = (str) => {
  let sentence = '';
  let words = str.split(/\W/);
  for (let idx = 0, len = words.length; idx < len; idx++) {
    let word = words[idx];
    let char = word[0].toLowerCase();
    if (!(char in VOVELS)) {
      word = word.slice(1) + word[0];
    }
    word += 'ma' + 'a'.repeat(idx + 1);
    sentence += word + ' ';
  }
  return sentence.trim();
};
