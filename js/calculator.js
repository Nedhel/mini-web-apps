
function calculate() {
    let firstBox = document.getElementById("first-number").value;
    let secondBox = document.getElementById("second-number").value;
    let symbol = document.getElementById("cal-symbol").value;
    let finalResult=document.getElementById("result");
  
    switch (symbol) {
      case "+":
        finalResult.value = firstBox + secondBox;
        break;
      case "-":
        finalResult.value = firstBox - secondBox;
        break;
      case "*":
        finalResult.value = firstBox * secondBox;
        break;
      case "/":
        finalResult.value = firstBox / secondBox;
        break;
      default:
        finalResult.value = "Invalid symbol";
    }
  
  }
  document.getElementById("btnequal").addEventListener("click",calculate);
  
  let currentInputBox = 'first-number';
  
  // 数字ボタンがクリックされた場合
  function addToDisplay(number) {
    let inputBox = document.getElementById(currentInputBox);
    inputBox.value += number;
  }
  
  // 記号ボタンがクリックされた場合
  function addSymbolToDisplay(symbol) {
    let calSymbolBox = document.getElementById('cal-symbol');
    calSymbolBox.value = symbol;
  
    if(document.getElementById("first-number").value==''){
      currentInputBox = 'first-number';
    } else {
      currentInputBox = 'second-number';
    }
  
  }
  //clearボタン
  function clearDisplay() {
      let firstNumberBox = document.getElementById('first-number');
      let calSymbolBox = document.getElementById('cal-symbol');
      let secondNumberBox = document.getElementById('second-number');
      let resultBox = document.getElementById('result');
    
      firstNumberBox.value = '';
      calSymbolBox.value = '';
      secondNumberBox.value = '';
      resultBox.value = '';
    
      currentInputBox = 'first-number';
    }
  
  