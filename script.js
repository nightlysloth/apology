// Short, sweet messages for the 6 roses
const sweetMessages = {
    1: "I'm really sorry. 🥺❤️",
    2: "You are the best thing since March. 🌹",
    3: "No doubts, just us. Forever. 🤞",
    4: "You look cute even when you're mad. 😘",
    5: "My heart only wants you, Swara. 💖",
    6: "Let's start 2026 happy, please? ✨"
};

let openedRoses = new Set();

function nextSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

function openMessage(num) {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('popup-content');
    
    content.innerText = sweetMessages[num];
    overlay.classList.add('active');
    
    openedRoses.add(num);
    // Show final button after opening at least 4 roses
    if(openedRoses.size >= 4) {
        document.getElementById('finalBtn').classList.remove('hidden');
    }
}

function closeMessage() {
    document.getElementById('overlay').classList.remove('active');
}
