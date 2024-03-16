document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.one-two-three .card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('card--active');
        });
    });
});