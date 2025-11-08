const count = (couns)=>{
   let item = 0;
    item = item + couns
    return couns
}
console.log(count(3))
console.log(count(4))

const counter = {
    count :0,
    add(ammount){
        this.count = this.count+ammount;
    },
    print(){
        console.log(this.count)
                console.log('sldk',this.count)

    },
}
counter.add(2);
counter.add(3)
counter.print();