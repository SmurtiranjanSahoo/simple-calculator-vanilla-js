//Selectors
const historyScreen = document.querySelector("#history-screen");
const outputScreen = document.querySelector("#output-screen");

const clearAllBtn = document.querySelector("#clearAll");
const clearBtn = document.querySelector("#clear");
const buttons = document.querySelector(".container-button");
const equalBtn = document.querySelector(".equals");

//calculating var
var firstNum;
var secondNum;
var firstResult;
var prevOpreator;

//Events
buttons.addEventListener("click", calc);

//Functions
function calc(event) {
  // getting what element is clicked
  const numOpr = event.target;

  // handling num
  var num = numOpr.textContent;
  var outputedNum = outputScreen.textContent;
  if (numOpr.classList[0] === "data-num") {
    if (outputedNum === "0") {
      outputScreen.textContent = num;
    } else {
      outputScreen.textContent = outputedNum + num;
    }
  }
  // handling decimal
  var decimal = numOpr.textContent;
  if (numOpr.classList[0] === "data-decimal") {
    if (outputScreen.textContent === "") {
      // console.log("screen is empty");
      outputScreen.textContent = "0" + decimal;
    }

    if (outputScreen.textContent === "0") {
      outputScreen.textContent = "0" + decimal;
      // console.log("screen is not empty");
    }

    if (!outputScreen.textContent.includes(".")) {
      //document.querySelector(".data-decimal").disabled = true;
      outputScreen.textContent = outputedNum + decimal;
    }
  }
  // handling opreators
  var opreator = numOpr.textContent;

  if (numOpr.classList[0] === "data-opreator") {
    if (historyScreen.textContent === "") {
      //console.log(outputedNum);
      historyScreen.textContent = outputedNum + " " + opreator;
    } else {
      // history screen
      var historyNum = historyScreen.textContent;
      // first number
      firstNum = historyNum.slice(0, -2);
      //console.log(firstNum);
      //opreator
      prevOpreator = historyNum.charAt(historyNum.length - 1);
      //console.log(prevOpreator);
      // second num
      secondNum = outputedNum;
      //console.log(outputedNum);

      if (prevOpreator === "+") {
        firstResult = Number(firstNum) + Number(secondNum);
      } else if (prevOpreator === "-") {
        firstResult = Number(firstNum) - Number(secondNum);
      } else if (prevOpreator === "×") {
        firstResult = Number(firstNum) * Number(secondNum);
      } else if (prevOpreator === "÷") {
        firstResult = Number(firstNum) / Number(secondNum);
      }

      historyScreen.textContent = firstResult + " " + opreator;
    }

    //console.log(opreator);
    firstNum = firstResult;
    // console.log(firstResult);
    outputScreen.textContent = "";
    //console.log(firstNum);
  }

  // clearAll number
  if (numOpr.classList[0] === "clearAll") {
    outputScreen.innerText = "0";
    historyScreen.innerText = "";
  }

  // delete last number
  if (numOpr.classList[0] === "clear") {
    if (outputScreen.textContent === "0") {
    } else {
      var outputedNumWithoutLastNum = outputScreen.textContent.slice(0, -1);
      outputScreen.textContent = outputedNumWithoutLastNum;
    }
  }

  // equal button
  if (numOpr.classList[0] === "equals") {
    var historyNum = historyScreen.textContent;
    firstNum = historyNum.slice(0, -2);
    prevOpreator = historyNum.charAt(historyNum.length - 1);
    secondNum = outputedNum;
    // console.log(prevOpreator);
    if (prevOpreator === "+") {
      firstResult = Number(firstNum) + Number(secondNum);
    } else if (prevOpreator === "-") {
      firstResult = Number(firstNum) - Number(secondNum);
    } else if (prevOpreator === "×") {
      firstResult = Number(firstNum) * Number(secondNum);
    } else if (prevOpreator === "÷") {
      firstResult = Number(firstNum) / Number(secondNum);
    }
    //console.log(firstResult);
    // finalResult = historyScreen.textContent.slice(0, -1);
    outputScreen.textContent = firstResult;
    historyScreen.textContent = "";
  }
}
