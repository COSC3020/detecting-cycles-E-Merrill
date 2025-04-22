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
    [0,0,0],
    [0,0,1],
    [0,1,0]
];

// Testing the case of one node being disconnected, but there being a cycle

assert(JSON.stringify(hasCycle(noCycle)) == JSON.stringify(true));

var longCycle = [
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
    [1,0,0,0]
];

// Testing the case of a long cycle, where mutiple nodes make up the cycle (i.e. 1->2->3->1)

assert(JSON.stringify(hasCycle(longCycle)) == JSON.stringify(true));
