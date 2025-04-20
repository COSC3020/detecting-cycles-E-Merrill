function hasCycle(graph) {
    if (graph.length == 0){
        return false;
    }
    let checked = new Set();
    for(let i = 0; i < graph.length; i++){
        for (let j = 0; j < graph.length; j++){
            if(graph[i][j]){
                checked.add(i);
            }
            if(graph[i][j] && graph[j][i]){
            return true;
            }
            if(graph[i][j] && checked.has(j)){
                return true;
            }
        }
    }
    return false;
}
