const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  //Adding vertex
  addVertex(vertex) {
    if (!this.adjacencyList.get(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  //adding edges from vertex to vertex
  addEdge(firstVertex, secondVertex) {
    if (!this.adjacencyList.get(firstVertex)) {
      this.addVertex(firstVertex);
    }

    if (!this.adjacencyList[secondVertex]) {
      this.addVertex(secondVertex);
    }

    this.adjacencyList.get(firstVertex).add(secondVertex);
    this.adjacencyList.get(secondVertex).add(firstVertex);
  }

  //checking if vertexes have edges
  hasEdge(firstVertex, secondVertex) {
    return (
      this.adjacencyList.get(firstVertex).has(secondVertex) &&
      this.adjacencyList.get(secondVertex).has(firstVertex)
    );
  }

  //removing edges
  removeEdge(firstVertex, secondVertex) {
    const existEdge =
      this.adjacencyList.get(firstVertex).has(secondVertex) &&
      this.adjacencyList.get(secondVertex).has(firstVertex);

    if (existEdge) {
      this.adjacencyList.get(firstVertex).delete(secondVertex);
      this.adjacencyList.get(secondVertex).delete(firstVertex);
    }
  }

  //removing vertex
  removeVertex(vertex) {
    if (!this.adjacencyList.get(vertex)) {
      return 'The vertex does not exist';
    }

    // removing edges for current vertex
    for (const vertexItem of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, vertexItem);
    }

    this.adjacencyList.delete(vertex);
  }

  // searching if there's route between start and destination -> using breadth first search
  bfs(start, destination) {
    const visited = new Set();
    const queue = [start];

    // if queue are empty, stopping iteration
    while (!!queue.length) {
      const airport = queue.shift();

      const edgeItems = this.adjacencyList.get(airport);

      for (const edgeItem of edgeItems) {
        // If we find the path, just logging a message
        if (edgeItem === destination) {
          console.log('The destination was found');
        }

        // Marking the airport that we have visited
        if (!visited.has(edgeItem)) {
          visited.add(edgeItem);
          queue.push(edgeItem);
        }
      }
    }
  }

  // searching if there's route between start and endPoint -> using depth first search
  dfs(start, endPoint, visited = new Set()) {
    console.log(visited, 'VISITED');
    visited.add(start);

    const edgeItems = this.adjacencyList.get(start);

    // iterating current vertex children
    // if we find the path than logging a message
    // if not we calling function using recursion for deep search
    for (const edgeItem of edgeItems) {
      if (edgeItem === endPoint) {
        console.log('the end point was found');
        return;
      }

      if (!visited.has(edgeItem)) {
        this.dfs(edgeItem, endPoint, visited);
      }
    }
  }
}

const graph = new Graph();
airports.forEach((airport) => graph.addVertex(airport));
routes.forEach((route) => graph.addEdge(...route));

console.log(graph.adjacencyList);
// console.log(graph.bfs('PHX', 'BKK'));
console.log(graph.dfs('PHX', 'BKK', new Set()));
