
function checker(graph, start, checked){
    checked.push(start);
    
    // Checking all potential edges of a given node,
    // only do something if there actually is an edge

    for (let j = 0; j < graph.length; j++){
        if(graph[start][j]){
            if(checked.includes(j) || j == start){
                return true;
            }
            if(checker(graph, j, checked)){
                return true;
            }
        }
    }

    // If the node added to what we checked doesn't form a cycle on this iteration
    // remove it so we can check it again if ther is another connection to it

    checked.pop();
    return false;
}
function hasCycle(graph) {
    if (graph.length == 0){
        return false;
    }
    let checked = [];

    // Cycle through all the nodes in the graph and run the check on them

    for(let i = 0; i < graph.length; i++){
        let check = checker(graph, i, checked)
        if(check){
            return true;
        }
    }
    return false;
}
