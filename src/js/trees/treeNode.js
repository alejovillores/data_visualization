export default class TreeNode{

    constructor(data){
        this.data = data;
        this.predecesor = null;
        this.leftChild = null;
        this.rigthChild = null;
    }

    setLeftNextNode(node){
        this.leftChild = node;
    }

    setRigthNextNode(node){
        this.rigthChild = node;
    }
    
    setPredecesor(node){
        this.predecesor = node;
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