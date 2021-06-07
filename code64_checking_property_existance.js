    // constructor
 function Mobile(name,monum){
     this.name=name;
     this.modelNum=monum;
 }

// Initilizing constructor to a variable .
// Constructor prepares an instance of an object

 var nokia=new Mobile('nokia',123);

// ****************    typeof operator    ******** //
// checking weather the name propert is existing in nokia object or not
    if(typeof nokia.name !== 'undefined'){
    document.write("<br>nokia.name: available") // output avilable 
    }else{
        document.write("<br>nokia.name: Not avilable")
    }

//  checking weather the color propert is existing in nokia object or not
    if(typeof nokia.color !== 'undefined'){  // output avilable
    document.write("<br>nokia.color: available")
    }else{
        document.write("<br>nokia.color: Not avilable")   //output  not avilable 
    }
    
//  checking weather the modelNum propert is existing in nokia object or not
    if(typeof nokia.modelNum!== 'undefined'){
    document.write("<br>nokia.modelNum: available") //output avilable 
    }else{
        document.write("<br>nokia.modelNum: Not avilable")
    }

//  checking weather the ram propert is existing in nokia object or not
    if(typeof nokia.ram!== 'undefined'){
      document.write("<br>okia.ram: available") //output avilable 
     }else{
        document.write("<br>nokia.ram: Not avilable")
    }

// ****************    through in operator     ******** //
//  checking weather the name propert is existing in nokia object or not
if( 'name' in nokia){
    document.write("<br>name in nokia: available") 
    }else{
        document.write("<br>name in nokia: Not avilable")
    }

//  checking weather the color propert is existing in nokia object or not
    if('color' in nokia){
    document.write("<br>color in nokia: available")
    }else{
        document.write("<br>color in nokia: Not avilable") // not avilable  
    }

//  checking weather the modelNum propert is existing in nokia object or not
    if('modelNum' in nokia){
    document.write("<br>modelNum in nokia: available") //  output avilable  
    }else{
        document.write("<br>modelNum in nokia: Not avilable")
    }

//  checking weather the mram propert is existing in nokia object or not
    if('ram' in nokia){
    document.write("<br>ram in nokia: available") // output avilable 
    }else{
        document.write("<br>am in nokia: Not avilable")
    }

// //////////***********     hasOwnProperty()     ************/////////
//  checking weather the name propert is existing in nokia object or not
if( nokia.hasOwnProperty("name")){
    document.write("<br>nokia.hasOwnproperty('name'): available") // output available
    }else{
        document.write("<br>nokia.hasOwnproperty('name') Not avilable")
    }
    // 

    //  checking weather the color propert is existing in nokia object or not
    if(nokia.hasOwnProperty("color")){
    document.write("<br>nokia.hasOwnproperty('color') available")
    }else{
        document.write("<br>nokia.hasOwnproperty('color'): Not avilable") //  output  not avilable
    }

//  checking weather the modelNum propert is existing in nokia object or not
    if(nokia.hasOwnProperty("modelNum")){
    document.write(`<br>nokia.hasOwnproperty("modelNum"): available`)  // output avilable   
    }else{
        document.write("<br>nokia.hasOwnproperty('modelNum'): Not avilable")
    }

//  checking weather the ram propert is existing in nokia object or not
if(nokia.hasOwnProperty("ram")){
    document.write(`<br>nokia.hasOwnproperty("ram"): available`)
    }else{
        document.write(`<br>nokia.hasOwnproperty("ram"): Not avilable`) //output  Not avilable
    }
