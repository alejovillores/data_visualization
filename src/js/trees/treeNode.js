export default class TreeNode {
	constructor(data) {
		this.data = data;
		this.predecesor = null;
		this.leftChild = null;
		this.rigthChild = null;
	}

	setLeftNextNode(node) {
		this.leftChild = node;
	}

	setRigthNextNode(node) {
		this.rigthChild = node;
	}

	setPredecesor(node) {
		this.predecesor = node;
	}

	getPredecesor() {
		return this.predecesor;
	}

	getLeftNextNode() {
		return this.leftChild;
	}

	getRigthNextNode() {
		return this.rigthChild;
	}

	getData() {
		return this.data;
	}

	getNumberOfChildren() {
		if (this.leftChild != null && this.rigthChild != null) {
			return 2;
		} else {
			if (this.leftChild != null || this.rigthChild != null) {
				return 1;
			} else {
				return 0;
			}
		}
	}
}
