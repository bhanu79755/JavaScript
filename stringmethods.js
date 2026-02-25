let a="Bhanu Shree K A                             "
// console.log(a.length,"Hello this is Bhanu shree")
console.log(a.charAt(4))

//Concat
let x="Shashi"
let y="kumar"
console.log(x.concat(y).concat(" ").concat(a))



//endsWith

console.log(a.endsWith("A"))

//startswith
console.log(a.startsWith("Bh"))


//includes
console.log(a.includes("B"))

//indexof
console.log(a.indexOf("y"))


//lastindexof
console.log(a.lastIndexOf("nu"))

//padend
console.log("bhanu".padEnd(10,"y"))

//padstart
console.log("903".padStart(16,"x"))


//repeat
console.log(a.repeat(5))

//slice

console.log(a.slice(1,8))

console.log(a.slice(4,a.length))

 let m=(a.slice(0,5))
 console.log(m)

 let n=(a.slice(2,a.length))
 console.log(n)

 //substring
  console.log(a.substring(0,7))

  console.log(a.substring(7))
  console.log(a.substring(9))


  //touppercase
  console.log(a.toUpperCase())

  //to lower case
  console.log(a.toLowerCase())

  //trimend

  console.log(a.trimEnd())
  console.log(a.trimEnd().length)

  //trimstart
  console.log(a.trimStart())
  console.log(a.trimStart().length)
  console.log(a.length)



