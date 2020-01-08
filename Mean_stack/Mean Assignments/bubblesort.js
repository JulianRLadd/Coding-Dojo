function bubbleSort(arr){
    if (arr.length<2){
        console.log("Array must be have at least 2 items")
        return false
    }
    for (let x=0;x<arr.length;x++){
        perfswap = false
        console.log(arr)
        for(let i=1;i<arr.length-x;i++){
            console.log(i)
            if(arr[i-1]>arr[i]){
                perfswap=true
                let temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
            }
        }
    if (!perfswap)
        return arr
    }
}

arr = [5,7,2,1,87,3,0,23]
bubbleSort(arr)


// O(N)
// O(1)
// O(log N)
// O(N²)
