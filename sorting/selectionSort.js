let arr = [8,2,5,9,1,6]
for(let i=0;i<arr.length;i++){
    let min =i
    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
            
        }
    }
    swap(arr,i,min)
}
console.log(arr.join(" "))

function swap(arr,i,j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}