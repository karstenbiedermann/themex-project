//
// form validation
//

function handleFieldValidation() {
  const form = document.querySelector('.form');
  const submitButton = document.querySelector('.form-action-submit');
  let validateDelay;

  const constants = {
    visible: 'visible',
    hidden: 'hidden',
    error: 'input--error',
    success: 'input--success',
    fieldError: 'form-element-error',
    messageError: 'form-element-message--error',
  };

  function toggleSubmitButton(state) {
    submitButton.classList.toggle('form-action-submit--disabled', state);
    submitButton.disabled = state;
  }

  function validateField(formElement) {
    const formElementField = formElement.querySelector('.form-element-field');
    const message = formElement.querySelector('.form-element-message');

    // check if field is valid
    const isValid = formElementField.checkValidity();

    formElementField.classList.toggle(constants.error, !isValid);
    formElementField.classList.toggle(constants.success, isValid);
    message.classList.toggle(constants.visible, !isValid);
    formElement.classList.toggle(constants.fieldError, !isValid);
    message.classList.toggle(constants.messageError, !isValid);
  }

  if (form && submitButton) {
    // initial validation
    toggleSubmitButton(!form.checkValidity());

    form.addEventListener('input', (event) => {
      clearTimeout(validateDelay);

      const targetElement = event.target.closest('.form-element');
      if (!targetElement) return;

      validateDelay = setTimeout(() => {
        validateField(targetElement);

        // check if form is valid and toggle submit button
        toggleSubmitButton(!form.checkValidity());
      }, 500);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        return;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', handleFieldValidation);
