// 1. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Heart Bubble Popups
document.querySelectorAll('.heart-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        const msg = bubble.getAttribute('data-msg');
        Swal.fire({
            title: 'My Heart Says...',
            text: msg,
            background: '#151515',
            color: '#fff',
            confirmButtonColor: '#660000',
            showClass: { popup: 'animate__animated animate__heartBeat' }
        });
    });
});

// 3. The Runaway "No" Button
const noBtn = document.getElementById('no-btn');
const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

document.getElementById('noBtn').addEventListener('mouseover', moveButton);

// 4. Success Message
document.getElementById('yesBtn').addEventListener('click', () => {
    Swal.fire({
        title: 'I Knew It! ❤️',
        text: 'I love you to the moon and back. Thank you for forgiving me!',
        icon: 'success',
        background: '#151515',
        color: '#fff'
    });
});
