function bS(arr,val){
let start = 0
let end = arr.length -1
let middle = Math.floor((start+end)/2)
while(arr[middle] !== val && start<=end){
    if(val<arr[middle]){
        end = middle -1
    }
    else{
        start=middle+1
    }
    middle = Math.floor((start+end)/2)
}
if(arr[middle]===val){
    return middle
}
return -1
}
console.log(bS([1,2,8,9,34,36,48,59,234,390],59))