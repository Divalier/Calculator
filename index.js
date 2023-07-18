let main = "";
let sub = "";
let res = 0;
let char = "";
let movv = 0;
let mov = 0;
let first;
let sec;
let mychr = "";
let calc = (e) => {
  if (
    e == 1 ||
    e == 2 ||
    e == 3 ||
    e == 4 ||
    e == 5 ||
    e == 6 ||
    e == 7 ||
    e == 8 ||
    e == 9 ||
    e == "."
  ) {
    main += e;
    document.getElementById("maindis").innerHTML = main;
    if (mov == 0) {
      first = main;
    } else {
      sec = main;
    }
  }
  if (e == "%" || e == "*" || e == "+" || e == "/" || e == "-" || e == "=") {
    if (mov == 0) {
      char = e;
      mov = 2;

      sub += main + e;
      document.getElementById("subdis").innerHTML = sub;
      main = "";
      document.getElementById("maindis").innerHTML = main;
      alert("move one");
    } else if (mov == 2) {
      mov = 3;

      sub += main + e;
      document.getElementById("subdis").innerHTML = sub;
      main = "";
      document.getElementById("maindis").innerHTML = main;
      alert(
        "first num is " + first + "second nun is" + sec + "sign is " + char
      );
      calucalate(char);
      char = e;
      movv = 2;
    } else if (mov == 3) {
      sub += main + e;
      document.getElementById("subdis").innerHTML = sub;
      main = "";
      document.getElementById("maindis").innerHTML = main;
      alert("first num is " + res + "second nun is" + sec + "sign is " + char);
      calucalate(char);
      char = e;
    }

    if (e == "=") {
      document.getElementById("subdis").innerHTML = "";
      if ((first != "Null") & (res == 0)) {
        document.getElementById("maindis").innerHTML = first;
        document.getElementById("maindis").style.color = "white";
      } else {
        document.getElementById("maindis").innerHTML = res;
        document.getElementById("maindis").style.color = "white";
      }
    }
  }

  if (e == "ce") {
    main = "";
    sub = "";
    res = 0;
    char = "";
    movv = 0;
    mov = 0;
    first;
    sec;
    mychr = "";
    document.getElementById("subdis").innerHTML = "0.";
    document.getElementById("maindis").innerHTML = "0.";
  }
  if (e == "c") {
    document.getElementById("maindis").innerHTML = "";
  }
  if (e == "c") {
    document.getElementById("maindis").innerHTML = "";
  }
  if (e == "+/-") {
    if (main[0] == "+") {
      main = main.replace("+", "-");
      document.getElementById("maindis").innerHTML = main;
    } else if (main[0] == "-") {
      main = main.replace("-", "+");
      document.getElementById("maindis").innerHTML = main;
    } else {
      main = "+" + main;
      document.getElementById("maindis").innerHTML = main;
    }
  }
};
function calucalate(e) {
  if (e == "+") {
    if (movv == 0) {
      res = parseInt(first) + parseInt(sec);

      alert(res);
    } else {
      res = parseInt(res) + parseInt(sec);
      alert(res);
    }
  }
  if (e == "*") {
    if (movv == 0) {
      res = parseInt(first) * parseInt(sec);

      alert(res);
    } else {
      res = parseInt(res) * parseInt(sec);
      alert(res);
    }
  }
  if (e == "/") {
    if (movv == 0) {
      res = parseInt(first) / parseInt(sec);

      alert(res);
    } else {
      res = parseInt(res) / parseInt(sec);
      alert(res);
    }
  }
  if (e == "-") {
    if (movv == 0) {
      res = parseInt(first) - parseInt(sec);

      alert(res);
    } else {
      res = parseInt(res) - parseInt(sec);
      alert(res);
    }
  }
}
