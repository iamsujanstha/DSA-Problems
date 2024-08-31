let words = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
  thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90
}

let mult = { hundred: 100, thousand: 1000, million: 1000000 }

function numberToWords(num) {
  if (num === 0) return "zero";

  let result = [];

  function convertBelowThousand(n) {
    if (n >= 100) {
      const hundreds = Math.floor(n / 100);
      result.push(Object.keys(words).find(key => words[key] === hundreds));
      result.push("hundred");
      n %= 100;
    }

    if (n > 0) {
      if (n <= 20) {
        result.push(Object.keys(words).find(key => words[key] === n));
      } else {
        const tens = Math.floor(n / 10) * 10;
        result.push(Object.keys(words).find(key => words[key] === tens));
        const units = n % 10;
        if (units > 0) {
          result.push(Object.keys(words).find(key => words[key] === units));
        }
      }
    }
  }

  if (num >= mult.million) {
    const millions = Math.floor(num / mult.million);
    convertBelowThousand(millions);
    result.push("million");
    num %= mult.million;
  }

  if (num >= mult.thousand) {
    const thousands = Math.floor(num / mult.thousand);
    convertBelowThousand(thousands);
    result.push("thousand");
    num %= mult.thousand;
  }

  convertBelowThousand(num);

  return result.join(" ");
}

console.log(numberToWords(783919));
