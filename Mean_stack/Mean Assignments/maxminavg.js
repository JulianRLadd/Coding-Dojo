array=[1,-2,9,4];


function maxMinAvg(array){
    max = array[0];
    min = array[0];
    sum = array[0];
    for(i =0;i<array.length; i++){
        sum+=array[i];
        if (max<array[i]){
            max= array[i];
        }
        if (min>array[i]){
            min = array[i];
        }
    }
    avg=Math.round(sum/array.length)
    console.log("The minimum is "+min+", the maximum is "+max+", and the average is "+avg+".")
}