const form = document.querySelector(".form-container");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type"); // <select>
const orderButton = document.querySelector("#orderButton");

let total;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  // Price icon
  const totalPriceElement = document.querySelector("#totalPrice"); //span - total price
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);
  totalPriceElement.textContent = `$${total}`;
  checkToppings();

  // Animation
  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

const addItem = (itemName, category) => {
  if (category === "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};
const removeItem = () => {};

const checkToppings = () => {
  toppings = [];
  extras = [];

  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
  console.log("toppings array", toppings);
  console.log("extras array", extras);
};
const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  const orderType = document.querySelector("#order_type");
  const orderToppings = document.querySelector("#order_toppings");
  const orderExtras = document.querySelector("#order_extras");
  const orderName = document.querySelector("#order_name");

  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderName.textContent = customerName;
};

form.addEventListener("change", pancakePriceCalc);
orderButton.addEventListener("click", displayOrder);
