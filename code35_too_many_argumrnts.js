
// to many function arguments
 function fun1(a,b){
        document.write("A :"+a +"<br>");
        document.write("B :"+b+"<br>");
        // this brings error .it is just because of we don't have passed a parameter c while declaring the function.
        // document.write("C :"+c+"<br>");
 }
 fun1(10,20,30);

// error occur in the above is handelling through this method
function fun2(a,b){
        document.write("A :"+a +"<br>");
        document.write("B :"+b+"<br>");
    // in this case we can access the third argunment
        document.write("C :"+arguments[2]+"<br>");
 }
 fun2(111,22,16344);
