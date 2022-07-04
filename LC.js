var twoSum = function(nums, target) {
    if(!nums) return false;
    // for(let i =0; i< nums.length;i++) {
    //     for(let j = i +1; j < nums.length; j++) {
    //         if(nums [i] + nums[j] === target) return [i, j];
    //     }
    // }
    // return false;
    // hashmap
    let hashMap = new Map();
    const len = nums.length;    
    for(let i =0; i< len;i++) {
        if(hashMap[nums[i]] >= 0) {
            return [hashMap[nums[i]],i];
        }
        hashMap[target - nums[i]] = i;
    }
};

console.log(twoSum([2,3,4], 6));

var mergeTwoArr = function (nums1, nums2) {
    let c = [], k = 0, i = 0, j = 0;
    const m = nums1.length, n = nums2.length;
    while (i < m && j < n) {
        if (nums1[i] > nums2[j]) {
            c[k] = nums2[j];
            j++;
        } else {
            c[k] = nums1[i];
            i++;
        }
        k++
    }
    if (i < m) {
        while (i < m) {
            c[k] = nums1[i];
            k++; i++
        }
    } else {
        while (j < n) {
            c[k] = nums2[j];
            k++; j++;
        }
    }
};

// using counter
var findMedian = function(arr1, arr2) {
    let m = arr1.length, n = arr2.length;
    let count = 0, mid = (m + n)/2, retVal = 0;
    while(count < mid && i < m && j <n) {
        if(arr1[i] > arr2[j]) {
            retVal = arr2[j];j++
        } else {
            retVal = arr[i]; i++;
        }
        count++;
    }
    if(count < mid) {
        if(i >= m) {
            while(count < mid) {
                retVal = arr2[j]; j++;
            }
        } else {
            while(count < mid) {
                retVal = arr1[i]; i++
            }
        }
    }
    return retVal;
}
// binary search using 

var findMedianSortedArrays = function (a, b) {
    let x = a.length, y = b.length;
    if(x > y) return findMedianSortedArrays(b,a);
    let low = 0, high = x;
    while(low <= high) {
        let pX = Math.floor((low + high) / 2);
        let pY = Math.floor((x + y + 1) / 2) - pX;
        let mxLX = pX == 0 ? Number.NEGATIVE_INFINITY : a[pX - 1];
        let mnRX = pX == high ? Number.POSITIVE_INFINITY : a[pX - 1];
        let mxLY = pY == 0 ? Number.NEGATIVE_INFINITY : b[pY - 1];
        let mnRY = pY == high ? Number.POSITIVE_INFINITY : b[pY - 1];
        if(mxLX <= mnRY && mxLY <= mnRX) {
            if((x + y) % 2 == 0) return Math.max(mxLX, mxLY) + Math.min(mnRX, mnRY)/2;
            else return Math.max(mxLX, mxLY);
        } else if(mxLX > mnRY) {
            high = pX - 1;
        } else low = pX + 1;
    }
};
findMedianSortedArrays([1,2], [3])

function buySellStock(a) {
    let min_so_far = a[0], max_profit = 0, max_so_far = 0;
    for(let i =1; i< a.length;i++) {
        max_so_far = Math.max(max_so_far, a[i] - min_so_far);
        max_profit = Math.max(max_profit, max_so_far);
        min_so_far = Math.min(min_so_far, a[i]);
    }
    return max_profit;
}
// console.log(buySellStock([240, 250, 255, 230, 260,290]));

function findTotalMaxProfit(k ,a) {
    //  let min_so_far = a[0], max_profit = 0, max_so_far = 0, is_min_found = true;
    // for(let i =1; i< a.length;i++) {
    //     max_so_far = Math.max(max_so_far, a[i] - min_so_far);
    //     if(is_min_found && max_profit < max_so_far && k > 0) {
    //         max_profit += max_so_far;
    //         k--;
    //     } else max_profit = Math.max(max_profit, max_so_far);
    //     if(min_so_far > a[i]) {
    //         is_min_found = true;
    //         min_so_far = Math.min(min_so_far, a[i]);
    //     }
        
    // }
    // return max_profit;

    let maxProfit = new Array(k + 1).fill(0).map(() => Array(a.length).fill(0));
    for(let i = 1; i< a.length;i++) {
        let maxDiff = -a[0];
        for(let j = 1; j < maxProfit[0].length;j++) {
            maxProfit[i][j] = Math.max(maxProfit[i][j - 1], a[j] + maxDiff);
            maxDiff = Math.max(maxDiff, maxProfit[i -1][j] - a[j])
        }
    }
    return maxProfit[k][a.length - 1];
}
// console.log(findTotalMaxProfit(2, [3,2,6,5,0,3]));
// console.log(findTotalMaxProfit(2, [3,2,6,5,0,3]));


