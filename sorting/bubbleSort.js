let arr = [8,2,5,1,7,6]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1)
        }
    }
} 
console.log(arr.join(" "))



function swap(arr,i,j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}