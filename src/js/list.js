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

	getNode(index) {
		const auxNode = this.firstNode;
		for (var i = 0; i <= index; i++) {
			auxNode = auxNode.getNextNode();
		}
		return auxNode;
	}

	getLastNode() {
		return this.getNode(this.size);
	}

	addNode(data) {
		const newNode = new Node(data);
		if (this.emptyList()) {
			this.firstNode = newNode;
		} else {
			const lastNode = this.getLastNode();
			lastNode.setNextNode(newNode);
			this.size = this.size + 1;
		}
	}

	deleteLastNode() {
		if (!this.emptyList) {
			const auxNode = this.firstNode;
			const lastNode = this.getNode(this.size - 1);

			lastNode.deleteNextNode();
			this.size = this.size - 1;
		}
	}

	addNodeByIndex(index, data) {
		if (!this.emptyList && index < this.size) {
			const auxNode = this.getNode(index - 1);
			const newNode = new Node(data);

			newNode.setNextNode(auxNode.getNextNode);
			auxNode.setNextNode(newNode);
			this.size = this.size + 1;
		}
	}

	deleteNodeByIndex(index) {
		if (!this.emptyList && index < this.size) {
			const auxNode = this.getNode(index - 1);
			const indexNode = auxNode.getNextNode();

			auxNode.setNextNode(indexNode.getNextNode());
			this.size = this.size - 1;
		}
	}

	getDataByPosition(index) {
		if (!this.emptyList && index < this.size) {
			return this.getNode(index).getData();
		}
	}

	changeNodesByPositions(firstIndex, secondIndex) {
		if (!this.emptyList && firstIndex > this.size && secondIndex > this.size) {
			const minIndex = Math.min(firstIndex, seconIndex);
			const minIndexNode = this.getNode(minIndex);
			const secondNode = minIndexNode;
			const minIndexData = minIndexNode.getData();

			// Avance
			for (var i = 0; i < secondIndex - firstIndex; i++) {
				secondNode = secondNode.getNextNode();
			}
			minIndexNode.setData(secondNode.getData());
			secondNode.setData(minIndexData);
		}
	}
}
