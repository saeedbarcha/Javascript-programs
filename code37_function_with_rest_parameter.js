
//********  Function with single rest parameter
    //rest parameter should be at end of other parameters in function.
    // writing rest parameter  (...args) 
    // we can write any name to rest parameters but name should start with three dots.
    
  document.write("<br>Rest parameter in javaScript<br>");
  document.write("<br> function with single Rest parameter<br>");
function func(...restPare){

document.write("<br>these all the values are assign to rest Parameter:"+restPare+"<br>") ;
}
// calling func 
func(10,12,13,14,15);

//********        formal parameters and rest parameters in javaScript
document.write("<hr>")

function func1(a,b,c,...restPare){ document.write("<br>A : "+a+"<br>") ;
document.write("<br>B : "+b+"<br>") ;
document.write("<br>C: "+c+"<br>") ;
document.write("<br>this are the values are assign to rest Paramete : "+restPare+"<br>") ;
}
document.write("<br> function withRest parameter in javaScript<br>");

func1(12,"saeed barcha",12,22,3333,333,33);
