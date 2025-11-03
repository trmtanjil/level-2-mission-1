// const objec = {
//     program : {languagId : 'python'},
//     'Mantor Name ': {MantorId : 'tanjil'}
// }
// console.log(objec["Mantor Name "])
// console.log(objec.program)

// const objec = {
// }
// objec.program = {languagId : 'python'}
// objec[true] = {mantorId : 'tanjil'}
// console.log(objec["Mantor Name "])
// console.log(objec)


const course1 = {name: 'js cours tutorial'}

const course2 = {name : 'python cours tutorial'};

const obj = {}

// obj[course1] ={ courseId : 'level1'};
// obj[course2]= {courseId : 'level2'};

// console.log(obj['[object Object]'])
// console.log(obj)
const nestedMap = [
    [course1,'javascript'],
     [course2,'javascript pythohn']
]

const map = new Map(nestedMap)

map.set( course1, {courseId :'level1'})
map.set( course2, {courseId :'level2'})


// map.forEach((value , key )=>(key.name = 'sohoj sorol ' + key.name))


// for (let key  of map.keys()){
//     key.name = 'sohoz sorol simple' + key.name
// }
// console.log(map)
// console.log(map.entries())
// console.log([...map.values()])


console.log(map)