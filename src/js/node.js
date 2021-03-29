import Arrow from './arrow.js'

export default class Node {
    //Node constructor
    constructor(data){
        this.data = data;
        // Arrow to next node
        this.nextNode = new Arrow();
    }

    setNextNode(node){
        this.nextNode.setNode(node);
    }

    getData(){
        return this.data;
    }

}