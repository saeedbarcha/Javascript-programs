//////*****     declering an object through object() constructor
        var fee=new Object();  //new Object() = {} 
        fee["name"]="saeed";
        fee["nick name"]="barcha"; //square brackets and double quots are compulsry key haveing more then one word with extra spaces
        fee.fname="ikhan";
        fee.total=function (){
            return (200+4999);
        }

        // Accessing properties
        document.write("<br>"+ fee.name);
        document.write("<br>"+ fee["name"]);
        // Accessing methods
        document.write("<br>"+ fee.total());
