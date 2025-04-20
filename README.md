# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

**Since my implementation just iterates through every element in an adjacency matrix until it finds a cycle, its worst case runtime complexity would be $\theta(|V|^2)$  This is because, since it starts searching at the first edge in the first vertes, it will have to iterate from the very start of the matrix, enocunter nothing, and keep going until it reaches the very last edge to check, which would be graph[|V|][|V|]. Since it has to iterate through every single possible edge, this means it has to iterate through $|V|^2$ times, which ends up being the final rutnime complexity.**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
