/* CHANGED: JavaScript functions using simple concepts only */

var registeredName = "";
var registeredEmail = "";
var registeredPassword = "";

function showMessage(productName) {
  alert(productName + " added to cart successfully!");
}

function registerUser() {
  registeredName = document.getElementById("registerName").value;
  registeredEmail = document.getElementById("registerEmail").value;
  registeredPassword = document.getElementById("registerPassword").value;

  if (registeredName == "" || registeredEmail == "" || registeredPassword == "") {
    alert("Please fill all fields.");
  } else {
    alert("Registration successful. Now login.");
  }
}

function loginUser() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  if (email == registeredEmail && password == registeredPassword) {
    alert("Login successful. Welcome " + registeredName + "!");
    document.getElementById("accountSection").style.display = "none";
    document.getElementById("storeSection").style.display = "block";
  } else {
    alert("Invalid email or password.");
  }
}

function registerPageUser() {
  registerUser();
}

function loginPageUser() {
  alert("Please register and login from home page first.");
}

function showStockAction(actionName) {
  document.getElementById("stockActionResult").innerHTML =
    actionName + " section is opened. You can manage jewelry stock here.";

  alert(actionName + " option selected.");
}

function searchByCategory() {
  var category = document.getElementById("categorySearch").value;
  document.getElementById("categoryResult").innerHTML =
    "Showing products for category: " + category;
}

function searchByPrice() {
  var price = document.getElementById("priceSearch").value;

  if (price == "") {
    alert("Please enter price.");
  } else {
    document.getElementById("priceResult").innerHTML =
      "Showing products under price: $" + price;
  }
}

function saveFeedback() {
  var name = document.getElementById("feedbackName").value;
  var product = document.getElementById("feedbackProduct").value;
  var feedback = document.getElementById("feedbackMessage").value;

  if (name == "" || feedback == "") {
    alert("Please write your name and feedback.");
  } else {
    document.getElementById("feedbackResult").innerHTML =
      "Thank you " + name + ". Your feedback about " + product + " is saved: " + feedback;

    alert("Feedback saved successfully.");
  }
}