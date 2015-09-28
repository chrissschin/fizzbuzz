$(document).ready(function(){
  //store id in listitems
  var listitems = document.getElementById('listitems');
  //start with empty string
  var li = "";
    //start loop
    for (var i = 0; i < 101; i++) {
      // initialize with <li>
      li += "<li>";
      //if i is divisible by 3 <li> buzz </li>
      if (i % 3 === 0 ) {
          li += "Buzz";
      }
      //if i is divisible by 5 <li> fizzz </li>
      else if (i % 5 === 0) {
          li += "Fizz";
      }
      //if i is nnot divisible by 5 or 3 <li> i </li>
      else {
        li += i;
      }
      //closes tag
      li += "</li>"
    }
//shoots it into html
listitems.innerHTML += li;

});
