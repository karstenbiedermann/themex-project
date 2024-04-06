//
// modal
//

function handleModal() {
  const modals = document.querySelectorAll('.modal');
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modalBackground = document.createElement('div');
  const body = document.body;
  const constants = {
    open: 'modal--open',
  };

  const toggleBodyScroll = (isModalOpen) => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
  };

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add(constants.open);
      toggleBodyScroll(true);
      body.appendChild(modalBackground);
      modalBackground.className = 'modal-backdrop';
    }
  };

  const closeModal = (modal) => {
    modal.classList.remove(constants.open);
    modalBackground.remove();
    toggleBodyScroll(false);
  };

  // trigger open modal on click
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-target');
      openModal(modalId);
    });
  });

  // trigger close modal on click
  modals.forEach((modal) => {
    modal.querySelector('.modal-close').addEventListener('click', () => {
      closeModal(modal);
    });
  });

  // trigger close modal on click outside of modal
  document.addEventListener('click', (outsideClick) => {
    let windowTarget = outsideClick.target;
    modals.forEach((modal) => {
      if (windowTarget == modal) {
        if (modal.classList.contains(constants.open)) {
          closeModal(modal);
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', handleModal);

export { handleModal };
