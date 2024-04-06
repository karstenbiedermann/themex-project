//
// accordion
//

function handleAccordion() {
  const accordion = document.querySelectorAll('.accordion');
  const constants = {
    visible: 'visible',
  };

  function toggleAccordionItem(item) {
    const accordionHeader = item.querySelector('.accordion-header');
    const isExpanded = accordionHeader.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      item.classList.remove(constants.visible);
      accordionHeader.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add(constants.visible);
      accordionHeader.setAttribute('aria-expanded', 'true');
    }
  }

  accordion.forEach((accordion) => {
    const accordionItems = accordion.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector('.accordion-header');
      accordionHeader.addEventListener('click', () => {
        toggleAccordionItem(item);
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', handleAccordion);

export { handleAccordion };
