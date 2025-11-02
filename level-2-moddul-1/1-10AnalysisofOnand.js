function grnerateSimData(size){
    const itemPoll = [
        'Grape',
        'Strawberry',
        'Pineapple',
        'Watermelon',
        'Cherrry',
        'Blueberry',
        'Aplle',
        'Orange'
        ];

        const generatedData = [];
        for (let i = 0 ; i<size; i++){
            const randomIndex = Math.floor(Math.random()* itemPoll.length)
            generatedData.push(itemPoll[randomIndex])
        }
        return generatedData;
}

const hugeDataSet = grnerateSimData(5000000);
console.log('data size', hugeDataSet.length)

//brute force

const arrStartTime = performance.now();
const removeDupArr = (arr)=>{
    const newArr=[];

    arr.forEach(element => {
        if(!newArr.includes(element))
            newArr.push(element)
    });

    return newArr
    
}
console.log(removeDupArr(hugeDataSet))

const arrEndTime = performance.now();

console.log(`Arry Implementaitaion took ${arrEndTime - arrStartTime}`);


// set implementation

const setStartTime = performance.now();

 const removeDupSet = (arr)=>{
    const set = new Set(arr)
    return Array.from(set)
 }
 console.log(removeDupSet(hugeDataSet))
 const setEndTime = performance.now();
 console.log(`Set Implementation took ${setEndTime - setStartTime}`);
