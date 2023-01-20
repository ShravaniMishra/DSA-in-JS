function merge(arr1,arr2){
 let ans =[]
 let i=0
 let j=0
 while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        ans.push(arr1[i])
        i++
    }else{
        ans.push(arr2[j])
        j++
    }

 }
 while(i<arr1.length){
    ans.push(arr1[i])
    i++
 }
 while(j<arr2.length){
    ans.push(arr2[j])
    j++
 }
 return ans
}
function mergeSort(arr){
if(arr.length<=1) return arr
let mid = Math.floor(arr.length/2)
let left = mergeSort(arr.slice(0,mid))
let right = mergeSort(arr.slice(mid))
return merge(left,right)

}
console.log(mergeSort([8,2,5,9,1,6]).join(" "))