// COPIED BUTTON.
document.querySelector(".copy-btn").onclick = function () {
  let password_display =
    document.querySelector("#for-password").childNodes[0].nodeValue;
  let clipboard = document.querySelector(".copy-to-clipboard");
  if (password_display == "Password") {
    clipboard.innerHTML = "failed";
    clipboard.classList.add("visible");
    setTimeout(function () {
      clipboard.classList.remove("visible");
    }, 1000);
  } else {
    navigator.clipboard.writeText(password_display);
    clipboard.innerHTML = "copeid";
    clipboard.classList.add("visible");
    setTimeout(function () {
      clipboard.classList.remove("visible");
    }, 1000);
  }
};

// for slider showing values in password length display.
var slider = document.querySelector("#range");
slider.addEventListener("input", function () {
  document.querySelector(".password-length-display").innerHTML = slider.value;
});

// for checkboxes.....
var uppercase = document.querySelector("#checkbox-1");
var lowercase = document.querySelector("#checkbox-2");
var numbers = document.querySelector("#checkbox-3");
var symbols = document.querySelector("#checkbox-4");
uppercase.value = "of";
lowercase.value = "of";
numbers.value = "of";
symbols.value = "of";

//FOR UPPERCASE BUTTON
uppercase.addEventListener("click", function () {
  if (uppercase.value != "on") {
    uppercase.value = "on";
  } else {
    uppercase.value = "of";

  }
});

// FOR LOWERCASE BUTTON
lowercase.addEventListener("click", function () {
  if (lowercase.value != "on") {
    lowercase.value = "on";
  } else {
    lowercase.value = "of";

  }
});

//FOR NUMBERS BUTTON
numbers.addEventListener("click", function () {
  if (numbers.value != "on") {
    numbers.value = "on";
  } else {
    numbers.value = "of";

  }
});

//FOR SYMBOLS
symbols.addEventListener("click", function () {
  if (symbols.value != "on") {
    symbols.value = "on";
  } else {
    symbols.value = "of";

  }
});

// genrator button
var genrator_btn = document.querySelector(".generator");

genrator_btn.addEventListener("click", function () {
  var i = 0;
  var result = "";
  // FOR LOOP FOR CREATING PASSWORDS.
  for (; i < slider.value;) {

    // for uppercase generations...
    if (uppercase.value == "on" && i < slider.value) {
      i++
      let uppercase_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      result = result + uppercase_char.charAt(Math.floor(Math.random() * uppercase_char.length));
    }

    // for lowercase generations...
    if (lowercase.value == "on" && i < slider.value) {
      i++
      let lowercase_char = "abcdefghijklmnopqrstuvwxyz";
      result = result + lowercase_char.charAt(Math.floor(Math.random() * lowercase_char.length));
    }

    // for numbers generations...
    if (numbers.value == "on" && i < slider.value) {
      i++
      let numbers_char = "0123456789";
      result = result + numbers_char.charAt(Math.floor(Math.random() * numbers_char.length));
    }

    // for symbols generations....
    if (symbols.value == "on" && i < slider.value) {
      i++
      let symbols_char = "!@#$%^&*():;.,><=_-[]{~`}";
      result = result + symbols_char.charAt(Math.floor(Math.random() * symbols_char.length));
    }
  }
  document.querySelector("#for-password").innerHTML = result;
  // for strength of the password...
  var counter = 0;
  for (let j = 0; j <= 0; j++) {

    if (symbols.value == "on") {
      counter++;
    }

    if (uppercase.value == "on") {
      counter++;
    }

    if (lowercase.value == "on") {
      counter++;
    }

    if (numbers.value == "on") {
      counter++;
    }
  }

  if (counter == 0) {
    document.querySelector(".strength-display").styel.background = "white";
  }
  if (counter == 1) {
    document.querySelector(".strength-display").classList.add("red");
  }
  if (counter == 2) {
    document.querySelector(".strength-display").classList.add("green");
  }
  if (counter == 3) {
    document.querySelector(".strength-display").classList.add("orange");
  }
  if (counter == 4) {
    document.querySelector(".strength-display").classList.add("yellow");
  }

});
