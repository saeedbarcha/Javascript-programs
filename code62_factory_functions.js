
    // factory (function which returns an object) functions without parameters
    function car(){
        return  {
            name:"alto",
            speed:function (){
                return 12+3232;
            }
        };
    };
    // 
    var mehran= car();
//now we can create multiple objects using this function (car) which returns an object with properties and methods.
//we can create an objects without using classes and new keyword
    document.write("factory functions without parameters")
    
    document.write("<br>"+mehran.name+"<br>");
    document.write(mehran['name']+"<br>");

    document.write(mehran.speed()+"<br>");
    document.write(mehran['speed']()+"<br><hr>");


// factory functions with parameters
document.write("<hr><br>factory functions with parameters")

function mob(name,model,color,price){
    return {
        name:name,
        model:model,
        color:color,
        price:function(){
            return price+10;
        }
    }
}

// for iphone
document.write("<br> <u><b>for iphone</b></u>")

    var iphone=mob("iphone",123,"red",10);
    document.write("<br> Name: "+iphone.name);
    document.write("<br> Model: "+iphone.model);
    document.write("<br> color: "+iphone.color);
    document.write("<br> price: "+iphone.price());


    document.write("<br><hr>")
// for lg
document.write("<br> <u><b>for lg</b></u>")

var lg=mob("lg","l900","green",10000);
    document.write("<br> name: "+lg.name);
    document.write("<br> model: "+lg.model);
    document.write("<br> color: "+lg.color);
    document.write("<br> price: "+lg.price());

// for nokia
document.write("<br><hr> <u><b>for nokia</b></u>")

var nokia=mob("nokia","1300","yellow",1111);
    document.write("<br> name: "+nokia.name);
    document.write("<br> model: "+nokia.model);
    document.write("<br> color: "+nokia.color);
    document.write("<br> price: "+nokia.price());
