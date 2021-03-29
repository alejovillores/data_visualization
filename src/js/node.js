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

    setData(data){
        this.data = data;
    }

    getNextNode(){
        return this.nextNode;
    }

    getData(){
        return this.data;
    }

    deleteNextNode(){
        this.nextNode = null;
    }


}