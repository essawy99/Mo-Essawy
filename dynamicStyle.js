var w = 0;
var h = 0;
//IE
if(!window.innerWidth){
    if(!(document.documentElement.clientWidth == 0)){
    //strict mode
    w = document.documentElement.clientWidth;h = document.documentElement.clientHeight;
    } else{
    //quirks mode
    w = document.body.clientWidth;h = document.body.clientHeight;
    }
} else {
    //w3c
    w = window.innerWidth * 0.94;h = window.innerHeight;
}


 if(h > w) {
   document.getElementById('mobileNav').style.display = 'block';
   document.getElementById('desktopNav').style.display = 'none';
   var sheetToBeRemoved = document.getElementById('desktop');
   var sheetParent = sheetToBeRemoved.parentNode;
   sheetParent.removeChild(sheetToBeRemoved);
   addCss('mobileMenu.css');
}
else {
    document.getElementById('mobileNav').style.display = 'none';
    document.getElementById('desktopNav').style.display = 'block';
}

 function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
  }

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}