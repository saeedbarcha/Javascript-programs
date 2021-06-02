
//AND logical opereter 
// And logical operator will return true if and only if all the condition are return true value
    var a = 10>5; //true
    var b = 20>8; // true
    var c = a&&b;
    document.write("<br>AND logical Operater (true && true): "+c) // return true
    
    var a1 = 10<5; //true
    var b1 = 20>8; // true
    var c1 = a1&&b1;
    document.write("<br>AND logical Operater (false && true): "+c1) // return false

//OR logical opereter 
// or logical operator will return true if any of a single condition returns true
    var num1 = 10>5; //true
    var num2 = 20>8; // true
    var ans = num1||num2;
    document.write("<br>OR logical Operater  (ture || true): "+ans) // return true

//Not logical opereter 
// not logical operator will return true if false and return false if true
    var num3 = 10<5; //true
    var num4 = 20>8; // true
    var ans2 = num3!==num4;
    document.write("<br>NOT logical Operater (false !== true):"+ans2) // return false
