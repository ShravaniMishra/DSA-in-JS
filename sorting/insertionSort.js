let arr = [8,2,5,9,1,6]
for(var i=0;i<arr.length;i++){
    var insert = arr[i]
    for(var j = i-1;j>=0 && arr[j]>insert;j-- ){
       arr[j+1]=arr[j]
    }
    arr[j+1] = insert
}
console.log(arr.join(" "))