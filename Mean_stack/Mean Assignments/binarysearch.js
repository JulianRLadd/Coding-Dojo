function binarySearch(arr,n){
    var check =(arr.length/2)
    if(arr.includes(n)){
        while (arr[check]!==n){
            if (arr[check]<n){
                check = Math.ceil(check*1.5)
            }
            if (arr[check]>n){
                check = Math.ceil(check/2)
            }
        }
        return check
    }else{
        return -1
    }
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))