document.addEventListener('DOMContentLoaded', () => {
    // Add a simple animation to the 404 number on load
    const heading = document.querySelector('header h1');
    heading.style.transform = 'scale(0.8)';
    heading.style.opacity = '0';
    
    setTimeout(() => {
        heading.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
        heading.style.transform = 'scale(1)';
        heading.style.opacity = '1';
    }, 500);

    // Add a simple hover effect to the button
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('mouseenter', () => {
        homeButton.style.transform = 'translateY(-5px) scale(1.05)';
    });
    homeButton.addEventListener('mouseleave', () => {
        homeButton.style.transform = 'translateY(0) scale(1)';
    });
});
