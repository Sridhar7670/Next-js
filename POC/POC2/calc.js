  function runCalculator() {
      const number1Str = prompt("Enter first number: ");
      if (number1Str === null) {
          console.log("Calculator cancelled.");
          return; 
      }
      const number2Str = prompt("Enter second number: ");
      if (number2Str === null) {
          console.log("Calculator cancelled.");
          return; 
      }
      // Get user input for the operator
      const operator = prompt("Enter operator ( either +, -, * or / ): ");
      if (operator === null) {
          console.log("Calculator cancelled.");
          return; 
      }
      const number1 = parseFloat(number1Str);
      const number2 = parseFloat(number2Str);

      if (isNaN(number1) || isNaN(number2)) {
          console.error("Invalid input. Please enter valid numbers.");
          return;
      }

      let result;

      // Perform the calculation based on the operator
      switch (operator) {
          case '+':
              result = number1 + number2;
              break;

          case '-':
              result = number1 - number2;
              break;

          case '*':
              result = number1 * number2;
              break;

          case '/':
              // Handle division by zero
              if (number2 === 0) {
                  console.error("Error: Division by zero is not allowed.");
                  return; 
              }
              result = number1 / number2;
              break;
          default:
              console.error("Error: Invalid operator. Please use +, -, *, or /.");
              return; 
      }

      
      console.log(`${number1} ${operator} ${number2} = ${result}`);
  }


  runCalculator();