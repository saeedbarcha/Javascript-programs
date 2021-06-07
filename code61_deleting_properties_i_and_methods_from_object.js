// deletinp properties and methods from oject
    var fees={ name:"saeed",
               fname:"issa khan",
               subject:"web development",
               age:function (){
                   return "100 years"
               }
              }

        console.log(fees)
        
    document.write("Nmae= "+fees.name+", F-Name= "+fees.fname+", Subject= "+fees.subject+", Age= "+fees.age()+"<br>")
////*****    deleting object members / key values from object
    //delete operator is use to delete any property and methods from any object
 
    //***deleting property from an object
    delete fees.name;
   
  //***deleting method from an object
    delete fees.age;

    console.log(fees)
    document.write("Nmae= "+fees.name+", F-Name= "+fees.fname+",Subject= "+fees.subject+", Age= "+fees.age+"<br>");
