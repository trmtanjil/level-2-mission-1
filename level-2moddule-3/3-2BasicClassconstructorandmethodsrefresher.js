// let count =0;
// const counter =(amount)=>{

//     count = count +amount;
//     return count
// }
// console.log(counter(2,3,3))
// console.log(counter(4))
// console.log(counter(5))

// const crateCounter = ()=>{
//     count = 0;

//     return (amount)=>{
//         count = count + amount;
//         return count;
//     };
// }
// const counterr = crateCounter();
// console.log(counterr(3))
// console.log(counterr(5))


class Counter {
    constructor(count){
        this.count = count;
    }
    add(amount){
        this.count = this.count + amount;
    }
    print(){
        console.log(this.count)
    }
}
const counter1 = new Counter(0);
counter1.add(10);

counter1.print()

const counter2 = new Counter(10);
counter2.add(10);

counter2.print()