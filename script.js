document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333';
        });
        planet.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});
