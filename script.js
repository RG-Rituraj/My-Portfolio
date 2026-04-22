// Function to show project cards when you scroll down
function showOnScroll() {
    const cards = document.querySelectorAll('.bento-item');
    
    cards.forEach(card => {
        const topPosition = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // If card is visible on screen
        if (topPosition < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Initial Animation Setup
document.querySelectorAll('.bento-item').forEach(item => {
    item.style.opacity = "0"; // Hide at start
    item.style.transform = "translateY(30px)"; // Move down slightly
    item.style.transition = "0.6s ease-out"; // Smooth transition
});

// Run function when scrolling
window.addEventListener('scroll', showOnScroll);

// Run once when page loads
showOnScroll();