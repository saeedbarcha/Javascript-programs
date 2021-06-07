// ways of creating objects in javascript
    // ***** for creating single object *****///
    
//    (1)   (object literals) declering and initilizing sperately
      document.write(" (1)   (object literals) declering and initilizing sperately <br>")
  
      var student={};       //declering
      student.name="saeed"; //initilizing
      student.age=30;       //initilizing
      document.write(student.name+"<br>");

//    (2)   (object literals) 
      document.write("(2)   (object literals) declering and initilizing in same step <br>")

         var players={       //declering and initilizing
                    name:"noor", 
                    age:30      
                    };
     document.write(players.name+"<br>");

//    (3)   (object constructor) 
      document.write("(3)(object constructor) declering and initilizing sperately<br>")

      var employee=new Object();
      employee.name="wali";
      employee.age=30;
      document.write(employee.name+"<br>");
      document.write(employee.age+"<br>");     
      
 // ***** for creating multiple+ object *****///

 //    (4)   (through factory functions) with and without parameters 
 document.write("(4) (through factory functions) with and without parameters <br>")

    function Mobile(name){
        return {
               name:name,
               price:"1000"
               }
    }
    var samsung=Mobile("samsung");
    document.write(samsung.name+"<br>");
    document.write(samsung.price+"<br><br>");

    var lg=Mobile("lg");
    document.write(lg.name+"<br>");
    document.write(lg.price+"<br>");

    //    (5)   (through constructor function) with and without parameters 
 document.write("(5)   (through constructor function) with and without parameters  <br>")

function Car(name){
           this.name=name;
           this.color="yellow";
           this.price="1000";
           }

            //    first object
    var alto=new Car("Alto");
    document.write(alto.name+"<br>");
    document.write(alto.color+"<br>");
    document.write(alto.price+"<br><br>");

            //    second object
    var mehran=new Car("Mehran");
    document.write(mehran.name+"<br>");
    document.write(mehran.color+"<br>");
    document.write(mehran.price+"<br><br>");

