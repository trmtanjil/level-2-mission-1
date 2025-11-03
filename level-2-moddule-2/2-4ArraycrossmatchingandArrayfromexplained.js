//some 

const  numbers = [29,7,7,5];

const havEvenNumber = numbers.some(number=>number %2 ===0)
console.log(havEvenNumber)

const currentUserRoles = ["user", "editor", "admin"];

const featureAccessRoles = ["admin", "manager"];

const canAcces = currentUserRoles.some(rull=>featureAccessRoles.includes(rull))
// console.log(canAcces)

// const arr = Array.from({length :5}).fill('')
// const arr = Array.from({length :5},(_,i)=>i) 
const arr = Array.from([1,4,6],(value,i)=>value *value) 
console.log(arr)

const range = (start , stop, step)=>
    Array.from(
        {length :Math.ceil((stop - start)/step)},
        (_,i)=>start + i * step
    )
    console.log(range(1,10,2))