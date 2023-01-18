function solve(N,arr){
    //write code here
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(arr[j]>arr[j+1]) {
                swap(arr,j,j+1)
            }
           
        }
       
    }
     console.log(arr.join(" "))
}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
