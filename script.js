// 1. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Pop-up Function
function pop(title, text) {
    Swal.fire({
        title: title, text: text,
        background: '#1a1a1a', color: '#fff',
        confirmButtonColor: '#c5a059'
    });
}

// 3. No Button Logic (Moves + Opens Form)
const noBtn = document.getElementById('noBtn');
let moveCount = 0;

noBtn.addEventListener('mouseover', () => {
    if (moveCount < 5) {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        moveCount++;
    }
});

noBtn.addEventListener('click', async () => {
    const { value: text } = await Swal.fire({
        title: "I'm sorry! What can I do to fix this?",
        input: "textarea",
        inputPlaceholder: "Tell me what you need...",
        showCancelButton: true,
        confirmButtonText: 'Send to me',
        confirmButtonColor: '#4a0404'
    });

    if (text) {
        // This sends her reply to your email via Formspree
        fetch("https://formspree.io/f/your_form_id", {
            method: "POST",
            body: JSON.stringify({ message: text }),
            headers: { 'Content-Type': 'application/json' }
        });
        Swal.fire("Sent", "I will do exactly that. I promise.", "success");
    }
});

// 4. Yes Button (Opens Letter)
const modal = document.getElementById("letterModal");
const yesBtn = document.getElementById("yesBtn");
const span = document.getElementsByClassName("close")[0];

yesBtn.onclick = () => { modal.style.display = "block"; }
span.onclick = () => { modal.style.display = "none"; }
