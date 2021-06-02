
///////********    argument object in javaScript    **********
    function fun1(name){
        document.write("<br><br> My Name is :"+name);        
    }
    // calling func1 function
    fun1("saeed")
   document.write("<hr>");

 /////*********  printing the arguments using arguments object   *********
    function func1(name){
        //document.write("<br><br> My Name is :"+name);
        document.write("<br><br>My Name is :"+arguments[0]);// name is placed at index 0
    }
    // calling func1 function
    func1("saeed")

//**********   undefined return for index 1 ***********
        function func2(name){
            document.write("<br><br>My Name is :"+arguments[1]);
        }
        // calling func2 function
        func2("saeed")
   
//////******   for multiple arguments   **********
        // document.write("<br><br>function with multiple parameters")
        // function detail(name,age,height,weight){
        //     document.write("<br>My Name is:"+name)
        //     document.write("<br>My Age is:"+age)
        //     document.write("<br>My height is:"+height)
        //     document.write("<br>My Weight is:" +weight)
        // }
        // detail("saeed",33,5,59);

///// ***** Accessing parameters of function using ag object 
        document.write("<br><br>function with multiple parameters")
        function detail(name,age,height,weight){
            // document.write("<br>My Name is:"+name)
            // document.write("<br>My Age is:"+age)
            // document.write("<br>My height is:"+height)
            // document.write("<br>My Weight is:" +weight)
      
            document.write("<br>My Name is:"+arguments[0])
            document.write("<br>My Age is:"+arguments[1])
            document.write("<br>My height is:"+arguments[2])
            document.write("<br>My Weight is:" +arguments[3])
            }
            detail("saeed",33,5,59);

            document.write("<hr>");

/////**********    changing the incoming value of parameter using parameters name 
      function funOne(name){
        // change the arguments inside function
        // using parameters name 
          name="Rahimabadi";
          document.write("<br><br>This  my family : " +name)
      }
       funOne("Barcha");

/////**********    changing the incoming value of parameter using agruments object
    function funTwo(subject){
        arguments[0]="urdu";
        document.write("<br><br>My faverit Subject is :"+subject)
    }
    funTwo("software engineering")
    document.write("<hr>");

// using .length property 
// .length property is use to find the number of parameters in function
    function funThree(a,b,c,d){
    document.write("number of argumrnts :"+arguments.length);
    let sum = a+b+c+d;
    document.write("<br>sum of the for  numbers is: "+sum )
    }
    funThree(100,3,22,4);
    document.write("<hr>");

//////********     usage  of agruments object in function with parameter
    function myfun1(fname,midname,lastname,address,age){
        
        arguments[0]="kabul KK" //changing the parameter inside function
        for (let i=0; i<arguments.length ;i++){
            document.write(arguments[i]+"<br>");
            }
    }
    myfun1("adeel","Abbas","Barcha","Rahimabadi",111);
    document.write("<hr>");

//////********     usage  of agruments object in function without parameter
    function myfun2(){
        for (let i=0; i<arguments.length ;i++){
    document.write(arguments[i]+"<br>");
        }
    }
    myfun2("adeel","Abbas","Barcha","Rahimabadi",111); 
    document.write("<hr>");

//arguments.callee property of agruments object 
document.write("<hr><br> this property gives us information about that specific function. <br> what is the name of the function.How many parameters are their and which parameters are their... ets.<br><br>");

function myfun3(fname,midname,lastname,address,age){
    document.write(arguments.callee) // callee will return
        }                            // function name myfun3
    myfun3("adeel","Abbas","Barcha","Rahimabadi",111); // number of parameters 5
    document.write("<hr>");               //parameters adeel,abbas , barcha,rahimabadi,111

