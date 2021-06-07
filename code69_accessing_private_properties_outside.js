    // we can access properties and methods by initilizing it to another public variable inside same function.
    let Mobile=function (name,color,mnum){
        this.name=name;
        this.color=color;
        this.mnum=mnum;
        var price=40000; //this property is not accessable by objects 
        this.pri=price;// now we can access the value of price indirectly in objects 
        this.sellprice=function(){
            return price;
        }
    }

    let samsung=new Mobile("samsung","red","123s7");
    document.write("<hr><br>name: " +samsung.name);
    document.write("<br>color: " +samsung.color);
    document.write("<br>model number: " +samsung.mnum);
    document.write("<br>color: " +samsung.color);
    document.write("<br>we have accessed private property.....sellprice: " +samsung.sellprice());
    // we cant access a private property outside
    document.write("<br>price: " +samsung.price);  //result will be undefined
    // we can access it indirectly by accising it it to another property or method
    document.write("<br>price: " +samsung.pri);  //now we can access price by using pri property
