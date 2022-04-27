//  SELECT DISPLAY AREA TO SHOW NUMBER BY CLICK
const DisplayArea = document.getElementById("View-Screen");

//  SELECT ALL BUTTON AND GET THE INNER TEXT DYNAMICALLY
const Buttons = document.querySelectorAll("button");
let InputValue = "";
//  ADD EVENTLISTNER TO ALL BUTTONS
Buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let ButtonText = e.target.innerText;
    if (ButtonText == "X") {
      ButtonText = "*";
      InputValue += ButtonText;
      DisplayArea.value = InputValue;
    } else if (ButtonText == "CL") {
      InputValue = "";
      DisplayArea.value = InputValue;
    } else if (ButtonText == "DEL") {
      InputValue = InputValue.substr(0, InputValue.length - 1);
      DisplayArea.value = InputValue;
    } else if (ButtonText == "=") {
      DisplayArea.value = eval(InputValue);
    } else {
      InputValue += ButtonText;
      DisplayArea.value = InputValue;
    }
  });
});
