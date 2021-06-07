/////*****   let , var and const in javascript   *****/////

//****?????     var keyword   ????******/////
// when we declared any variable using Var keyword it will assing to window object as a property.
// we can create any variable  using var which contain any  data type as value

        //***** number
        var num=1234;
        document.write(num)
        var fnum=123.333;

        //***** string
        var name="saeed barcha";
        var char="s";

        //***** boolean
        var bool=true;
        var mybool=false;

        //***** null
        var netural=null;

        //***** object
        var obj={
            name:"saeed",
            age:"1234"
        }

        //*****  Array
        var myarr=[123,333,432,"saeed"];

    //*** we can re-assing/reinitilize variable declered using var any where
    //*** re-initilize in global level
      var myar1=[123,333];
       var myar1=['saeed','barcha']; //re-declered and re-initilized
        myar1=['saeed','barcha']; //re-initilized

 //*** redeclared and re-initilizing it any where.
 //befor function
    var subject="befor function subject : urdu";
    document.write("<br>"+subject); 
    var  cls="befor function class : 9th"; 
    document.write("<br>"+cls); 

    //inside function
     function change(){
         subject="inside function subject: english"; //re-initilized
         document.write("<br>"+subject); 
         var cls="inside function class : 11th"; //redeclared and re-initilizing
         document.write("<br>"+cls); // 
     }   
     change();
     ///after function
     var subject="after function subject: software engineering"; //redeclared and re-initilizing
     document.write("<br>"+subject); // change it in local level
     cls="After function class : 16th"; //re-initilized
     document.write("<br>"+cls); // 

//****?????     let keyword ES6    ????******/////
// we can create any variable  using let which contain any  data type as value
        //***** number
        let num2=1234;
        let fnum2=123.333;

        //***** string
        let name2="saeed barcha";
        let char2="s";

        //***** boolean
        let bool2=true;
        let mybool2=false;

        //***** object
        let obj2={
            name2:"saeed",
            age2:"1234"
        }

        //*****  Array
        let myarr2=[123,333,432,"saeed"];

        //***** null
        let nutural2=null;
        document.write("<br> let keyword :"+nutural2);
        // re-initilized in same scope
        nutural2="<br>saeed"; 
        document.write(nutural2);
        // let netural2="<br>rahimabadi"; //error
        // re-declaring variable in same scope using let keyword will not work..
        document.write(nutural2);

// we can re-initilize variable any where. that is created using let keyword. 
//but we can't redeclare in same scope 
//inside  block and lexical scope that variable defined and initilized in global scope using let keyword.

    let myfruit="mango";
    document.write("<br>"+myfruit);
    function func(){
         myfruit="apple"; //re-initilizing  in local scope
         document.write("<br>"+myfruit);
       // let myfruit;//re-declere and initilize // will not work
        document.write("<br>"+myfruit);
        function funct1(){
           let myfruit="<br>apple inside inner function"
            document.write(myfruit);
        }
        funct1()
    }
    func();

//****?????     const keyword ES6    ????******/////
// we can create any variable  using const which contain any  data type as value
        //***** number
        const num3=1234;
        const fnum3=123.333;

        //***** string
        const name3="saeed barcha";
        const char3="s";

        //***** boolean
        const bool3=true;
        const mybool3=false;

        //***** null
        const netural3=null;

        //***** object
        const obj3={
            name3:"saeed",
            age3:"1234"
        }

        //*****  Array
        const myarr3=[123,333,432,"saeed"];
              //myarr3="good";//error
      //  we can't redeclar or re-initilize it any where.
