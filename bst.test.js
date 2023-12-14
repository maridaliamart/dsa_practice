const maxDepthBST = require('./bst');

test('maxDepth returns 0 for empty tree', () => {
    const tree = [null];
    const expectedDepth = 0;
    const actualDepth = maxDepthBST(tree);

    expect(actualDepth).toBe(expectedDepth);
  });

