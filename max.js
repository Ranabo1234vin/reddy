let x=[1,2,5,9,3,6,10,4]
let max=0;
for(let i=0;i<=x.length;i++)
{
    if(max<x[i])
    {
        max=x[i]
    }
}
console.log(max);