    // constructor is special type of function creates a new instance of an object for use.
    // name of constructor should start with capital letter 
    // constructor without parameter.

    document.write("constructor without parameters")
    // this key word is used to define properties in constructor to public them.
    // this keyword point the instance of new created object.
        function Mobile(){
        this.name="iphone";
        this.color="red";
        this.price=function(){
            return (10+20);
        }
        }

    // this keyword points iphone inthis case
    // new has to use to create an instance of an object

// initilizing iphone variable using Mobile() constructor
  var iphone=new Mobile();
// fetching properties
    document.write("Accessing properties<br>"+iphone.name+"<br>");
    document.write(""+iphone["name"]+"<br>");
    document.write(""+iphone['name']+"<br>");
// fetching methods
    document.write("<br>Accessing methods<br> "+iphone.price()+"<br>");
    document.write(""+iphone['price']()+"<br>");
    document.write(""+iphone["price"]()+"<br>");

// initilizing samsung variable using Mobile() constructor
var samsung=new Mobile();
// accessing properties
    document.write("Accessing properties<br>"+samsung.name+"<br>");
    document.write(samsung["name"]+"<br>");
    document.write(samsung['name']+"<br>");
// accessing methods
    document.write("<br>Accessing methods<br> "+samsung.price()+"<br>");
    document.write(samsung['price']()+"<br>");
    document.write(samsung["price"]()+"<br>");

///////////////   constructor with parameters    /////////////

    document.write("<br>constructor with parameters")
    // this keyword is used to define properties in constructor which we want to public.
    // this keyword point instance of new object.
    function Mobile(name,color,price){
    this.name=name;
    this.color=color;
    this.price=function(){
        return price;
     }
    }

// initilizing iphone variable using Mobile() constructor
var iphone=new Mobile("iphone","red",100010);
// accessing properties
    document.write("Accessing properties<br>"+iphone.name+"<br>");
    document.write(iphone["name"]+"<br>");
    document.write(iphone['name']+"<br>");
// accessing methods
    document.write("<br>Accessing methods<br> "+iphone.price()+"<br>");
    document.write(iphone['price']()+"<br>");
    document.write(iphone["price"]()+"<br>");

// initilizing samsung variable using Mobile() constructor
var samsung=new Mobile("samsung","white",40040);
// accessing properties
    document.write("Accessing properties<br>"+samsung.name+"<br>");
    document.write(samsung["name"]+"<br>");
    document.write(samsung['name']+"<br>");
// accessing methods
    document.write("<br>Accessing methods<br> "+samsung.price()+"<br>");
    document.write(samsung['price']()+"<br>");
    document.write(samsung["price"]()+"<br>");