function longestSub(s) {
    let re = new Set(), l = 0, r = 0, max = 0;
    while(r < s.length) {
        if(!re.has(s[r])) {
            re.add(s[r]);
            r++;
            max = Math.max(re.size, max);
        } else {
            re.delete(s[l]);
            l++;
        }
    }
    return re;
}
// function to find elem in rotated arr

function findElemInRotatedArr(b, elem) {
    let l = 0, h = b.length - 1;
    function search(a, key, low, high) {
        if(low > high) return -1;
        let mid = Math.floor((low + high) /2);
        if(a[mid] === key) return `key exist at ${mid}`;
        else if(a[low] <= a[mid]) {
            if(a[low] <= key && a[mid] >= key) {
                return search(a, elem, low, mid -1);
            } else return search(a, elem, mid+1, high);
        } else {
            if(a[high] >= key && a[mid] <= key) {
               return search(a, elem, mid + 1, high);
            } else return search(a, elem, low, mid - 1);
        }
    }
    return search(b, elem, l, h);
}

// console.log(findElemInRotatedArr([5,6,7,8,9,10,1,2,3,4], 8));
console.log(findElemInRotatedArr([5,1,3],3));

function firstNonRepeatingChar(s) {
    let hash = {};
    for(let i = 0; i < s.length;i++) {
        hash[s[i]] = (hash[s[i]] ? hash[s[i]] : 0) + 1;
    }
    for(let i = 0; i < s.length;i++) {
        if(hash[s[i]] === 1) return s[i];
    }
}
console.log(firstNonRepeatingChar("nishuishu"));

class Node {
    constructor(item) {
        this.data=item;
        this.next=null;
    }
}

function getIntersectionNode(headA, headB) {
    let hash = {};
    while(headA) {
        hash[headA.data] = true;
        headA = headA.next;
    }
    while(headB) {
        if(hash[headB.data]) return headB.data;
        headB = headB.next;
    }
    return -1;
}
let head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
head1.next.next.next = new Node(15);
head1.next.next.next.next = new Node(30);

let head2 = new Node(10);
head2.next = new Node(15);
head2.next.next = new Node(30);
// console.log(getIntersectionNode(head1, head2));


function reverseArr(arr) {
    let arr1 = [...arr];
    let start = 0, end = arr1.length -1;
    while(start < end) {
        let temp = arr1[start];
        arr1[start] = arr1[end];
        arr1[end] = temp;
        start++;
        end--;
    }
    return arr1;
}

// console.log(reverseArr(["h","e","l","l","o"]));

function rotate(nums, k) {
    let arr1 = nums.splice(k);
    let b1 = [].concat(arr1,nums);
    return b1;
}
// console.log(rotate([1,2,3,4,5,6,7], 3));

class Tree {
    constructor(val) {
        this.data= val;
        this.left = this.right = null;
    }
}
function BSTBinaryTree(node) {
    if(node == null) return true;
    if(node.left !== null && Math.max(0,node.left.data > node.data)) return false;
    if(node.right !== null && node.right.data < node.data) return false;
    if(!BSTBinaryTree(node.left) || !BSTBinaryTree(node.right)) return false;
    return true;
}
var root = new Tree(4);
root.left = new Tree(2);
root.right = new Tree(5);
root.left.left = new Tree(1);
root.left.right = new Tree(6);

// console.log(BSTBinaryTree(root));


function LevelOrder(node) {
    if(!node) return null;
    let queue = [];
    queue.push(node);
    while(queue.length) {
        let elem = queue[0];
        if(elem) {
            if(elem.data) console.log(elem.data);
            if(elem.left) queue.push(elem.left);
            if(elem.right) queue.push(elem.right);
            queue.splice(0, 1);
        }
    }
}

var root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(7);
    root.left.right = new Node(6);
    root.right.left = new Node(5);
    root.right.right = new Node(4);

// console.log(LevelOrder(root));



function LevelOrderSpiral(node) {
    if(!node) return null;
    let queue = [];
    let dir = true;
    queue.push(node);
    while(queue.length) {
        let elem = queue[0];
        if(elem) {
            if(elem.data) console.log(elem.data);
            if(dir) { 
                if(elem.left) queue.push(elem.left);
                if(elem.right) queue.push(elem.right);   
            } else {   
                if(elem.right) queue.push(elem.right);
                if(elem.left) queue.push(elem.left);
            }
            queue.splice(0, 1);
            dir = !dir;
        }
    }
}

