var a =[];
var no = parseInt(prompt(" input number 1"));
a.push(no);
 var n1 = parseInt(prompt(" input number 2 "));
a.push(n1);
  var n2 = parseInt(prompt(" input number 3 "));
 a.push(n2);

console.log(a);

    if  ((a[0] >= a[1]) && (a[0] >=  a[2]))
    {
    alert(no + " is greater");
    }
    else if ((a[1] >= a[0]) && (a[1] >=  a[2]))
    { 
     alert(n1 + " is greater");
    }
    else { 
     alert(n2 + " is greater"); 
      }

      
/*var max=0;
for(i=0;i<arr.lenght;i=i+1){
  if(arr[i]>max)
   max=arr[i];
   alert("Largest in given array is"+ max);   
}*/

// Its a simple program to find the largest number .
/*var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
alert("The Largest Number in Array is " + largest);
*/


//we can find the largest number using math.max();

/*var array1 = [1, 3, 2];

alert("The Largest Number in Array is " + Math.max(...array1));*/



