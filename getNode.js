function getNode(root, node) {
    const path = [];
    while(node !== root) {
       const parent = node.parentElement;
       const child = Array.from(parent.children);
       const pathI = child.indexOf(node);
       path.push(pathI);
       node = parent;
    }
  return path;
}

function getNodePath(root, path) {
  while(path.length > 0) {
    root = root.children[path.pop()];
  }
  return root;
}


function getNodeElement(node) {
   return document.getElementById(node);
}
const output = getNode(getNodeElement('parentA'), getNodeElement('nodeA'));

getNodePath(getNodeElement('parentB'), output);
