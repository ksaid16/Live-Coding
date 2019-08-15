function solution(nodeinfo)
{
    var answer = [[]];
    var node = {x:null, y:null, index:null, left: null, right: null, parent: null};
    var nodeArr = [];

    for(var i = 0; i < nodeinfo.length; i++)
    {
        node = {x: nodeinfo[i][0], y: nodeinfo[i][1], index: i+1};
        nodeArr.push(node);
    }
    //console.log(nodeArr);

    var maxHeight = 0;
    var root;
    var index = 0;

    for(var i = 0; i < nodeArr.length; i++)
    {
        if(maxHeight < nodeArr[i].y)
        {
            maxHeight = nodeArr[i].y;
            index = i;
        }
    }
    root = nodeArr[index];
    var finalLength = nodeArr.length;
    nodeArr.splice(index, 1);
    var binTree = [];
    //binTree.push(root);
    maxHeight = 0;
    var tempNode = [];
    var tempIndex = new Set();
    //console.log(nodeArr);
    var finalTree = [];
    finalTree.push[root];
    console.log(root);
    while(binTree.length < finalLength-1)
    {
        
        //if(binTree.length == 1)
        //{
            for(var i = 0; i < nodeArr.length; i++)
            {
                if(maxHeight < nodeArr[i].y && tempIndex.has(i) == false)
                {
                    maxHeight = nodeArr[i].y;
                }
            }
            for(var i = 0; i < nodeArr.length; i++)
            {
                if(nodeArr[i].y == maxHeight)
                {
                    tempNode.push(nodeArr[i]);
                    binTree.push(nodeArr[i]);
                    tempIndex.add(i);
                    //console.log(binTree);
                    //console.log(tempIndex);
                }
            }
            //console.log(binTree);
        
        //}
        maxHeight = 0;
    }

    /*
    while(binTree.length > 0)
    {
        if(binTree.length == finalLength-1)
        {
            for()
        }
    }*/

    console.log(binTree);

    return answer;
}

var x = [[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]];

console.log(solution(x));