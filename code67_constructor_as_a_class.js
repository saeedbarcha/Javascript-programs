    // creating class through custom constructor
    // name should start with capital latter
    // main class contains properties and methods  

         //when we are declaring any property or method using this keyword  it will become public property.that property and method will be accessable for objects created using this constructor function.

    var Mobile=function (name,modNum,color,price){ 
      this.name=name;                              
      this.color=color;
      this.modNum=modNum;
      this.size="5Inc"
      this.sellPrice=function (){
          return  price; 
              };
      this.companyPrice=function (){
          return  600+price; 
              };
    };
 

// creating object named with Qmobile 
// Qmobile is child class which inherit methods and properties from parent class(Mobile)
     var Qmobile=new Mobile("Qmobile","m1234","red",60000);
     document.write("<hr><br>"+Qmobile.name);
     document.write("<br>"+Qmobile.modNum);
     document.write("<br>"+Qmobile.color);
     document.write("<br>"+Qmobile.size);
     document.write("<br>"+Qmobile.sellPrice());
     document.write("<br>"+Qmobile.companyPrice());

// creating object named with samsung which inherit all properties and methods from parent class (Mobile)
     var Samsung=new Mobile("Samsung","s5534","green",20000);
     document.write("<hr><br>"+Samsung.name);
     document.write("<br>"+Samsung.modNum);
     document.write("<br>"+Samsung.color);
     document.write("<br>"+Samsung.size);
     document.write("<br>"+Samsung.sellPrice());
     document.write("<br>"+Samsung.companyPrice());

// we can easily make objects using this constructor function
