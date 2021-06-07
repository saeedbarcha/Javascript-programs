//////******      variable hoisting in javaScript  *******

//javascript engine only hoist the declaration part not initilizing part.

     var a=200;
     document.write(a);
      // while compiling
        //    var a;  //declaration part
        //    a=200;  // initilizing part
        //    document.write(a) // accessing line of code

//*********    Not hoist initilizing part 
   //(1)
    var b;
    document.write(b); // b is not yet initilize due to which it return undefined.
    b=100;
      // while compiling
        //    var b;
        //    document.write(b); 
        //    b=100; 

   //(2)
    document.write(c); // c is not yet initilize due to which it return undefined.
    var c;
    c=111;
      // while compiling
        //    var c;
        //    document.write(c); 
        //    c=111; 
   //(3)
    document.write(d); // d is not yet initilize due to which it return undefined.
    var d=122;
      // while compiling
        //    var d;
        //    document.write(d); 
        //    d=122; 

//********* in case of multiple variables

    var name=10;
    document.write("Name:"+name+" Age:"+age);// age will return undefined here
    var age;
    age=100;
      // while compiling
        //    var name;
        //    var age;
        //    name=10; //initilizing part is at same place
        //    document.write("Name:"+name+" Age:"+age);// age will return undefined here
        //    age=100; //initilizing part is at same place

/////****** we can use variable before declaring them in javaScript is due to hoisting
    num=121212;
    document.write(num);
    var num;
      // while compiling
        //    var num;
        //    num=121212;
        //    document.write(num);

//****** in case of functions use variables outside    ******
    var myName="saeed barcha";
    document.write(myName+"<br>")
    // function which use the above variable
    function showMyName(){
         document.write(myName+"<br>")
    }
    showMyName();
      // while compiling
        //   var myName;
        //   myName="saeed barcha";
        //   document.write(myName+"<br>")
        //   function showMyName(){
        //    document.write(myName+"<br>")
        //   }

//*****     Error undefined returns 
     var myName1="saeed barcha";
    document.write(myName1+"<br>");
    // function which use the above variable
    function showMyName1(){
         document.write(myName1+"<br>"); //return undefined
         var myName1="rahimabadi";
    }
    showMyName();
      // while compiling
        //  var myName1;
        //  myName1="saeed barcha";
        //  document.write(myName1+"<br>")  
        //  function showMyName1(){
        //  var myName1;           //difference
        //  document.write(myName1+"<br>")  //return undefined treating myName1 variable inside function as a block scope /new variable
        //  myName1="rahimabadi";  //difference
        //  }
