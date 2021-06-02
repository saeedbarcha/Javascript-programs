
  //***********  Declaring Variable
  var roll;
  var name;
  var price;

  //**********   Initilizing variables
  var id;
  id=1002;
  //number should written without quotes 

  // string value should write inside the double " Quotes "
  var myName;
  myName="saeed";

  var result;
  result= true;
  
  // declaring and initilizing in single line
   var id1=1002;
   var myName1="saeed barcha";
   var  result= true;
   var myFloatnum=1003.45;


//    printing the values of the variables in browser
//printing number
document.write("<br>printing the var id1 value : " + id1);
//printing string
document.write("<br>printing the var myName value : " + myName);
// printing boolean 
document.write("<br>printing the var result value : " + result );
//printing float variable value on browser
document.write("<br>printing the var myFloatnum value : " + myFloatnum);

//********* declering and initilizing multiple variables in single line

// (1) method
// number
var a=10 , b=23 , c=33 ,d=12;
// string
var name1="saeed" ,name2="barcha",name3="hussain";

// (2) method 
// numbers
var a1, b1, c1, d1;
a1=10;
b1=23;
c1=33;
d1=12;
// string
var name11 ,name21 , name31;
name11="saeed";
name21="barcha";
name31="hussain";

// declaring and initilizing multiple variables in single line having different data type.
 let Rol=1001 , Name="ahmed ali" ,answer= false; 

var firstName="saeed";
document.write("<br><br>Concept of re-declearing variables :"+firstName);

// (2)
var firstName1="saeed";
var firstName1;
document.write("<br>Concept of re-declearing variables :"+firstName1);
// the out put of this will never become undefined.
// because it will take the previous value of the variable 

// (3)
var firstName2="saeed";
var firstName2="barcha hunzai";
document.write("<br>Concept of re-declearing variables :"+firstName2);
// in this case the updated value of the vartiable will be show in browser
