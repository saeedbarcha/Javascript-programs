//*******   constructor   *****//
    function Student(name){
        this.name=name;
        this.age=20;
        this.subject="science";
        this.class="10th";
        this.fees=function(){
            return (100+200);
        }
    }
 
// to print any single value of any property or method of an object there three ways to print this values.
    //    document.write(saeed.name+"<br>");    // 1
    //    document.write(saeed['name']+"<br>"); // 2
    //    document.write(saeed["name"]+"<br>"); // 3

////******    creating instance of an objects using constructor   *****////
    var saeed=new Student("saeed");
    
////*****    applying for in loop to get all the values of the properties of this saeed named object.
    document.write("<br> for loop for printing  value of any property and methods <br>")

     for(var key in saeed){
         document.write("key : "+saeed[key]+"<br>");
     }

 /////*****   for loop for printing  value of properties not methods *****///////
 ///// for in loop iterate the key values of an object.
    document.write("<hr><br> for loop for printing only properties not methods <br>");

    // using for in loop
    for(var key in saeed){
        if(typeof saeed[key]!=='function'){
         document.write("key : "+saeed[key]+"<br>");
        }
     }

////****   for loop for printing  value of properties and not methods   *******/////
       document.write("<br> for loop for printing  properties and values <br>");

    // using for in loop
    for(var key in saeed){
        if(typeof saeed[key]!=='function'){
        document.write(key+": "+saeed[key]+"<br>");   
        }  
    }
 
////*****   to find the keys of any object   *****/////
document.write("<hr><br>to print the keys of any object <br>");
document.write("<br> "+ Object.keys(saeed)+"<br>");

// to find length of keys in object saeed
document.write("<br> "+ Object.keys(saeed).length+"<br>");
