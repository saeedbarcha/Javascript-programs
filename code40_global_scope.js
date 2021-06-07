
///////*******    globel Variable   *********/////////
//globel variable is accessable from anywhere
         document.write("Accessing Globel Variable (i) inside Function");
            var i="i am a Globel Variable(i).<br>";  // i is globel variable
            function func1(){
                document.write("variable (i) Used inside Function<br>: " , i); // i is used inside function
            }
            // function calling
            func1();

            document.write("<br>we can use i variable anywhere .inside function and outside function  i. <br>");
            document.write(i);

//*********      we can use it in multiple functions
        document.write("<hr>")
        function func2(){
            document.write("i Variable Used in second function :<br>",i)
        }
        func2();
                
//*********        we can use it to inside any block 
// eg
        document.write("<hr>")
        document.write("i variable inside If statement<br>");
            if(true){
                document.write(i) //inside block
            } 

//////////////**********   local Variable   **************////////////

// we can not access th local variable outside the function or block.
// we have to use it with in the function where it has been declered or in subfunction
        document.write("<hr> Local Variables<br>")
        function fun(){
            var j="local variable 10000001.<br>"
            document.write(j);
            //subfunction/nested function
             function funct4(){
                 document.write(j) // j is accessable
             }
        }
        fun();

      //  document.write(j);  // this we cause an error

//*********        we can't use it inside any block 
// eg
        document.write("<hr>")
        document.write("j variable inside If statement<br>");
            if(true){
            //    document.write(j) //inside block
            } 

//*************way of writing globel variable inside function block.
// if don't use var key word while declaring variable it will become globel variable.and it can be accessable from any where in the code
             function show(){
                 a=1111111000;
                 document.write(a)
             }
           // docment.write(myfunt())
            show() // to use that globle variable which  is defined inside function. it is compulsory to call that function once 
           document.write("<br>"+a) 
           // now we can access this variable from any where in code
