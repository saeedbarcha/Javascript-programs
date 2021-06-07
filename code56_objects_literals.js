/////****   creating of an object   ******/////
    // first method of object literals
    //decelaring object  
    var fee={}; 
    //defining/initilizing propetries 
    fee["saeed"]=31000;
    fee["abid"]=49999;
    fee["noor"]=54776;
    document.write(fee["noor"]+"  :--- firts method <br>"); //method accesing
    document.write(fee.noor+"   :---second method <br>"); //method two

   //second method 
            //defining propetries 
            fee.khalid=100;
            fee.ali=999;
            fee.naveed=546;
            document.write(fee["ali"]+"  :--- firts method <br>"); //method one
            document.write(fee.ali+"   :--- second method <br>"); //method two

//key name with more then one word
        // fee.saeed barcha=122; 
        // document.write(fee.saeed barcha)
            // this will cause an error
            // should inside the square brackets
            fee ["saeed barcha"]=1000000;
            document.write(fee["saeed barcha"]);// same for calling

//*********decelaring and defining method through first way
    //**********defining methods () 
    fee ['total']=function(){return (100+200);}; //first method to defining methods
    fee["total"]=function(){return (100+200);}; //second method to define methods
    //*********to call
    document.write(fee["total"]()+"  :--- firts method <br>"); //second method to call
    document.write(fee['total']()+"  :--- firts method <br>"); //second method to call
    document.write(fee.total()+"   :---second method <br>"); //3rd method two call
   
 

//********decelaring and defining method through second   way
    //*********defining methods ()
    fee.restpart=function(){return (188756+776);};
    //**********to call method
    document.write(fee["restpart"]()+"  :--- firts method <br>"); // first method to call
    document.write(fee['restpart']()+"  :--- firts method <br>"); // second method to call
    document.write(fee.restpart()+"   :--- second method <br>");  // 3rd method to call

// through first method 
// declering and initilizing the object in same step

var obj1={
    'saeed1':1298,
    "ali1":123333,
    ["karim"]:6666,
    ["noor ali"]:"khaleel",
    ["amount"]:function (){
            return (100+200);
              }
           };
document.write("<br>Declering and initilizing at same line<br>"+obj1["saeed1"]);
document.write("<br>"+obj1.saeed1);
document.write("<br>Declering and initilizing at same line<br>"+obj1["amount"]());
document.write("<br>"+obj1.amount());

//////////         through second method 
// declering and initilizing the object in same step

var obj2={
    saeed2 :020, // need to fix it this will convert number to octal first 
                 // put 0 before number is to write an octal
    ali2:"sahib alam",
    ["noor ali"]:"khaleel",
    amount2:function (){
        return (300+3888);
    }
};
document.write("<br>Declering and initilizing at same line<br>"+obj2["saeed2"]);
document.write("<br>Declering and initilizing at same line<br>"+obj2.saeed2);
