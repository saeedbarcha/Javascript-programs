///// *********     function Declaration   *******

// don;t put semicolon (;) at the end function in function decleration.
// we can call a function decleration before declering it.
    document.write("<u>function Declaration</u><br>");
    disp(); // we can call function before declaration
    function disp(){
        document.write("<br>the Function Declaration ");
    };
///// *********     function calling   *******
    disp();

//*******     function Expression     ********
    // have to put semicollens end of function
    // Assining a function to a variable is known as function expression
    // have to call function after decleration not befor.
    // eg

    var myfun= function show(){
        document.write("<br>My name is saeed hussain barcha.")
    };
// to call function expression don't have to use function name.
// to call function expression have to use variable name and  circle brackets.
// don't have to call function expression before decleration
   myfun();
    document.write("<hr>")
