/* 
(JavaScript)
https://www.codewars.com/kata/5acf710f46b4cb00810001e2

7 kyu
Code Wars Kata Instructions:

In the Deca Forest, grow the Deca Trees.

On each Deca Tree, a trunk has 10 branches.

On each branch, there are 10 twigs.

On each twig, there are 10 leaves.

Unfortunately, the Deca Forest is becoming wildly overgrown and is endangering the local wildlife. You must add methods to the tree object so that the woodcutter can remove parts of a tree as follows, where n is a positive integer:

chopTrunk(n)     will remove n trunks
chopBranch(n)    will remove n branches
chopTwig(n)      will remove n twigs
chopLeaf(n)      will remove n leaves
Make sure that when you remove any part of the tree, you also remove all the smaller parts attached to it. e.g. if you remove a twig you must also remove 10 leaves from the tree object. The woodcutter's aim is to trim back this forest, so he will try to remove as much of the tree as possible each time he chops.

Conversely, when you remove a smaller part, you do not need to remove the larger parts it is attached to - for example you could pick off all the leaves from a tree and the number of twigs, branches and trunks would be unaffected.

The tree cannot have a negative number of trunks, branches, leaves or twigs. That would be highly unnatural.

You must also add a method 'describe' that allows the Deca Forest tour guides to describe each tree. It should describe the tree in the following format:

"This tree has a trunks, b branches, c twigs and d leaves."

(where a, b, c and d are integer values)

Your methods will be tested for trees with varying numbers of trunks and for removing random numbers of leaves, twigs, branches and trunks. The test will use only positive integers for these values.

*/


//my solution

function tree(trunks) {
    this.trunks = trunks;
    this.branches = trunks * 10;
    this.twigs = trunks * 100;
    this.leaves = trunks * 1000;
    this.describe = function(){
    console.log(`This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`)
    }
    this.chopTrunk = function(chopNum){
        this.trunks = (this.trunks - chopNum) < 0 ? 0 : this.trunks -= chopNum
        this.branches = (this.branches - (chopNum * 10)) < 0 ? 0 : (this.branches -= (chopNum * 10))
        this.twigs = (this.twigs - (chopNum * 100)) < 0 ? 0 : (this.twigs -= (chopNum * 100))
        this.leaves = (this.leaves - (chopNum * 1000)) < 0 ? 0 : (this.leaves -= (chopNum * 1000))
    }
    this.chopBranch = function(chopNum){
        this.branches = (this.branches - chopNum) < 0 ? 0 : this.branches -= chopNum
        this.twigs = (this.twigs - (chopNum * 10)) < 0 ? 0 : (this.twigs -= (chopNum * 10))
        this.leaves = (this.leaves - (chopNum * 100)) < 0 ? 0 : (this.leaves -= (chopNum * 100))
    }
    this.chopTwig = function(chopNum){
        this.twigs = (this.twigs - chopNum) < 0 ? 0 : this.twigs -= chopNum
        this.leaves = (this.leaves - (chopNum * 10)) < 0 ? 0 : (this.leaves -= (chopNum * 10))
    }
    this.chopLeaf = function(chopNum){
        this.leaves = (this.leaves - chopNum) < 0 ? 0 : this.leaves -= chopNum
    }
}

var myTree = new tree(10);
// myTree.chopTrunk(10)
// myTree.chopBranch(86)
// myTree.chopTwig(483)
myTree.describe()
myTree.chopLeaf(1)
myTree.describe()







//top-voted solution on CodeWars:

class tree
{
    constructor(trunks)
    {
        this.trunks = trunks
        this.branches = trunks * 10
        this.twigs = trunks * 100
        this.leaves = trunks * 1000
    }
    
    chopTrunk(n)
    {
        this.trunks = Math.max(this.trunks - n, 0)
        this.chopBranch(n * 10)
    }
    chopBranch(n)
    {
        this.branches = Math.max(this.branches - n, 0)
        this.chopTwig(n * 10)
    }
    chopTwig(n)
    {
        this.twigs = Math.max(this.twigs - n, 0)
        this.chopLeaf(n * 10)
    }
    chopLeaf(n)
    {
        this.leaves = Math.max(this.leaves - n, 0)
    }
    
    describe()
    {
        return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
    }
}