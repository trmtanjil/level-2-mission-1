// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const dataCache = new Map();

const expensiveTask = (id)=>{

    console.log('Ran the expensive tsk for :',id);

    return{
        id:id,
        data:`same data for id : ${id}`,
        timestamp : new Date().getTime(),
    };
}

const getData = (id)=>{
  if(dataCache.has(id)){
    console.log('cach hit for id:', id)
    return dataCache.get(id);
  }
      console.log('cach miss for id:', id)

    const data = expensiveTask(id)
    dataCache.set(id, data);
    return data;
}
console.log(dataCache)
console.log(getData(123))
console.log(getData(123))

console.log(dataCache)