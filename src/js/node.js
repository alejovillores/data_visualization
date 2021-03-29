export default class Node {
    //Node constructor
    constructor(data){
        this.data = data;
        // Arrow to next node
        this.nextNode = null;
    }

    //Methods
    setNextNode(node){
        this.nextNode = node;
    }

    getNextNode(){
        return this.nextNode;
    }

    getData(){
        return this.data;
    }

    hasNextNode(){
        return (this.nextNode != null);
    }

}