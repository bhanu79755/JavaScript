// let a="'My name is:' "
// let b= "'bhanu'"
// console.log(a)
// console.log(b)
// console.log("My name is:".concat(b))
// let c=5+3
// console.log(c)
// console.log(`Total cost:$'.concat(c)`)
// console.log(`Total cost:  ${(5 + 3) / 100}`);
// alert(`Total cost:  ${(5 + 3) / 100}`)

let n="ravishastry"
let address="banglore"
let company="dheecodinglab"


let n_fh=n.slice(0,n.length/2)
let n_sh=n.slice(n.length/2)

let n_a=n_fh.concat(address).concat(n_sh)

let na_fh=n_a.slice(0,n_a.length/2)
let na_sh=n_a.slice(n_a.length/2)

let nac=na_fh.concat(company).concat(na_sh)

let nac5=nac.repeat(5)

let nac5_fh=nac5.slice(0,nac5.length/2)
let nac5_sh=nac5.slice(nac5.length/2)

let res=nac5_fh.concat(n.toLocaleUpperCase()).concat(nac5_sh)
console.log(res)
console.log(res.length)

