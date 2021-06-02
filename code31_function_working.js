
    // how function works in javaScript
        
        document.write("<br>This is First line .") // line1
        function func1(){
            document.write("<br>This line is Inside the function. but this function is defined between line1 and line2 .But this Function is call after line2.");
        }
        document.write("<br>This last line.") // line2
        // calling function
        func1();  //where we call function at that place it execute its body.not where it is declared
