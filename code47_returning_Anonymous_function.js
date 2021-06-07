/////********   function  returning anonymous function  with parameters
    function disp1(a){
        return function (b){
         return "<br>"+a+b;
        };
    }
    //var bbb=disp(10);   //10 is for parameter of first function
    //document.write(bbb(20));  //20 is for parameter of second function
   
   document.write(disp1(10)(20))

/////******** returning anonymous function with parameters
    
    function disp(){
        return function (){
         return "<br>hello";
        };
    }
    
    var bbb=disp();   //only to initilize it
    document.write(bbb());  //20 is for parameter of second function

    //document.write(disp()())
