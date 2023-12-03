// 1.Print odd numbers in an array -anonymous function

(function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" "
        }
    }
    res+=a[a.length-1]
    console.log(res);
})([1,2,3,4,5,7,8,9]);

// 1.Print odd numbers in an array -IIFE function

var odd=function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" ";
        }
    }
    res+=a[a.length-1];
    return res;
}
console.log(odd([1,2,3,4,5,7,8,9]));

// 2. Convert all the strings to title caps in a string array-anonymous function

var str=function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 return res;
 }
 console.log(str("hello', 'world', 'javascript', 'programming"));

 // 2. Convert all the strings to title caps in a string array-IIFE function

 (function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 console.log(res);
 }) ("hello', 'world', 'javascript', 'programming");

 // 3.Sum of all numbers in an array - anonymous function.

 var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9]))

// 3.Sum of all numbers in an array - IIFE function.

// (function(a){
//     var  res=0;
//     for(i=0;i<a.length;i++)
//     {
//             res+=a[i]
//     }
//     console.log(res);
// })([1,2,3,4,5,7,8,9]);

// 4.Return all the prime numbers in an array - anonymous function.

var sum =function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9]))

// 4.Return all the prime numbers in an array - IIFE function.

// (function(a){
//     var  res="";
//     for(i=0;i<a.length;i++)
//     {
//         var count=0;
//         for(j=1;j<=a[i];j++)
//         {
//             if(a[i]%j===0)
//             {
//                 count++
//             }
//         }
//         if(count==2)
//         {
//             res+=a[i]+" "
//         }
//     }
//     console.log(res);
 
// })([1,2,3,4,5,6,7,8,9]);

// 5.Return all the palindromes in an array - anonymous function.

var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind(['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']))

// 5.Return all the palindromes in an array - IIFE function.

// (function(a){
//     var res="";
//     var ans="";
//     for(i=0;i<a.length;i++)
//     {
//         res+=a[i];
//         var count=0
        
//         for(j=0;j<res.length;j++)
//         {
//             if(res[j]===res[((res.length-1)-j)])
//             {
//                 count++
                
//             }
//         }
//         if(count===res.length)
//         {
//             ans+=res+" "
//         }
//         res="";
//     }
//     console.log(ans);
 
// }) (['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']);

// 6 . Return median of two sorted arrays of same size - anonymous function.

var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
}
console.log(arr([1,2,3,4,5],[6,7,8,9,10]));

// 6 . Return median of two sorted arrays of same size - IIFE function.

(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    
}) ([1,2,3,4,5],[6,7,8,9,10]);

// 7.Remove duplicates from an array - anonymous function.

var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// 7.Remove duplicates from an array - IIFE function.

(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

// 8. Rotate an array by k times - anonymous function.

var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2))

// 8. Rotate an array by k times - IIFE function.

// (function(a,k){
//     n=a.length;
//  c=[];
//   d="";
//   for(i=0;i<n;i++)
//   {
//       c[(i+k)%(n)]=a[i]
//   }
//   for(i=0;i<c.length-1;i++)
//   {
//       d+=c[i]+" "
//   }
//   d+=c[c.length-1]
//   console.log(d);
// }) ([1,2,3,4,5],2);

