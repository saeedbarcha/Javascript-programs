
//********       Nested while Loop

    // while loop inside while loop
    // on the single iteration of the outer while loop.the inner while loop will complete its all the iterations.s
    let a=0;
    while(a<4){
        document.write("<br><b>Outer while Loop :"+a+"</b>");
        a++; // outer loop incrementing part
        var b=0;
        while (b<6) {
            document.write("<br>Inner While loop :"+b)
            b++;  // inner loop incrementing 
        }
        document.write("<br>")
    }
