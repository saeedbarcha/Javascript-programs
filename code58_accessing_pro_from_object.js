//******** declering and initilizing object
    var fee={
        name:"saeed",
        fname="ikhan",
        subject:"sql",
        ['home address']:"noorabad", 
        marks:function(){
            return (122+222+323+123)
                        }
             }
    
    //accessing values of keys in from object
//////*****   through array[] operater   *****////
    document.write(fee["name"]); //square brackest and double quotes
    document.write(fee['ikhan']); //square brackest and single quotes
    document.write(fee['home address']); //square brackest and single/double quotes are complusory if key contain more then one word with extra space

/////*****    through dot operator   ****/////
    document.write(fee.subject); //without square brackest and double/single quotes
