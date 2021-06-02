
//**********     switch statement in javaScript

// switch checks several possible constant values for an expression.
// all the cases will be evaluated if we dont use breat statement.

var day=3;
switch (day){
    case 1:
    document.write("<br>Case 1 has Been Matched: Sunday<br><br>");
    break;
    case 2:
    document.write("<br>Case 2 has Been Matched: monday<br><br>");
    break;
    case 3:
    document.write("<br>Case 3 has Been Matched: Tuesday<br><br>");
    break;
    case 4:
    document.write("<br>Case 3 has Been Matched: Thrusday <br><br>");
    break;
}

///////****** Default statement in switch Statement  *****/////
// if switch expression will never match to any case  the defalut will eveluted.
var day1=10;
switch (day1){
    case 1:
    document.write("<br>Sunday");
    break;
    case 2:
    document.write("<br>monday");
    break;
    case 3:
    document.write("<br>Tuesday");
    break;
    case 4:
    document.write("<br>Thrusday");
    break;
    default:
        document.write("<br>Default Statement is executed :Unknown Value<br><br>");
}

///////****** switch Statement  Without break*****/////

// if we don't write break statement with case of switch statement then all the case's statement will execute next to matched one.wether it is matching to switch expression or not.
// In this example, case2 match with switch expression and execute the body of case2 and it execute body of next case (case3,case4) to it.it is just because of missing break statement.
var days=2;
switch (days){
    case 1:
    document.write("<br>Sunday");
    // break;
    case 2:
    document.write("<br>monday");
    // break;
    case 3:
    document.write("<br>Tuesday");
    // break;
    case 4:
    document.write("<br>Thrusday");
    // break;

}

//////******  single/same block of statements for multiple cases ******///////
// we can set a single/multiple  statement to execute when it meet a single case.And we can set multiple case to execute a single/multiple lines of code to execute.

var age=80;
switch (age){
    case 10:
    case 15:
    case 20:
    document.write("<br><br>this is a single block of sataementr which is execute for case1,case2 case3 : You are Still goung ");
    break;
    case 50:
    document.write("<br><br>your age is above 50.");
    break;
    case 80:
    document.write("<br><br>your going to die soon");
    break;
    default:
        document.write("<br> <br>Unknown Age")
}

// for string 
//////******  single/same block of statements for multiple cases ******///////

var day4="sunday";

switch (day4){
    case "sunday":
    case "monday":
    case "tuesday":
    document.write("<br><br>this is a single block of sataementr will be execute for case1,case2 case3 : Holly day .outing withs frinds");
    break;
    case "wensday":
    document.write("<br><br> have fun in uni");
    break;
    case "thrusday":
    document.write("<br><br> working day ");
    break;
    default:
        document.write("<br> <br>borring hostel life")
}
