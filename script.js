function showOnScroll() {
    const cards = document.querySelectorAll('.bento-item');
    
    cards.forEach(card => {
        const topPosition = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

    
        if (topPosition < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

document.querySelectorAll('.bento-item').forEach(item => {
    item.style.opacity = "0"; 
    item.style.transform = "translateY(30px)"; 
    item.style.transition = "0.6s ease-out"; 
});


window.addEventListener('scroll', showOnScroll);

showOnScroll();
