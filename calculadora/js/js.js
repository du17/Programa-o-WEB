function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function clearLastEntry() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  