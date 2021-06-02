
    //**********     else if statement 
    // to show a multiple way decision based on several conditions ,we use else if statement.
    
    var result1 = prompt("Enter Number:");
    if (result1 <=20)
    document.write("<br><br>You have Entered number which is less then 21 ")
     else if (result1 <=30)
    document.write("<br><br>You have Entered number less then 31 ")
     else if (result1 <=40)
    document.write("<br><br>You have Entered number less then 41 ")
    else
    document.write("<br><br>You have Entered Number greater then 40.")
    
//  curly brackes are use when we want to execute  multiple lines code .when a single  condition returns true
    var result = prompt("Enter Number:");
    if (result <=20){ document.write("<br><br>You have Entered number less then  21 ");
    }
     else if (result <=30){
        document.write("<br><br>You have Entered number less then 31 ");
     }
     else if (result <=40){
        document.write("<br><br>You have Entered number less then 41 ");
    }
    else
    document.write("<br><br>You have Entered Number greater then 40.")
