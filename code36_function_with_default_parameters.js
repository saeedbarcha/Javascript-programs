/////********    function with default parameter

// problems in default parameters in javascript
// if we pass the value to default parameter the it will update the value if we donot pass the value to the default variable the it will show the default value.

function func1(a,b,c=10){
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}
// calling the func1
document.write("In this case the value of the C will be the default one");
func1(123,33);
document.write("<hr> ")

document.write("In this case the value of the C will be shown updated one the screen");
func1(111,222,333)

//Agar hum default parameter k bad variable ko define kara.
// or function calling krtay waqat default tak he pass karai to ..
// default k baad any wala parameter k value mai undefined aiya ga

document.write("<hr> ")
document.write("In this case the value of the B will be shown updated one the screen and c will be come undefined");

function func2(a,b=10 ,c){
    document.write("<br>")
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}
func2(10,20);
// agar hum ny default parameters rakhna ha to on saroon ko last mai rakhna ha...

//for null value in default parameter
document.write("<hr>");
document.write("null value in default parameter")

function func4(a,b,c=null){
    document.write("<br>");
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}

func4(12,33)

//  Array  in default parameter
document.write("<hr>");
document.write("Array value in default parameter")

function func5(c=[1,2,4,5,6]){
    document.write("<br>");
    // to print a single element of index 2 o array C
    // document.write("C :"+c[2] +"<br>");
    document.write("C :"+c +"<br>");

}
document.write("Array in default parameter")
func5()
document.write("<hr>")
document.write("updated the default Array.");
func5([100,200,3333,444,555,666]);

