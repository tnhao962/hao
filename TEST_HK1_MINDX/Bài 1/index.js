function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  function main() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
  
    if (a >= b) {
      alert("Số a phải nhỏ hơn số b");
      return;
    }
  
    var tong = 0;
    var s = "";
  
    for (var i = a + 1; i <= b; i++) {
      if (isPrime(i)) {
        tong += i;
        s += i+ ", ";
      }
    }
  
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + s + "<br>" +  "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + tong
  }
  