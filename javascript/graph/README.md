- Code Challenge 11 [Pull request](https://github.com/Chris-Bortel/data-structures-and-algorithms/pull/61)

# Graph Implementation

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:


  1. AddNode()
  <br>
    - Adds a new node to the graph
    - Takes in the value of that node
    - Returns the added node
      
  1. AddEdge()
  <br>
    - Adds a new edge between two nodes in the graph
    - Include the ability to have a “weight”
    - Takes in the two nodes to be connected by the edge
    - Both nodes should already be in the Graph
      
  1. GetNodes()  
    - Returns all of the nodes in the graph as a collection (set, list, or similar)
               
  1. GetNeighbors()  
    - Returns a collection of edges connected to the given node
    - Takes in a given node
    - Include the weight of the connection in the returned collection
  
  1. Size()  
    - Returns the total number of nodes in the graph
            

## Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

  1. Node can be successfully added to the graph
  1. An edge can be successfully added to the graph
  1. A collection of all nodes can be properly retrieved from the graph
  1. All appropriate neighbors can be retrieved from the graph
  1. Neighbors are returned with the weight between nodes included
  1. The proper size is returned, representing the number of nodes in the graph
  1. A graph with only one node and edge can be properly returned
  1. An empty graph properly returns null


Ensure your tests are passing before you submit your solution.

<!-- Short summary or background information -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution

<!-- Embedded whiteboard image -->

## Notes
[Reading To Reference](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)