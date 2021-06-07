
    // Arrow function in javaScript
    // shorter syntax
    // fat arrow
    //  eg
    document.write("Arrow Function has shorter Syntax as compair to function Expression<br><br>");
// function expression 
        var fun = function func1(){
            document.write("Function Expression<br>");
        }
        fun()

 // (1) ******  Arrow function initilizing to a variable
        var func =()=>{ document.write("Arrow Function");};
        func();

// (2) ******  don't contain any name
       var func =()=>{   //no any name
           document.write("Arrow Function");
           }; //tup semicolon
        func();
      
// (3) *******  if function return single line of code then it is not necessary to write curly brackets
        var func =()=>document.write("Arrow Function");
        func();

        // but curly brackets {} are necessary to write
          var func =()=>{
              // contains multiple statement
              document.write("Arrow Function");
              document.write("Arrow Function");
              document.write("Arrow Function");
          }
        func();


// (4) ******* if there is single parameter it is not nessory to write circle brackets
     var func = a =>document.write("Nmae: "+a);
        func("barcha");

// (5) *******  cant call befor decleration of the function
// eg   
        myfun(); // will not work
        var  myfun =()=>{
            return "saeed barcha rahimnabadi"
        };

// (6) ****** dont break line between circle brackets and fet arrow
        var func = () // not to break
        => document.write("Nmae: "+a);
        func("barcha");

// (7) if there is no any parameter then we circule barckets are compulsory to write.
       var func = () => document.write("Nmae: "+a); //need to write circle brackets
        func("barcha");

// (8) Arrow function with defaul parameter
     var func = (a=100000)=> document.write("Nmae: "+a);// a is defaul parameter here
        func("barcha");
              document.write("Arrow Function");

// (9) Arrow function with rest parameter
     var func = (a , ...args)=> document.write("Nmae: "+a); // ...args is rest parameter here
        func(1,2,3,3,3,3,3,33333,33222);

// (10) If a arrow function contains a single statement in return then it is not necessory to write the keyword return and curly brackets

//single parameter 
  var func2 = a => {return a;}
    func(1);

    //*********
    var func3 = a => a; // a = {return a}
    func(100);

//with multiple parameter 
   //var func4 = (a+b) => {return a+b;}
    //func4(1,3);

    //*********
    //var func2 = (a+b) => a+b;   // a+b = {return a+b}
    //func(100);
 
