//
// product
//

function product() {
  const colorVariants = document.querySelectorAll('.product-color-selector button');
  const regularVariants = document.querySelectorAll('.product-variant-selector button');
  const decreaseButton = document.querySelector('.product-quantity-minus');
  const increaseButton = document.querySelector('.product-quantity-plus');
  const quantityInput = document.querySelector('.product-quantity-input');
  const constants = {
    active: 'active',
  };

  function handleChangeVariant(variant) {
    variant.forEach((button) => {
      button.addEventListener('click', () => {
        variant.forEach((button) => button.classList.remove(constants.active));
        button.classList.add(constants.active);
      });
    });
  }

  regularVariants && handleChangeVariant(regularVariants);
  colorVariants && handleChangeVariant(colorVariants);

  decreaseButton &&
    decreaseButton.addEventListener('click', () => {
      if (quantityInput.value > 1) {
        quantityInput.value--;
      }
    });

  increaseButton &&
    increaseButton.addEventListener('click', () => {
      quantityInput.value++;
    });
}

window.addEventListener('DOMContentLoaded', product);

export { product };
