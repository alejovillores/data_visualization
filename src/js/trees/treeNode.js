export default class TreeNode{

    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rigthChild = null;
    }

    setLeftNextNode(node){
        this.leftChild = node;
    }

    setRigthNextNode(node){
        this.rigthChild = node;
    }

    getLeftNextNode(){
        return this.leftChild;
    }

    getRigthNextNode(){
        return this.rigthChild;
    }

    getData(){
        return this.data;
    }

}