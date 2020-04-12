// https://leetcode.com/problems/integer-to-english-words/
var numberToWords = function (num) {
  if (num === 0) return "Zero";
  // prettier-ignore
  let unit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  let tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let exp = ["", " Thousand", " Million", " Billion"];

  let threeToWord = (sub) => {
    let word = "";
    if (sub > 99) {
      word = unit[Math.floor(sub / 100)] + " Hundred ";
      sub = sub % 100;
    }
    if (sub > 19) {
      word += tens[Math.floor(sub / 10)] + " ";
      sub = sub % 10;
    }
    word += unit[sub];
    return word.trim();
  };

  let translate = [];

  for (let i = 0; num; i++, num = Math.floor(num / 1000)) {
    let three = num % 1000;
    let word = threeToWord(three);
    if (word) {
      translate.unshift(word + exp[i]);
    }
  }

  return translate.join(" ").trim();
};
