class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

 class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    append(value){
        const newNode = new Node(value);

        // if the linked list is empty
        if(this.head === null){
            this.head= newNode;
            this.tail = newNode;
        }
        else{
            // if the liked list is not empty
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }
    
    prepend(){}

    insert(){}

    remove(){}

    print(){

        const arr = [];
        let currentNode = this.head

        while(currentNode !== null){
            arr.push(currentNode.value)

           currentNode=  currentNode.next
        }
        console.log(arr.join('→'),)
    }
 }
 const likedList = new LinkedList()

 likedList.append(1)
  likedList.append(2)
   likedList.append(3)

   likedList.print()