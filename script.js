
const words = [
    "Web Developer",
    "Creative Learner",
    "Future Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();
