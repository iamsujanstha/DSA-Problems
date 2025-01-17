//Compare two string and find the greater character from 1 and compare between two strings
//if s1 then 1 or s2 then 2

//input ===> s1 = "my&friend&Paul has heavy hats! &"  s2 = "my friend John has many many friends &"

//output ====> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

function mixString(str1, str2) {
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"]

  return alphabets.map((char) => {
    let s1 = [...str1].filter((ch) => char === ch).length
    let s2 = [...str2].filter(ch => char === ch).length
    let maxCount = Math.max(s1, s2);

    return {
      char: char,
      count: maxCount,
      src: maxCount > s1 ? '2' : maxCount > s2 ? '1' : '='
    }
  }).filter(val => val.count > 1).sort((a, b) => b.count - a.count).map((item) => `${item.src}:${item.char.repeat(item.count)}`).join('/')
}


console.log(mixString("my&friend&Paul has heavy hats! &", "my friend John has many many friends &"))