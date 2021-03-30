import { TreeNode } from './treeNode';

const CERO = 0;
const ONE_CHILD = 1;
const TWO_CHILDREN = 2;

export default class Tree {
	constructor() {
		this.root = null;
		this.numbersOfNodes = 0;
	}

	isEmpty() {
		return this.root != null;
	}

	addSmallerNode(root, newNode) {
		const rigthNode = root.getRigthNextNode();

		if (rigthNode === null) {
			root.setLeftNextNode(newNode);
		} else {
			if (newNode.getData() >= rigthNode.getData()) {
				this.addBiggerNode(rigthNode, newNode);
			} else {
				this.addSmallerNode(rigthNode, newNode);
			}
		}
	}

	addBiggerNode(root, newNode) {
		const leftNode = root.getLeftNextNode();

		if (leftNode === null) {
			root.setRigthNextNode(newNode);
			newNode.setPredecesor(root);

		} else {
			if (newNode.getData() >= leftNode.getData()) {
				this.addBiggerNode(leftNode, newNode);
			} else {
				this.addSmallerNode(leftNode, newNode);
			}
		}
	}

	addNode(value) {
		const newNode = new TreeNode(vale);
		if (this.isEmpty) {
			this.root = newNode;
			newNode.setPredecesor(this.root);
		} else {
			if (value >= this.root.getData()) {
				this.addBiggerNode(this.root, newNode);
			} else {
				this.addSmallerNode(this.root, newNode);
			}
		}
	}

	deleteSeedNode(nodeToDelete){
		const predecesor = nodeToDelete.getPredecesor();

		if (node.getData > predecesor.getData()) {
			predecesor.setLeftNextNode(null);
		}
		else{
			predecesor.setRigthNextNode(null);
		}
	}
	
	deleteOneChildNode(nodeToDelete){
		const predecesor = nodeToDelete.getPredecesor();
		
		

	}

	deleteNode(value){
		const nodeToDelete = this.findNodeByValue(value);
		switch (nodeToDelete.numberOfChildren()){
			case 0:
				this.deleteSeedNode(nodeToDelete);
				break;
			case ONE_CHILD:
				this.deleteOneChildNode(nodeToDelete);
				break;
			case TWO_CHILDREN:
				this.deleteTwoChildrenNode(nodeToDelete);
				break;
		}

	}

	printInOrder(root) {
		if (root == null) {
			return;
		} else {
			this.printInOrder(root.getLeftNextNode());

			console.log(root.getData());

			this.printInOrder(root.getRigthNextNode());
		}
	}

	printPostOrder(root) {
		if (root === null) {
			return;
		} else {
			this.printPostOrder(root.getLeftNextNode());
			this.printPostOrder(root.getRigthNextNode());
			console.log(root.getData());
		}
	}

	printPreOrder(root) {
		if (root == null) {
			return;
		} else {
			console.log(root.getData());
			this.printPreOrder(root.getLeftNextNode());
			this.printPreOrder(root.getRigthNextNode());
		}
	}


	// "public methods"
	printInOrder(){
		return this.printInOrder(this.root);
	}

	printPostOrder(){
		return this.printPostOrder(this.root);
	}

	printPreOrder(){
		return this.printPreOrder(this.root);
	}
}
