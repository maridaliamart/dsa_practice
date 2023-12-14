function maxDepthBST(node, currentDepth = 0) {
    if (!node) return currentDepth;
    //move onto child of root node
    currentDepth++;
    //account for subtrees
    const leftDepth = maxDepthBST(node.left, currentDepth);
    const rightDepth = maxDepthBST(node.right, currentDepth);
    return Math.max(leftDepth, rightDepth);
  }

  export default maxDepthBST;