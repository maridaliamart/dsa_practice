function maxDepth(node, currentDepth = 0) {
    if (!node) return currentDepth;
    //move onto child of root node
    currentDepth++;
    //account for subtrees
    const leftDepth = maxDepth(node.left, currentDepth);
    const rightDepth = maxDepth(node.right, currentDepth);
    return Math.max(leftDepth, rightDepth);
  }