function MaximumPalindrome(arr) {
    let length = 0, T = Array(arr.length).fill(0).map(() => Array(arr.length).fill(0));
    for(let i = 0; i< arr.length;i++) {
        T[i][i] = 1;
    }
    for(let l =2; l <= arr.length; l++) {
        for(let i = 0; i < arr.length - l + 1; i++) {
            let j = i + l - 1;
            if(l ==2 && arr[i] === arr[j]) {
                T[i][j] = 2
            } else if(arr[i] === arr[j]) {
                T[i][j] = 2 + T[i + 1][j -1];
            } else T[i][j] = Math.max(T[i+1][j], T[i][j -1]);
        }
    }
    return T[0][arr.length - 1];
}

console.log(MaximumPalindrome(['a','b','b','a','b','b','a']));