export default class Arrow {
	//Arrow constructor
	constructor() {
		this.nextNode = null;
	}

	setNode(node) {
		this.nextNode = node;
	}

	getNextNode() {
		return this.nextNode;
	}
}
