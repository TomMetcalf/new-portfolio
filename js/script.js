function runTypingEffect() {
  const text = "I'm a Full Stack JavaScript Developer and I love learning, creating and developing new skills.";
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
