import Node from './linear_structures/node.js';

export default class Queu {
	constructor() {
		this.firstNode = null;
		this.lastNode = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size > 0;
	}

	putNode(data) {
		const newNode = new Node(data);

		if (this.isEmpty()) {
			this.firstNode = newNode;
			this.lastNode = newNode;
		} else {
			const currentLastNode = this.lastNode;

			currentLastNode.setNextNode(newNode);
			this.lastNode = newNode;
		}

		this.size++;
	}

	pushNode() {
		const rootNode = this.firstNode;
		this.firstNode = this.firstNode.getNextNode();
		this.size--;

		return rootNode;
	}
}
