
    //////*****   object in javascript   *****/////

    let myObj={
        name:"saeed", // property
        age:"1000",    // property
        weight:function (){   //method
            return this.age/2;
        }
    };
    document.write(myObj.name+"<br>");
    document.write(myObj.age+"years<br>");
    document.write(myObj.weight()+"kg");
