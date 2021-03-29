export default class Node {
    //Node constructor
    constructor(data){
        this.data = data;
        // Arrow to next node
        this.nextNode = null;
    }

    setNextNode(node){
        this.nextNode = node;
    }

    getData(){
        return this.data;
    }

    hasNextNode(){
        return (this.nextNode != null);
    }

}