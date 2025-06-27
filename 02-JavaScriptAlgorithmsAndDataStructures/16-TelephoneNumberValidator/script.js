// variables
const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

// methods
const checkRegex = (number) => {
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const regex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  return regex.test(number);
}

const appendResultText = (number) => {
  const para = document.createElement("p");
  para.classList.add("results-text");
  para.textContent = checkRegex(number) ? "Valid US number: " + number : "Invalid US number: " + number;
  results.appendChild(para);
}

const update = () => {
  const number = input.value.trim();

  if (number.length === 0) alert("Please provide a phone number");

  appendResultText(number);

}

const clearOutput = () => {
  results.replaceChildren();
}

// event listeners
checkBtn.addEventListener("click", update);
userInput.addEventListener("keyup", (event) => {
  if(event.key === " Enter") update();
});

clearBtn.addEventListener("click", clearOutput);
