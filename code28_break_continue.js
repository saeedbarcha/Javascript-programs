
///////*********   break statement   ************

    //  Is used to stop the iterations of the loop when certain condition fulfill
    document.write("<br>Break statement break on a==5");
    var a;
    for(a=0;a<=10;a++){
        if(a==5){
            break; // stop executing loop
        }
        document.write("<br>itaration number : "+a);  
    }

///////*********   continue  statement   ************
    // to skip the specific  iteration of the loop when certain condition returns true
    document.write("<br><br> continue Statement continue on b==6");
    var b;
    for(b=0;b<=10;b++){
        if(b==6){
            continue; // skip this iteration and continue executing
        }
        document.write("<br>itaration number : "+b);
    }
