function runTypingEffect(text) {
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 70;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

function closeNavbarMenu() {
  // Check if the menu is open before closing it
  var navbarToggleButton = document.getElementById('navbarToggleButton');
  var navbarNavDropdown = document.getElementById('navbarNavDropdown');
  if (navbarToggleButton.getAttribute('aria-expanded') === 'true') {
    // Use Bootstrap's collapse API to close the menu
    var bsCollapse = new bootstrap.Collapse(navbarNavDropdown, {
      toggle: false,
    });
    bsCollapse.hide();
  }
}