var root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(7);
    root.left.right = new Node(6);
    root.right.left = new Node(5);
    root.right.right = new Node(4);
// console.log(LevelOrderSpiral(root));


function stairCaseProblem(num, hash = {}) {
    if(num == 0 || num ==1) return 1;
    hash[num] = stairCaseProblem(num - 1, hash) + stairCaseProblem(num - 2, hash);
    return hash[num];
}
// console.log(stairCaseProblem(15));

// iterative approach

function stairCaseProblemIterative(n) {
    if(n == 0 || n == 1) return 1;
    let num = new Array(n + 1).fill(0);
    num[0] = 1; num[1] =1;
    for(let i = 2; i<= n; i++) {
        num[i] = num[i -1] + num[i -2];
    }
    return num[n];
}
// console.log(stairCaseProblemIterative(10));
// 1,3 ,5


function stairCaseProblemIterative(n) {
    if(n == 0) return 1;
    let num = new Array(n + 1).fill(0);
    num[0] = 1; num[1] =1; total = 0;
    for(let i of [1,3,5,8]) {
        if(n > i) total += stairCaseProblemIterative(n - i);
    }
    return total;
}
// console.log(stairCaseProblemIterative(10));


// promise practice

class customPromise {
    isResolved = false;
    resolvedVal = null;
    fns = [];
    resolvedFn = [];

    static resolve(val) {
        return new customPromise(resolve => {
            resolve(val);
        })
    }
    static all(promises) {
        let results = [], completedTask = 0;
        return new customPromise((resolve, _reject) => {
            promises.forEach((promise,index) => {
                promise.then(item => {
                    results[index] = item;
                    completedTask += 1;
                    if(completedTask === promises.length) return resolve(results);
                })
            })
        })
       
    }
    constructor(iterator) {
        const resolve = (val) => {
            this.resolvedVal = val;
            this.isResolved = true;
            this.resolvedFn.reduce((acc, curr) => {
                return curr(acc)}, this.resolvedVal);
        }
        iterator(resolve);
    }
    then = (fn) => {
        if(this.isResolved) this.fns.push(fn);
        else this.resolvedFn.push(fn);
        this.fns.reduce((acc, curr) => curr(acc), this.resolvedVal);
        return this;
    }
}

let promise1 = new customPromise(res => res(10)).then(val => console.log(val));
// new customPromise(res =>  setTimeout(() => res(10),1000)).then(val => val * 2).then(val => console.log(val));
let promise2 = new customPromise(res =>  setTimeout(() => res(10),1000)).then(val => console.log(val));

// promise.all pollyfill


customPromise.all([Promise.resolve(10), Promise.resolve(20)]).then(val => console.log(val));


function returnTime(nextTime) {
    let currentTime = new Date();
    let futureTime = new Date(nextTime);
    if(futureTime < currentTime) return -1;
    let delta = Math.abs(futureTime - currentTime) / 1000;
    let daysDiff = Math.floor(delta / 86400);
    delta -= daysDiff * 86400;
    let timeinHours = Math.floor((delta / 3600) % 24);
    delta -= timeinHours * 3600;
    let timeinMinutes = Math.floor((delta / 60) % 60);
    delta -= timeinMinutes * 60;
    let timeinSeconds = Math.floor((delta / 60) % 60);
    return `${daysDiff} days ${timeinHours} hours ${timeinMinutes} mins ${timeinSeconds} seconds`;
}
console.log(returnTime('11 July 2022'));



var someObject = {
    'part1' : {
        'name': 'Part 1',
        'size': '20',
        'qty' : '50'
    },
    'part2' : {
        'name': 'Part 2',
        'size': '15',
        'qty' : '60'
    },
    'part3' : [
        {
            'name': 'Part 3A',
            'size': '10',
            'qty' : '20'
        }, {
            'name': 'Part 3B',
            'size': '5',
            'qty' : '20'
        }, {
            'name': 'Part 3C',
            'size': '7.5',
            'qty' : '20'
        }
    ]
};

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        if(a[i]) {
            if(a[i] in o) o = o[a[i]];
        } else return;
    }
    return o;
}

console.log(Object.byString(someObject, 'part1.name'));
console.log(Object.byString(someObject, 'part2.qty'));
console.log(Object.byString(someObject, 'part3[0].name'));
            