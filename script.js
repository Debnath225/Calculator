const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const calSbumit = document.getElementById("calSbumit");
const result = document.getElementById("result");
const opreator = document.getElementById("operator");
const clear = document.getElementById("clear");
const selector = document.querySelectorAll("select");
const options = document.querySelectorAll("option");
const reset1 = document.getElementById("reset1");

// console.log(calculate);

// calSbumit.addEventListener("click", calculate);
calSbumit.addEventListener("click", function () {
  if (value1.value === "") {
    alert("Please enter 1st value.");
    return;
  }
  if (isNaN(value1.value) || isNaN(value2.value)) {
    alert("Please enter valid numbers.");
    return;
  }
  calculate();
});
opreator.addEventListener("change", function () {
  const val = opreator.value;
  if (
    val === "√" ||
    val === "sin" ||
    val === "cos" ||
    val === "tan" ||
    val === "log" ||
    val === "ln" ||
    val === "exp" ||
    val === "abs" ||
    val === "!" ||
    val === "asin" ||
    val === "acos" ||
    val === "atan" ||
    val === "rad" ||
    val === "deg"
  ) {
    value2.style.display = "none";
    value1.style.margin = "0 auto";
  } else {
    value2.style.display = "block";
  }
});
function calculate() {
  const val = opreator.value;
  switch (val) {
    case "+":
      result.value = parseFloat(value1.value) + parseFloat(value2.value);
      break;
    case "-":
      result.value = value1.value - value2.value;
      break;
    case "*":
      result.value = value1.value * value2.value;
      break;
    case "/":
      result.value = value1.value / value2.value;
      break;
    case "%":
      result.value = value1.value % value2.value;
      break;
    case "^":
      result.value = value1.value ** value2.value;
      break;
    case "√":
      result.value = Math.sqrt(value1.value);
      break;
    case "sin":
      result.value = Math.sin((value1.value * Math.PI) / 180);
      break;
    case "asin":
      result.value = Math.asin(value1.value) * (180 / Math.PI);
      break;
    case "cos":
      result.value = Math.cos((value1.value * Math.PI) / 180);
      break;
    case "acos":
      result.value = Math.acos(value1.value) * (180 / Math.PI);
      break;
    case "tan":
      result.value = Math.tan((value1.value * Math.PI) / 180);
      break;
    case "atan":
      result.value = Math.atan(value1.value) * (180 / Math.PI);
      break;
    case "log":
      result.value = Math.log(value1.value) / Math.log(10);
      break;
    case "ln":
      result.value = Math.log(value1.value);
      break;
    case "exp":
      result.value = Math.exp(value1.value);
      break;
    case "abs":
      result.value = Math.abs(value1.value);
      break;
    case "!":
      let fact = 1;
      for (let i = 1; i <= value1.value; i++) {
        fact *= i;
      }
      result.value = fact;
      break;
    case "rad":
      result.value = (value1.value * Math.PI) / 180;
      break;
    case "deg":
      result.value = (value1.value * 180) / Math.PI;
      break;
    case "nPr":
      result.value =
        factorial(value1.value) / factorial(value1.value - value2.value);
      break;
    case "nCr":
      result.value =
        factorial(value1.value) /
        (factorial(value2.value) * factorial(value1.value - value2.value));
      break;
    default:
      result.value = "Invalid operator";
  }
}

const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
// clear all values

clear.addEventListener("click", () => {
  value1.value = "";
  value2.value = "";
  result.value = "";
});

reset1.addEventListener("click", () => {
  value1.value = "";
  value2.value = "";
  result.value = "";
  opreator.value = "+";
  value1.style.display = "block";
  value2.style.display = "block";
});

// const STORAGE_NAME = "history_v4";

// if (localStorage.getItem(STORAGE_NAME) == null) {
//   localStorage.setItem(STORAGE_NAME, JSON.stringify([]));
// }

// refreshHistory();

// if (calSbumit.click()) {
//   const historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME));
//   if (!historyElements.includes(inputEl.value)) {
//     historyElements.push(inputEl.value);
//   }
//   localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements));

//   inputEl.value = output.value;
//   refreshHistory();
// }

//solve equations

const a = document.getElementById("x2");
const b = document.getElementById("x");
const c = document.getElementById("x0");
const result2 = document.getElementById("result2");
const calSubmit2 = document.getElementById("calSubmit2");

calSubmit2.addEventListener("click", () => {
  if (a.value === "" || b.value === "" || c.value === "") {
    alert("Please fill all the above values.");
    return;
  } else {
    let discrimenant = Math.sqrt(b.value ** 2 - 4 * a.value * c.value);
    let negtiveb = -b.value;

    const solution1 = ((negtiveb + discrimenant) / 2) * a.value;
    const solution2 = ((negtiveb - discrimenant) / 2) * a.value;

    result2.value = `${solution1} and ${solution2} are the solutions.`;
  }
});

