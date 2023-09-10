const $ = document;

let count = 0;

const countContainer = $.querySelector(".count");
const plus = $.getElementById("plus");
const mines = $.getElementById("mines");

plus.addEventListener("click", () => {
  count++;
  updateDisplay();
});

mines.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  countContainer.classList.add("count-changer");
  setTimeout(() => {
    countContainer.classList.remove("count-changer");
  }, 100);

  countContainer.textContent = count;
  if (count < 0) {
    count = 0;
    countContainer.textContent = count;
  }
}

const productFigure = $.querySelector(".product-img");
const colorsRadios = $.querySelectorAll("input[name=product-color]");

function catchValue() {
  products.forEach((el) => {
    if (this.value == el.product_clr) {
      productFigure.src = el.product_src;
      productFigure.classList.add("changeProduct");
      setTimeout(() => {
        productFigure.classList.remove("changeProduct");
      }, 1000);
    }
  });
}

colorsRadios.forEach((colorsRadios) => {
  colorsRadios.addEventListener("change", catchValue);
});
