//EX 1 PARSER
class Parser {
  constructor(separator){
    this.separator = separator
  }
  parse(phrase){
    const resArr = []
    const phraseFix = phrase.replace(/\s+/g, '')

    phraseFix.split(`${this.separator}`).map(element => {
      if(element.match(/^\d+$/g)){
        resArr.push(parseInt(element))
      }
    })
    return resArr.join(' ')
  }
}

const sentence = "8790: bonjour le monde:8987:7777:Hello World:    9007";
const p = new Parser(":")
console.log(p.parse(sentence))

// EX2 MAX


const a = 1 
const b = 2
const c = 43

function getMax(a,b,c){
  const resArr = [a,b,c]
  return Math.max(...resArr)
}

//console.log(getMax(a,b,c))

// EX 3 counter

const data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];
function countOccur(arr){
  let result = {}
  for (const element of arr){
    result[element] ? result[element] += 1 : result[element] = 1
  }
  return result
}
//console.log(countOccur(data))


// EX 4 CAESAR CIPHER

function char_rot(shift, letter){
  let res 
  letter.match(/\s+/g) ? res = " " : res = letter.charCodeAt(0) + shift
  return String.fromCharCode(res)
}

function caesar(shift, sentence){
  let res = ""
  sentence.split('').map(element => {
    element.match(/\s+/g) ? res += " " : res += char_rot(shift, element)
  })
  return res
}
function uncipher(shift, cipheredSentetence){
  let res = ""
  cipheredSentetence.split('').map(element => {
    element.match(/\s+/g) ? res += " " : res += char_rot(-shift, element)
  })
  return res
}


// console.log(caesar(1,"Bonjour tout le monde"))
// console.log(uncipher(1,"Cpokpvs upvu mf npoef"))