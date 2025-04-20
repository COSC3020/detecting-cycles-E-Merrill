function hasCycle(graph) {
    if (graph.length == 0){
        return false;
    }

    for(let i = 0; i < graph.length; i++){
        for (let j = 0; j < graph.length; j++){
            if(graph[i][j] && graph[j][i]){
                return true;
            }
        }
    }
    return false;
}
