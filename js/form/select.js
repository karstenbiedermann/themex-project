//
// select
//

function handleSelectDropdown() {
  const constants = {
    visible: 'visible',
    selected: 'selected',
  };

  function closeAllDropdowns() {
    document.querySelectorAll('.select-options').forEach((menu) => {
      menu.classList.remove(constants.visible);
      menu.previousElementSibling.classList.remove(constants.visible);
    });
  }

  document.addEventListener('click', (event) => {
    const selectToggle = event.target.closest('.select-trigger');
    const alreadyVisible =
      selectToggle && selectToggle.classList.contains(constants.visible);

    // handle click outside of dropdown
    if (!selectToggle || alreadyVisible) {
      closeAllDropdowns();
    }

    if (selectToggle && !alreadyVisible) {
      closeAllDropdowns(); // close all dropdowns before opening the selected one
      selectToggle.classList.add(constants.visible);
      selectToggle.nextElementSibling.classList.add(constants.visible);
    }
  });

  const selectOptionsContainers = document.querySelectorAll('.select-options');
  selectOptionsContainers.forEach((selectOptions) => {
    selectOptions.addEventListener('click', (option) => {
      const selectOption = option.target.closest('.select-option');
      if (!selectOption) return;

      const selectTitle = selectOption.dataset.title;
      const selectToggle = selectOptions.previousElementSibling;
      const selectNative = selectOptions.nextElementSibling;

      selectToggle.textContent = selectTitle;
      selectToggle.classList.remove(constants.visible);
      selectOptions.classList.remove(constants.visible);
      selectNative.value = selectOption.dataset.value;
    });
  });
}

window.addEventListener('DOMContentLoaded', handleSelectDropdown);

export { handleSelectDropdown };
