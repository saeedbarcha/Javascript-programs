
   //************    If Statement  in javaScript   ****************

   // IF statement's body will execute if and only if condition returns true 
   // if we don't write the curly brackets in IF statement , it will consider next line of code as a body part.
    let a=10;
        if (a==10)
        document.write("<br>Value of a is = "+a);
        document.write("<br>next line which is not body part of first IF statement.")
        
        let b=12;
        if (b==10)  
        document.write("<br>value of b is = "+b);
        document.write("<br>next line which is not body part of second IF statement.")

    // this document.write will never execute becaues b==12 not b==10
    // If Statement with logical operaters in javaScript
        var a1=10;
        var b1=20;
        if((a1==10)&&(b1==20))
        document.write("<br>this IF statement with logical && operaters returns true");// all the condition are true
    
    // this will never show on browser because of the b2==2 which not true
        var a2=10;
        var b2=20;
        if((a2==10)&&(b2==2))
        document.write("<br>this IF statement with logical && operaters returns false");// it is just because of all the condition are not true

    // taking input from user through prompt function and use it in th IF condition
        document.write("<br> taking input from user through prompt function and use the enter value in if statement");
        var input =prompt("Enter any number:");
        if (input == 10)
        document.write("<br>the Number you have enter on the prompt function is Equal to 10.")
