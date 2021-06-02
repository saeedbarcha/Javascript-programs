
    //do-while loop
    document.write("writing Do_While loop");
    // in this case the do body will execute atleast once weather the condition is true or false.Condition define in the while expression.
    var a=0;
    do
    {
        document.write("<br>Number is :"+a);
        a++;
    }while (a<6);

//do_while (while_on true)
//if we don't now when the loop has to stop executing but we now when certain condition (b==8) returns true the loop has to stop .then this syntex batter one.
document.write("<br><br>writing Do_While loop (When while_on_true)");
var b=0;
    do
    {  
        if(b==8){
        break;
              }
        document.write("<br>while on true :"+a);
        b++;
    }while (true);
