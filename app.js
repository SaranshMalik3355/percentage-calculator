//Get elements

const percentage = document.getElementById("pro");
const total = document.getElementById("total");
const result = document.getElementById("result");

//To make our website real time we will be using keyUp event which is fired when key is released.

percentage.addEventListener("keyup", DoCalculation);
total.addEventListener("keyup", DoCalculation);

//Event Handler
function DoCalculation() {
  //when we extract the value. We get it in the form of string to convert it into the number we use parseFloat. Type conversion

  //Getting values

  let p = parseFloat(percentage.value); //'12.85' --> 12.85
  let q = parseFloat(total.value);

  if (isNaN(p)) {
    p = 0;
  }
  if (isNaN(q)) {
    q = 0;
  }

  //calculate percentage
  const final_value = q * (p / 100);

  // if any of the value is zero then final_value is zero
  if (q == 0 && p == 0) {
    final_value = 0;
  }

  //To get the fixed nnumber after decimal point we use method a.k.a tofixed()

  result.value = final_value.toFixed(2);
}
