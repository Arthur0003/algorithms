class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(firstVertex, secondVertex) {
    if (!this.adjacencyList[firstVertex]) {
      this.addVertex(firstVertex);
    }

    if (!this.adjacencyList[secondVertex]) {
      this.addVertex(secondVertex);
    }

    this.adjacencyList[firstVertex].add(secondVertex);
    this.adjacencyList[secondVertex].add(firstVertex);
  }

  hasEdge(firstVertex, secondVertex) {
    return (
      this.adjacencyList[firstVertex].has(secondVertex) &&
      this.adjacencyList[secondVertex].has(firstVertex)
    );
  }

  removeEdge(firstVertex, secondVertex) {
    const existEdge =
      this.adjacencyList[firstVertex].has(secondVertex) &&
      this.adjacencyList[secondVertex].has(firstVertex);

    if (existEdge) {
      this.adjacencyList[firstVertex].delete(secondVertex);
      this.adjacencyList[secondVertex].delete(firstVertex);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return 'The vertex does not exist';
    }

    for (const vertexItem of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, vertexItem);
    }

    delete this.adjacencyList[vertex];
  }

  logGraph() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
    }
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.hasEdge('A', 'D');
// graph.removeEdge('A', 'B');
// graph.removeVertex('B');
graph.logGraph();
