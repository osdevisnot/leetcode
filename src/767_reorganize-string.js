// https://leetcode.com/problems/reorganize-string/
let reorganizeString = (str) => {
  // build a frequency map for characters in S - max 26 entries...
  let map = {};
  for (let idx = 0, len = str.length; idx < len; idx++) {
    let char = str[idx];
    map[char] = (map[char] || 0) + 1;
  }
  // sorted array based on frequency count - max 26 entries => O(1) => constant time
  let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);

  // fast path early return if a count is (N+1) / 2 for first item
  let max = (str.length + 1) / 2;
  if (map[sorted[0]] > max) return '';

  // interleave characters
  let result = [];
  let position = 0;
  for (let idx = 0, len = sorted.length; idx < len; idx++) {
    let char = sorted[idx];
    let frequency = map[char];
    for (let j = 0; j < frequency; j++) {
      // rewind pointer to 1 when we overflow odd indexes...
      // note: we don't have enough characters to overflow again
      if (position >= str.length) position = 1;
      result[position] = char;
      position += 2;
    }
  }
  return result.join('');
};

// console.log(reorganizeString('aab'));
// console.log(reorganizeString('vvvlo'));
// console.log(reorganizeString('aaab'));
console.log(
  reorganizeString(
    'tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao',
  ),
);
