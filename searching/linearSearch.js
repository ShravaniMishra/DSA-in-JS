function lS(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i
        }
       
    }
    return -1
}
console.log(lS([6,27,82,22,98,26,2], 22))