
// simple example of the closure 
// in this case the function can use the variable defined and initilized outside.
 var a ="My name is saeed barcha rahimabadi";
 document.write("Using the outside variables inside function func1<br>")
 function func1(){
     document.write(a,"<br>");
 }
 func1();
 document.write("<hr>");

//*********    Outer Function Scope     **********
// inner function can access parameters ,properties and methods of outer function.
// inner function can access properties of outer function ,if properties in outer are initilize befor calling the inner function.
// inner function can access methods present in outer function ,if instance of methods is created/call in outer function befor calling the inner function.

 document.write("<hr> Outer function scope <br>");

 function func2(){
     function funct1(){
         var c="the number is = ";
         document.write(c +" "+ num);
     }
     num=1200; // need to initilize variable before calling inner function
     funct1();
     var num;

     var firstName ="saeed barcha"; // this variable is outside but not accessable in inner function
 }
func2();