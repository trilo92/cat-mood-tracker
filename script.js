const moodButtons = document.querySelectorAll(".mood-btn");
const moodLog = document.getElementById("moodLog");
const tipBox = document.getElementById("tipBox");
const lunaHelper = document.getElementById("lunaHelper");

const tips = [
  "Take three deep breaths 🌬️",
  "Wrap up in a cozy blanket 🧣",
  "Cuddle with your cat or a soft pillow 🐈",
  "Drink some warm tea ☕",
  "Put on your favorite calming playlist 🎵",
  "Light a candle and sit quietly 🕯️",
  "Stretch your body like a cat 🐾",
  "Say something kind to yourself 💖"
];

const lunaMessages = [
  "Luna says: You're doing your best, and that’s enough 💕",
  "Luna purrs softly and reminds you to be kind to yourself 🐾",
  "Luna curled up next to you – you’re not alone 💖",
  "Luna meows: Let’s take the day one paw at a time 🐱",
  "Luna blinked slowly at you. That’s cat language for 'I love you' 💫"
];

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add mood log entry
    const entry = document.createElement("div");
    entry.className = "mood-entry";
    entry.textContent = `${time} — Feeling ${mood}`;
    moodLog.prepend(entry);

    // Show a random cozy tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipBox.textContent = randomTip;

    // Show Luna's mood-boosting message
    const lunaMessage = lunaMessages[Math.floor(Math.random() * lunaMessages.length)];
    lunaHelper.textContent = lunaMessage;
  });
});
