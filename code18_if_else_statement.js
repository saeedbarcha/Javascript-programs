
    // if else statement in javaScript
    // IF Else statement is used when a different sequence of instructions is to be executed depending on the logical value (true/false) of the condition evaluated

    var a =prompt("Enter the Number:");
    if(a===20){
        document.write("<br><br>you have entered 20.")
    }
    else{
        document.write("<br><br>you have not entered 20 in prompt.")
    }

    // both syntex are same if we have single line of code next to IF condition and Else
    var name =prompt("Enter the Name:");
    if(name==="saeed")
        document.write("<br><br>you have entered correct Name : "+name);
    else
        document.write("<br><br>you have entered wrong name.")

    // if we have multiple lines to execute in IF and Else we need to write curly brackets.