document.getElementById("clear2").addEventListener("click", () => {
  a.value = "";
  b.value = "";
  c.value = "";
  result2.value = "";
});

//function Angale calculator
const degree = document.getElementById("deg");
const minutes = document.getElementById("min");
const second = document.getElementById("sec");
const result3 = document.getElementById("result3");
const calSubmit3 = document.getElementById("calSubmit3");
const clear3 = document.getElementById("clear3");
const degMinSec = document.getElementById("degMinSec");
const degLebel = document.getElementById("degLabel");
const minLabel = document.getElementById("minLabel");
const secLabel = document.getElementById("secLabel");
const rotate = document.getElementById("rotate");
const reset3 = document.getElementById("reset3");

degMinSec.addEventListener("change", function () {
  const val = degMinSec.value;
  switch (val) {
    case "degToRad":
      degree.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.style.display = "none";
      second.style.display = "none";
      degLebel.style.display = "block";
      minLabel.style.display = "none";
      secLabel.style.display = "none";
      break;
    case "radToDeg":
      degree.style.display = "block";
      minutes.style.display = "none";
      second.style.display = "none";
      degree.placeholder = "Enter radian value";
      degLebel.innerHTML = "Enter Radian value";
      minLabel.style.display = "none";
      secLabel.style.display = "none";
      break;
    case "inDeg":
      degree.style.display = "block";
      minutes.style.display = "block";
      second.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.placeholder = "Enter Minutes value";
      second.placeholder = "Enter Seconds value";
      degLebel.style.display = "block";
      minLabel.style.display = "block";
      secLabel.style.display = "block";
      break;
    case "inMin":
      degree.style.display = "block";
      minutes.style.display = "block";
      second.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.placeholder = "Enter Minutes value";
      second.placeholder = "Enter Seconds value";
      degLebel.style.display = "block";
      minLabel.style.display = "block";
      secLabel.style.display = "block";
      break;
    case "inSec":
      degree.style.display = "block";
      minutes.style.display = "block";
      second.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.placeholder = "Enter Minutes value";
      second.placeholder = "Enter Seconds value";
      degLebel.innerHTML = "Enter Degree value";
      minLabel.style.display = "block";
      secLabel.style.display = "block";
      break;
    case "degToMin":
      degree.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.style.display = "none";
      second.style.display = "none";
      minLabel.style.display = "none";
      secLabel.style.display = "none";
      break;
    case "minToDeg":
      degree.style.display = "none";
      minutes.style.display = "block";
      second.style.display = "none";
      minutes.placeholder = "Enter Minutes value";
      degLebel.style.display = "none";
      minLabel.style.display = "block";
      secLabel.style.display = "none";
      break;
    case "minToSec":
      degree.style.display = "none";
      minutes.style.display = "block";
      second.style.display = "none";
      degLebel.style.display = "none";
      minLabel.style.display = "block";
      secLabel.style.display = "none";
      break;
    case "secToMin":
      degree.style.display = "none";
      minutes.style.display = "none";
      second.style.display = "block";
      second.placeholder = "Enter Seconds value";
      degLebel.style.display = "none";
      minLabel.style.display = "none";
      secLabel.style.display = "block";
      break;
    case "degToSec":
      degree.style.display = "block";
      degree.placeholder = "Enter degree value";
      minutes.style.display = "none";
      second.style.display = "none";
      degLebel.style.display = "block";
      minLabel.style.display = "none";
      secLabel.style.display = "none";
      break;
    case "secToDeg":
      degree.style.display = "none";
      minutes.style.display = "none";
      second.style.display = "block";
      second.placeholder = "Enter Seconds value";
      degLebel.style.display = "none";
      minLabel.style.display = "none";
      secLabel.style.display = "block";
      break;
    default:
      degree.style.display = "none";
      minutes.style.display = "none";
      second.style.display = "none";
      degLebel.innerHTML = "Error";
      minLabel.innerHTML = "Error";
      secLabel.innerHTML = "Error";
  }
});
calSubmit3.addEventListener("click", () => {
  if (
    (degree.value === "" && minutes.value === "" && second.value === "") ||
    isNaN(degree.value) ||
    isNaN(minutes.value) ||
    isNaN(second.value)
  ) {
    alert("Please fill all the above values.");
    return;
  } else {
    const val = degMinSec.value;
    switch (val) {
      case "degToRad":
        const degreeToRad = (degree.value * Math.PI) / 180;
        result3.value = degreeToRad + " " + "rad";
        rotate.style.transform = `rotate(${-degreeToRad}rad)`;
        break;
      case "radToDeg":
        const radianToDegree = (degree.value * 180) / Math.PI;
        result3.value = radianToDegree + " " + "deg";
        rotate.style.transform = `rotate(${-radianToDegree}deg)`;
        break;
      case "inDeg":
        const inDeg =
          parseFloat(degree.value) +
          parseFloat(minutes.value) / 60 +
          parseFloat(second.value) / 3600;
        result3.value = `${inDeg} deg`;
        rotate.style.transform = `rotate(${-inDeg}deg)`;
        break;
      case "inMin":
        const inMin =
          parseFloat(degree.value) * 60 +
          parseFloat(minutes.value) +
          parseFloat(second.value) / 60;
        let cir =
          parseFloat(degree.value) +
          parseFloat(minutes.value) / 60 +
          parseFloat(second.value) / 3600;
        result3.value = inMin + " " + "min";
        rotate.style.transform = `rotate(${-cir}deg)`;
        break;
      case "inSec":
        result3.value =
          parseFloat(degree.value) * 3600 +
          parseFloat(minutes.value) * 60 +
          parseFloat(second.value) +
          " " +
          "sec";
        let cir2 =
          parseFloat(degree.value) +
          parseFloat(minutes.value) / 60 +
          parseFloat(second.value) / 3600;
        rotate.style.transform = `rotate(${-cir2}deg)`;
        break;
      case "degToMin":
        let cir3 = parseFloat(degree.value);
        result3.value = degree.value * 60 + " " + "min";
        rotate.style.transform = `rotate(${-cir3}deg)`;
        break;
      case "minToDeg":
        const minToDeg = minutes.value / 60;
        result3.value = minToDeg + " " + "deg";
        rotate.style.transform = `rotate(${-minToDeg}deg)`;
        break;
      case "minToSec":
        let cir4 = parseFloat(minutes.value) / 60;
        result3.value = minutes.value * 60 + " " + "sec";
        rotate.style.transform = `rotate(${-cir4}deg)`;
        break;
      case "secToMin":
        let cir5 = parseFloat(second.value) / 3600;
        result3.value = second.value / 60 + " " + "min";
        rotate.style.transform = `rotate(${-cir5}deg)`;
        break;
      case "degToSec":
        result3.value = degree.value * 3600 + " " + "sec";
        rotate.style.transform = `rotate(${-degree.value}deg)`;
        break;
      case "secToDeg":
        const secToDeg = second.value / 3600;
        result3.value = secToDeg + " " + "deg";
        rotate.style.transform = `rotate(${-secToDeg}deg)`;
        break;

      default:
        result3.innerHTML = "Error";
    }
  }
});
clear3.addEventListener("click", () => {
  degree.value = "";
  minutes.value = "";
  second.value = "";
  result3.value = "";
  rotate.style.transform = `rotate(0deg)`;
});
reset3.addEventListener("click", () => {
  degree.value = "";
  minutes.value = "";
  second.value = "";
  result3.value = "";
  degMinSec.value = "inDeg";
  degree.style.display = "block";
  minutes.style.display = "block";
  second.style.display = "block";
  degLebel.style.display = "block";
  minLabel.style.display = "block";
  secLabel.style.display = "block";
  rotate.style.transform = `rotate(0deg)`;
});

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
obj.greet(); // Hello, John

const array = [1, 2, 9, 2, 4, 5];
const newArray = array.map((num) => num * 2);
console.log(newArray); // [2, 4, 6, 8, 10]
array.unshift(); // remove first element
array.sort();
array.reverse(); // reverse the array
array.splice(2, 1); // remove element at index 2
array.push(10); // add element at the end of the array
array.pop(); // remove last element of the array
array.shift(); // remove first element of the array
array.find(() => {
  array[3];
}); // find element in the array
array.filter((num) => num > 5); // filter elements in the array
array.reduce((acc, num) => acc + num, 0); // reduce the array to a single value
array.includes(5); // check if the array includes the element
array.indexOf(5); // get the index of the element in the array
array.lastIndexOf(5); // get the last index of the element in the array
array.slice(2, 5); // get a slice of the array from index 2 to 5
array.at(3); // get the element at index 3
array.concat([6, 7, 8]); // concatenate two arrays
array.join(", "); // join the array elements into a string
array.toString(); // convert the array to a string
array.toLocaleString(); // convert the array to a string in the local format
array.entries(); // get the entries of the array
array.keys(); // get the keys of the array
array.values(); // get the values of the array
array.copyWithin(2, 0, 2); // copy elements within the array
