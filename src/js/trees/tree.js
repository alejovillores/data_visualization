import { TreeNode } from './treeNode';

export default class Tree {
	constructor() {
		this.root = null;
		this.numbersOfNodes = 0;
	}

	isEmpty() {
		return this.root != null;
	}

    addSmallerNode(root,newNode){
        const rigthNode = root.getRigthNextNode();
        
        if (rigthNode === null){
            root.setLeftNextNode(newNode);
        }
        else{
            if (newNode.getData() >= rigthNode.getData()) {
                this.addBiggerNode(rigthNode,newNode);
            }
            else{
                this.addSmallerNode(rigthNode,newNode);
            }
        }
        
    }

    addBiggerNode(root,newNode){
        const leftNode = root.getLeftNextNode();
        
        if (leftNode === null){
            root.setLeftNextNode(newNode);
        }
        else{
            if (newNode.getData() >= leftNode.getData()) {
                this.addBiggerNode(leftNode,newNode);
            }
            else{
                this.addSmallerNode(leftNode,newNode);
            }
        }
        
    }

	addNode(value) {
        const newNode = new TreeNode(vale);
		if (this.isEmpty) {
            this.root = newNode;
		}else{
            if (value >= this.root.getData()) {
                this.addBiggerNode(this.root,newNode);
            }else{
                this.addSmallerNode(this.root,newNode);
            }
        }
	}
}
