
const set = new 
Set()
// set.add('apple');
// set.add('banana');
// set.add('mango');
// set.add('banana')



const tanjil = {userName:'Tanjil'};
const tanvir = {userName :'tanvir'};
const tonmoy = {userName :'tonmoy'};

set.add(tanjil);
set.add(tanvir);
set.add(tonmoy);
set.add(tonmoy);

console.log(set.has('tanvir'))
console.log(set.size)





const arr = ['apple','mango','banana','apple']

const sett = new Set(arr);
const cArr = Array.from(sett)

console.log(cArr)
console.log(sett.has('apple'))


//arry remove dublicate
const arrDovRem = (arr)=>{
    const newArr = [];
    arr.forEach(element => {
    if(!newArr.includes(element)){
        newArr.push(element)
    }
    });
    return newArr
}

console.log(arrDovRem(arr))


// set remove dovlicate 
const arrDovset = (arr)=>{
    const settt = new Set(arr)
    return Array.from(settt)
}

console.log(arrDovset(arr))






const a = { name: 'Tanjil' };
const b = { name: 'Tanjil' };
console.log(a === b); // false (different reference)

const c = a;
console.log(a === c); // true (same reference)