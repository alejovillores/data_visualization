import Node from './node.js';

export default class Stack {
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
			const currentFirstNode = this.firstNode;

			newNode.setNextNode(currentFirstNode);
			this.firstNode = newNode;
		}

		this.size++;
	}

	pushNode() {
        const newLastNode = this.firstNode;
        const currentLastNode = this.lastNode;

        for(var i = 0; i <this.size; i++){
            newLastNode = newLastNode.getNextNode();
        }
        this.lastNode = newLastNode;
        return currentLastNode;
	}
}
