
    //IIFE in javascript 
    // self executing function
    //avoiding global variables
    // two parts of IIFE function in javaScript.
    // first part contains anonymous function 
   
////*****  general function/function Expression.
    function fun(){
        document.write("This is Regular function");
    }
    fun();

////*****  converting it into IIFE function
     //we can't call IIFE function in our code any where
     // we have to call  IIFE function at same place where we have declared it or defined.
        ( function (){
            document.write("<hr>Simple IIFE function");
            })();

        // variables defined inside IIFE function are limited to used to that function

////***** An IIFE function inside IIFE function.

        ( function (){  //outer IIFE function
            document.write("<hr>Outer IIFE function");
        
        (function (){   // inner IIFE function
            document.write("<br>Inner  IIFE function.");})() 
            })();

//*****   IIFE function with Variables 
        (function (){
            var a="my name is barcha";
            document.write(a);
        })()
        // document.write(a); // a :-error occur not defined 

//*****   IIFE function with single parameters 
        (function (a){
            document.write(a);
        })("pass  Parameters to IFFE function");

//*****   IIFE function with multiple parameters 
        (function (a,b){
            document.write(a+b);
        })(100+200);

