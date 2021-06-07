
// Rest Parameter
    //  Is case mai rest parameter k ek array bana ga
    // we can apply methods on rest parameter (forEach ,map,sort,pop etc)
   
    console.log("Rest Parameters");
    // (1)
        function restShow (...args){
            console.log(args);
        }
        restShow(10,20,30,40,50);

    // (2)
    // in this case 10 will assign to a and rest of the values will assign to rest parameter.
        function restShow1 (a,...args){
                console.log(a);
                console.log(args);
            }
            restShow1(10,20,30,40,50);
   
    // (3)
    //in this case 10 will assign to a , 20 will assign to b and rest of the values will assign to rest parameter  in the form of array.  

        function restShow2 (a,b,...args){
                console.log("A :", a);
                console.log("B :", b);
                console.log(args);
            }
            restShow2(10,20,30,40,50);

 //*********         Arguments object       **********
    //  Arguments object is look like an array but we can't apply any property and method opf array except .length on it.
    // we can apply .callee property on arguments object only,which return name of function,number of parameters and name of parameters.  

    //  (1)
    // function with no parameter
    console.log("\nRest Parameters");

    function fun1(){
        console.log(arguments)  //arguments object
    }           
    fun1(11,565,767,"saeed","noor",645,546);

    // (2)
    // with single parameter
    // In this case 11 value will assign to parameter a and all the argunments including first value will initilize to argunments object contains these values in the form of array.
    
    function fun2(a){
        console.log("A : ",a);
        console.log(arguments)  //arguments object
    }           
    fun2(11,565,767,"saeed","noor",645,546);

////********* function with multiple defined parameters
    function fun3(a,b){
        console.log("A : ",a);
        console.log("B : ",b);
        console.log(arguments)  //arguments object
    }           
    fun3(11,565,767,"saeed","noor",645,546);
