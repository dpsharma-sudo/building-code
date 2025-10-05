let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent.trim();

    switch (value) {
      case '=':
        try {
          string = eval(string);
          input.value = string;
        } catch {
          input.value = "Error";
          string = "";
        }
        break;

      case 'AC':
        string = "";
        input.value = string;
        break;

      case 'DEL':
        string = string.slice(0, -1);
        input.value = string;
        break;

      default:
        string += value;
        input.value = string;
    }
  });
});
