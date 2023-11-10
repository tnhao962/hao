function numberOneTriangle() {
    var number = document.getElementById("inputNumber").value;
  
    if (number < 1 || number > 10) {
      alert("Vui lòng nhập một số từ 1 đến 10.");
      return;
    }
    var triangle = "";
    for (var i = 1; i <= number; i++) {
      for (var j = 1; j <= i; j++) {
        triangle += "* ";
      }
      triangle += "<br>";
    }
  
    document.getElementById("output").innerHTML = triangle;
  }
  