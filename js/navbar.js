// navigation

function handleNavbar() {
  const body = document.body;
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.navbar-nav');
  const flyoutToggles = document.querySelectorAll('.nav-flyout-toggle');

  const constants = {
    visible: 'visible',
    active: 'active',
  };

  function closeFlyout() {
    document.querySelectorAll('.nav-flyout').forEach(function (menu) {
      menu.classList.remove(constants.visible);
    });
  }

  // handle flyout menu
  flyoutToggles &&
    flyoutToggles.forEach(function (toggle) {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        const flyoutMenu = this.nextElementSibling;
        if (flyoutMenu.classList.contains(constants.visible)) {
          toggle.classList.remove(constants.active);
          flyoutMenu.classList.remove(constants.visible);
        } else {
          closeFlyout();
          flyoutMenu.classList.add(constants.visible);
          toggle.classList.add(constants.active);
        }
      });
    });

  // handle click outside to close flyout
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-flyout-toggle')) {
      closeFlyout();
      document
        .querySelectorAll('.nav-flyout-toggle')
        .forEach(function (toggle) {
          toggle.classList.remove(constants.active);
        });
    }
  });

  // handle burger menu
  burger &&
    nav &&
    burger.addEventListener('click', function () {
      body.style.overflow =
        body.style.overflow === 'hidden' ? 'auto' : 'hidden';
      burger.classList.toggle(constants.active);
      nav.classList.toggle(constants.visible);
    });
}

window.addEventListener('DOMContentLoaded', handleNavbar);

export { handleNavbar };
