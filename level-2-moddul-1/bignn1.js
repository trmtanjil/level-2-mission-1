// const startTime = performance.now()

// for(let i = 0 ; i <= 5000; i++){
//     console.log(i)
// }

// const endTime = performance.now();

// console.log(`this time took ${endTime - startTime}ms`)


// console.time('task')
//  for(let i = 0 ; i <= 50; i++){
//     console.log(i)
// }
// console.timeEnd('task')
// console.log(task)



const firsArr = [];
const secondArr = [];

// console.time('task')
 for(let i = 0 ; i <= 600000; i++){
    if(i<30000){
        firsArr.push(i)
    }
    secondArr.push(i)

}
// console.timeEnd('task')
console.log(`firs array ${firsArr.length}  second arry${secondArr.length}`)

console.time('map1');
const firstUserList =firsArr.map((number)=>({userId:number}));
console.timeEnd('map1')

console.time('map2');
const secondUserList  =secondArr.map((number)=>({userId:number}));
console.timeEnd('map2')

console.time('find')
const user = secondArr.find((user)=>user.userId===20000);
console.timeEnd('find')