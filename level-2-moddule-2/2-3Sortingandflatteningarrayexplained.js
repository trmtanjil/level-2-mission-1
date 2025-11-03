//* sort

const numbers =[20, 233, 22 ,24];
const intiger = ['Banana','apple', 'Cherry','date']

const sortNumber = numbers.sort((a, b )=>a-b)
console.log(sortNumber)
console.log(numbers)

intiger.sort((a,b)=>a.localeCompare(b))
intiger.sort()
console.log(intiger)

// const arr = [2,2.4,4,5,5,5,[4,3,5,56,[2,222]]]
// const flatArr = arr.flat()
// const flatArrr = arr.flat(Infinity)

// console.log(flatArr)
// console.log(flatArrr)

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flatArr = [...new Set(tagsFromPosts.flat())]
console.log(flatArr)