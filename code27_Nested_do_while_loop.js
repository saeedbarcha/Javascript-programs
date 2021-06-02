//**********        Nested do while loop in javaScript

    // in nested do while loop.on the single iteration of outer do while loop the inner while loop will complete its all the iterations.
    // in nested do while loop. both the outer and inner do body will execute once
    var a=0;
    do{
        document.write("<b>this is Outar DO_While Loop: "+a+"<br></b>");
        a++;
        var b=0
        do{
            document.write("This is Inner Do While Loop : "+b+"<br>");
            b++;
        }while (b<9);
        document.write("<br>")
    }while(a<5);
