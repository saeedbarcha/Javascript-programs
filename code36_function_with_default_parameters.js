
//***********   problems in default parameters in javascript
//while declaring function assign value to parameter is known as default parameter

// if we pass value to default parameter the it will update the value. if we don't pass the value to the default variable then it will show the default value.

function func1(a,b,c=10){
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}
// calling the func1
document.write("In this case the value of the C will be the default one<br>");
func1(123,33);

document.write("<br>In this case the value of the C will be shown updated one the screen<br>");
func1(111,222,333)

// if we define a parameter after the default parameter and we pass values to parameters from left to default parameter.then next to default parameter will be shown as undefined.
document.write("<br>In this case the value of the B will be shown updated one the screen and c will be come undefinedbr>");

function func2(a,b=10 ,c){
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}
func2(10,20);

//********         for null value in default parameter
document.write("<br>null value in default parameter<br>")
function func4(a,b,c=null){
    document.write("A :"+a +"<br>");
    document.write("B :"+b+"<br>");
    document.write("C :"+c+ "<br>");
}

func4(12,33)

//*********       Array  in default parameter
document.write("<hr>");
document.write("Array value in default parameter")

function func5(c=[1,2,4,5,6]){
    document.write("<br>");
    // to print a single element at index 2 in array C
    document.write("C :"+c[2] +"<br>"); // printing single element
    document.write("C :"+c +"<br>");    // to print whole array
}
func5()
document.write("<hr>")
//updated value of Array in default parameter.
document.write("updated the default Array.");
func5([100,200,3333,444,555,666]);

