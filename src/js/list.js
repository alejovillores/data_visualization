import Node from './node.js';

export default class List {
	constructor() {
		this.firstNode = null;
		this.size = 0;
	}

	//Methods
	emptyList() {
		return this.size > 0;
	}

	addNode(data) {
		const newNode = new Node(data);
		if (this.emptyList()) {
			this.firstNode = newNode;
		} else {
			const auxNode = this.firstNode;

			while (auxNode.hasNextNode()) {
				auxNode = auxNode.getNextNode();
			}
			auxNode.setNextNode(newNode);
			this.size = this.size + 1;
		}
	}

	deleteLastNode() {
		if (this.emptyList) {
			const auxNode = this.firstNode;
			const i = 0;

			while (i < this.size) {
				auxNode = auxNode.getNextNode();
				i = i + 1;
			}
			auxNode.setNextNode(null);
			this.size = this.size - 1;
		}
	}

	deleteNodeByIndex(index) {
		if (!this.emptyList && index < this.size) {
			const auxNode = this.firstNode;
			const indexNode = null;
			const i = 0;

			while (i < index) {
				auxNode = auxNode.getNextNode();
				i = i + 1;
			}
			indexNode = auxNode.getNextNode();
			auxNode.setNextNode(indexNode.getNextNode());
			this.size = this.size - 1;
		}
	}
}
