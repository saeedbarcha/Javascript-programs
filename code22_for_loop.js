
//The for loop is frequently used ,usually where the loop will be traversed a fixed number of times.

//syntex 1     
    for(let i=0;i<5; i++){
        document.write("<br>"+i)
    }
    document.write("<br><br>rest of the code after for loop.<br><br>")

    // initilizing and declaring outside of for loop
//syntex 2 
    document.write(`<br><br>declaring and initilizing outside for loop<br> `)
    var num=2; // initilizing and declaring variable used in for loop outside for loop expression.
    for(;num<10;num++){
        document.write("<br>declaring and initilizing outside .syntex 2: "+num);
    }

//syntex 3 (bit difference)
    document.write(`<br><br>declaring and initilizing outside for loop and increment and decrement in the body of the for loop.`)
    var num1=2
    for(;num1<10;){
        num1++;// in this case num1 will increnment first and then it will use in the below lines of code
        document.write("<br>syntex 3.1 : "+num1);
    }
//syntex 3 (bit difference)
    document.write(`<br><br>declaring and initilizing outside for loop and increment and decrement in the body of the for loop.`)
//is mai phelay print hoga phir increment ya decrement
    var num1=2
    for(;num1<10;){
        document.write("<br>syntex 3.2 : "+num1);
        num1++; //in this case the value of num1 will use first and then it will increnment
    }
//syntex 4.1
     document.write(`<br><br>declaring and initilizing outside for loop and increment and decrement in the expression of the for loop. condition in the  body  of the for loop using if statement`)
    
    var num2=5;
    for(; ; num2++){
// condition in the body of the for loop using if statement
        if(num2==10){
            break;
        }
        document.write("<br>syntex 4 : "+num2);
    }

    // syntex 4.2
    document.write(`<br><br>declaring and initilizing outside for loop and  increment , decrement and  condition in the  body  of the for loop using if statement`)
    var num2=5;
    for( ; ; ){ // nothing inside for loop expression  
        
        if(num2==10){
            break;
        }
        document.write("<br>syntex 4 : "+num2);
        num2++;
    }
