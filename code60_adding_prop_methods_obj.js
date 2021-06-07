
    // declering and initilizing properties and methds to an object
    var fees={
        saeed:"22334",
        ali:"norr"
    }

//*****  adding properties to fees object
    //** using dot operator 
      fees.karim="karim ali";  
    //** using array operator and single quote
      fees['safeer khan']="karim ali";
    //** using array operator and double quote
      fees["safeer"]="karim ali";

//*****  adding methods to fees object
    //** using dot operator 
    fees.name=function (){
      return "name is khan."
    };  
    //** using array operator and single quote
      fees['address']=function (){
        return "name is khan.khan";
      };  
    //** using array operator and double quote
      fees["age"]=function (){
        return 100;
      };  
    
   //all the added members will be vesible in fees object.
    console.log(fees);
