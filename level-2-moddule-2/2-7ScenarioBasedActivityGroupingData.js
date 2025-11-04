//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
//TODO initialte empty object 
//TODO Check if the response already exist or not
//TODO if it exists then increment the cout 
//TODO if not then initialize it with 1

const count = surveyResponses.reduce((table, response)=>{
//    if( table[response]){
//     table[response]=table[response]+1
//    }else
//    {
//     table[response]=1
//    }
table[response]=(table[response]||0)+1;
   return table
},{})
// console.log(count)




const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];


const selsCount = sales.reduce((product, sale)=>{
    const {category, price, quantity}=sale;

  if(!product[category])  product[category]={
        totalrevenue :0,
        itemCount:0,

    }

    product[category].totalrevenue += price * quantity;
    product[category].itemCount +=quantity;
    return product
},{})
console.log(selsCount)