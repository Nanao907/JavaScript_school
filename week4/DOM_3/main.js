const input = document.querySelector("#text");
const text = document.querySelector("#displayText");

const changeText = () => {
  console.log(input.value);
  text.textContent = input.value;
};

// input.addEventListener('change', changeText);  change is good for select, check boxes 'wait until I get away'
input.addEventListener("input", changeText);
