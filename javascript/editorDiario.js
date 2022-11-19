
/*crear texto en plantilla de diario*/
function f1() {
    document.querySelector("textarea").style.fontWeight = "bold";
  }
  function f2() {
    document.querySelector("textarea").style.fontStyle = "italic";
  }
  function f3() {
    document.querySelector("textarea").style.textAlign = "left";
  }
  function f4() {
    document.querySelector("textarea").style.textAlign = "center";
  }
  function f5() {
    document.querySelector("textarea").style.textAlign = "right";
  }
  
  function f6() {
    document.querySelector("textarea").style.textTransform = "uppercase";
  }
  function f7() {
    document.querySelector("textarea").style.textTransform = "lowercase";
  }
  function f8() {
    document.querySelector("textarea").style.textTransform = "capitalize";
  }
  
  function f9() {
    document.querySelector("textarea").style.fontWeight = "normal";
    document.querySelector("textarea").style.textAlign = "left";
    document.querySelector("textarea").style.fontStyle = "normal";
    document.querySelector("textarea").style.textTransform = "capitalize";
    document.querySelector("textarea").value = " ";
  }
  
  