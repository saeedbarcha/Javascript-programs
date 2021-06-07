
//******** declaring and initilizing an object 

    var fees={ name:"saeed",
    total:function (){return (123+4365+6465);
                      }
             }
    
//******** accesing methods from object
    document.write(fees.total()+"<br>") // using dot operator 
    document.write(fees['total']()+"<br>") // using square brackets and single quotes 
    document.write(fees["total"]()+"<br>") // using square brackets and double quotes 

