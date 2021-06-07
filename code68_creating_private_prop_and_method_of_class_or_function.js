
//**** creating private properties and methods *****//
// using let,var and const keyword we can create private properties inside constructor function.
    var Student= function (name,age,rollnum){
        this.name=name;                //public property
        this.age=age;                  //public property
        this.rollnum=rollnum;          //public property

        var address="rahimabad"        //private property
        var performance=function(){    //private  method
            return ("good");
        }
        this.fees=function(){          //public method
            return  1000;
        }
    }

    var saeed=new Student("saeed",81,11);
    document.write("<hr>in this case the address and performance will never inherit from the parent constructor<br>");
    document.write("<br>"+saeed.name);
     document.write("<br>"+saeed.age);
     document.write("<br>"+saeed.rollnum);
     document.write("<br>"+saeed.fees());
     document.write("<br>"+saeed.address+" : address property is not accessable outside");   //return undefined 
     document.write("<br>"+saeed.performance()+"performance is not accessable outside"); //return is not a function in console
