document.addEventListener('DOMContentLoaded', () => {
    // Subtle mouse move effect for the background radial
    const radial = document.querySelector('.background-radial');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        radial.style.background = `radial-gradient(circle at ${x}% ${y}%, #111 0%, #050505 100%)`;
    });

    // Console message
    console.log('%c feynmanpi.com ', 'background: #000; color: #fff; font-size: 20px; font-weight: bold;');
    console.log('Building at the speed of light.');
});
