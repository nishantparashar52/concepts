class Singleton {
    constructor(instance) {
        this.counter = 0;
        if(instance) {
            return new Error('You can create instance once');
        }
        instance = this;
    }
    getInstance() {
        return this; 
    }
    increment() {
        ++this.counter;
    }
    getCounter() {
        return this.counter;
    }
}

let S1 = new Singleton();
// let S2 = new Singleton();
// S1.increment();
// S1.increment();
// S1.increment();
// S2.increment();
// console.log(S1.getCounter());
// console.log(S2.getCounter());

// check rotation

function rotation(str1, str2) {

    //approach 1 add str1 twice
    // if((str1 + str1).indexOf(str2) > -1) return true;
    let s1 = [...str1];
    let s2 = [...str2];
    let k = s2.length;
    while(k--) {
        let temp = s2[0];
        s2.shift();
        s2.push(temp);
        if(JSON.stringify(s2) === JSON.stringify(s1)) return true
    }
    return false;
}
// console.log(rotation('ABCD', 'CDAB'));

function majorityElem(a) {
    let maj = 0, count = 1;
    for(let i = 1; i < a.length;i++) {
        if(a[maj] === a[i]) count++;
        else count--;
        if(count === 0) {
            count=1;
            maj = i;
        }
    }
    count = 0;
    for(let i = 0; i < a.length;i++) {
        if(a[maj] === a[i]) count++;
    }
    if(count >= a.length / 2) return a[maj];
    return false;
}
// console.log(majorityElem([1,2,1,1,1,0,2]));

function largestContingous(a) {
    let max_so_far = 0, max_ending_here = 0;
    for(let i = 0; i < a.length;i++) {
        max_ending_here += a[i];
        if(max_so_far < max_ending_here) max_so_far = max_ending_here;
        max_ending_here = Math.max(0, max_ending_here);
    }
    return max_so_far;
}
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function IdenticalTree(a,b) {
    if(a === null && b === null) return true;
    return (a.data === b.data &&
        IdenticalTree(a.left, b.left)
        && IdenticalTree(a.right, b.right)
    );
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.left.left.left = new Node(4);
root1.left.left.right = new Node(4);
root1.left.right.left = new Node(10);
root1.left.right.right = new Node(10);


let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(6);
// console.log(IdenticalTree(root1, root2));


function findMaxDepthtree(a) {
    if(a === null) return 0;
    else {
        let leftTreeMaxDepth = findMaxDepthtree(a.left);
        let rightTreeMaxDepth = findMaxDepthtree(a.right);
        if(leftTreeMaxDepth < rightTreeMaxDepth) {
            return rightTreeMaxDepth +1;
        }
        return leftTreeMaxDepth +1;
    }
}

// console.log(findMaxDepthtree(root1));


function ConvertIntoMirrorTree(a) {
   if(a === null) return a;
    let mLeft = ConvertIntoMirrorTree(a.left);
    let mRight = ConvertIntoMirrorTree(a.right);
    a.left = mRight;
    a.right = mLeft;
    return a;
}
// console.log(mirrorTree(root1));

function permutationOfString(s) {
    if(s.length < 2) return s;
    let permutationArr = [];
    for(let i = 0; i < s.length;s++) {
        let ch = s[i];
        let leftStr = s.slice(0, i);
        let rightStr = s.slice(i + 1, s.length);
        for(let k of permutationOfString(leftStr + rightStr)) {
            permutationArr.push(ch + k);
        }
        return permutationArr;
    }
}
console.log(permutationOfString('ABC'));