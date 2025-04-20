const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Testing the case of an empty matrix, should be false

assert(JSON.stringify(hasCycle([])) == JSON.stringify(false));

var sameNode = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
];

// Testing the case where a node loops into itself

assert(JSON.stringify(hasCycle(sameNode)) == JSON.stringify(true));

var nothing = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// Testing the case of three nodes with no edges

assert(JSON.stringify(hasCycle(nothing)) == JSON.stringify(false));

var noCycle = [
    [0,1,0],
    [0,0,1],
    [0,0,0]
];

// Testing the case of there being edges, but no cycles

assert(JSON.stringify(hasCycle(noCycle)) == JSON.stringify(false));

var multiple = [
    [1,1,0],
    [1,0,1],
    [0,1,0]
];

// Testing the case of multiple cycles; should definitely return true

assert(JSON.stringify(hasCycle(multiple)) == JSON.stringify(true));

var tree = [
    [0,1,1,0],
    [0,0,1,1],
    [0,0,0,1],
    [0,0,0,0]
];

// Testing where one node has mutliple children, but no cycles exist (similar a tree, but not quite in this case)

assert(JSON.stringify(hasCycle(tree)) == JSON.stringify(false));

var longCycle = [
    [0,1,1,0],
    [0,0,1,1],
    [0,0,0,1],
    [1,0,0,0]
];

// Testing the case of a long cycle, where mutiple nodes make up the cycle (i.e. 1->2->3->1)

assert(JSON.stringify(hasCycle(longCycle)) == JSON.stringify(true));
