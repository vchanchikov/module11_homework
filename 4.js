function numbersOutput (a, b) {
    let currentNumber = a + 1;
    let timer = setInterval(function() {
      if (currentNumber === (b - 1)) {
        clearInterval(timer);
      }
      console.log(currentNumber);
      currentNumber++;
    }, 1000);
  }
  
  numbersOutput(18, 24);