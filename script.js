const planetData = {
    mercury: {
        name: "Меркурий",
        image: "https://example.com/mercury.jpg",
        description: "Ближайшая к Солнцу планета...",
        diameter: "4,879 км",
        distance: "57.9 млн км",
        year: "88 дней"
    },
};

function createStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }

    function animate() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            
            star.x -= star.speed;
            if (star.x < 0) star.x = canvas.width;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    createStarfield();

    const navLinks = document.querySelectorAll('nav ul li a');
    const planetDetails = document.getElementById('planet-details');
    const closeButton = document.getElementById('close-details');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const planetName = link.dataset.planet;
            showPlanetDetails(planetName);
        });
    });

    closeButton.addEventListener('click', () => {
        planetDetails.classList.add('hidden');
    });
});

function showPlanetDetails(planetName) {
    const planet = planetData[planetName];
    
    document.getElementById('planet-name').textContent = planet.name;
    document.getElementById('planet-img').src = planet.image;
    document.getElementById('planet-text').textContent = planet.description;
    document.getElementById('planet-diameter').textContent = planet.diameter;
    document.getElementById('planet-distance').textContent = planet.distance;
    document.getElementById('planet-year').textContent = planet.year;

    const planetDetails = document.getElementById('planet-details');
    planetDetails.classList.remove('hidden');
}
