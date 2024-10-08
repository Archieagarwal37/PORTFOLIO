const dynamicTexts = ["new content", "exciting features", "amazing animations", "dynamic updates"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100; // Typing speed for individual characters
const pauseDuration = 2000; // Pause between words

const dynamicTextElement = document.getElementById('dynamicText');

function typeEffect() {
    const currentText = dynamicTexts[currentIndex];
    if (isDeleting) {
        // Deleting effect
        dynamicTextElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % dynamicTexts.length; // Move to the next word
            setTimeout(typeEffect, typingSpeed); // Small pause before typing again
        } else {
            setTimeout(typeEffect, typingSpeed / 2); // Speed up when deleting
        }
    } else {
        // Typing effect
        dynamicTextElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseDuration); // Pause after typing a word
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, typingSpeed);
});