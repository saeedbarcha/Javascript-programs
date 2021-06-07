
    //*********     block scope    *********
  
    if(true){
        var i = 10; // local scope but this react as a globle variable it is just becaus of we have declared it using var keyword.
        document.write(i ,'<br>')
    };
    // outside if block we can access the variable defined inside if bolock using var keyword

///////*******     these cause name conflecting    *********
    document.write("var i used outside of if statement.<br>")
    if(true){
        var i = 10; // local scope
        document.write(i ,'<br>')
    };
    document.write(i ,'<br>')

/////*******   ES6 let keyword    ******
    // let keyword is introduced in ES6. with the help of this key word inside any block.which anable us to use that variable inside that block not outside.

//*****    block scope
    document.write("var i used outside of if statement.<br>")

    if(true){
        let j1 = 10; // local scope
        document.write(j1 ,'<br>')
    };
    //document.write(j1 ,'<br>') // outside if block .now j not available
    document.write("<hr>");
