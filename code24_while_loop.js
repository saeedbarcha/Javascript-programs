
//**********    while loop in javaScript
    // While loop keeps repeating an action until an associated condition returns FALSE
    var i=0; //declaration part
    while (i<=5) { //condition 
        document.write("<br>Inside the while loop: <b>"+i+"</b>")
        i++; //increnment or decrenment
    }
    document.write("<br><br>Rest of the code ")

    // if we dont now when the loop has to stop executing but we now when certain condition returns true the loop has to stop .then this syntex batter one.
    document.write("<br>")

    let j=1;
    while(true){
        if(j==4){
            break;
        }
        document.write("<br>this is j : <b>"+j+"</b>");
        j++;
    }
