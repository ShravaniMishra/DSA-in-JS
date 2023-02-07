let arr = [1,5,4,2,9,9,9]

let i=0;
j=0;
n=arr.length;
sum=0;
target=3;
max=-Infinity;

while(j<n){
    sum+=arr[j]
    let x = j-i+1
    if(x === target){
    if(sum>max) max=sum
    sum-=arr[i]
    i++
    }
    j++
}
console.log(max)