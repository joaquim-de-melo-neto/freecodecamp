const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");

const isValid = (text, int) => {
  if (text.trim().length === 0) {
    output.textContent = "Please enter a valid number";
    return false;
  }

  if (int < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return false;

  }

  if (int > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return false;

  }

  return true;
}

const decimalToRoman = (int) => {
  
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(par => {
    while (int >= par[1]) {
      res.push(par[0]);
      int -= par[1];
    }
  })

  return res.join("");
}

const updateUI = () => {
  const decimalNumberString = inputNumber.value;
  const int = parseInt(decimalNumberString, 10);

  if(isValid(decimalNumberString,int)){
    output.textContent = decimalToRoman(int);
  }
}

convertBtn.addEventListener("click", updateUI);









