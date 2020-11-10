# Quick Sort -- A Blog

## What is quick sort anyway?

Quick sort is an algorithm to sort given lists of elements. It takes really large problems, and then breaks it down in to smaller problems until they are small enough to solve it. 

It can be implemented both recursively and iteratively. We will be doing the recursive method.

## Cool! How does it work!?

1. Select an element in the array that is going to be called the pivot. In our example, this is will start as the last element in the array.

2. The next step is called **partitioning**. we will evaluate each element to the pivot in order to have all element to the left of the pivot to be less than the pivot, and all elements to the right to be greater than the pivot. If the element being evaluated is equal to the pivot, the side that it goes is inconsequential.

3. **Rinse, Wash, and Repeat** --- We will do this process of the left and the right side of the pivot... The array must be sorted for the process to end.

## Example time!

![Quick Sort]('../quicksort.png')