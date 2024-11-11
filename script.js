// Данные о планетах
const planets = {
    mercury: {
        name: 'Меркурий',
        description: 'Ближайшая к Солнцу планета, небольшая и каменистая.',
        image: 'https://e7.pngegg.com/pngimages/957/238/png-clipart-mercury-planet-planet-miscellaneous-sphere-thumbnail.png'
    },
    venus: {
        name: 'Венера',
        description: 'Вторая планета от Солнца, похожа по размеру на Землю.',
        image: 'https://example.com/venus.jpg'
    },
    // Добавьте данные для остальных планет
};

// Функция отображения планеты
function showPlanet(planetName) {
    const planetDetails = document.getElementById('planet-details');
    const planetNameEl = document.getElementById('planet-name');
    const planetImage = document.getElementById('planet-image');
    const planetDescription = document.getElementById('planet-description');

    const planet = planets[planetName];
    
    planetNameEl.textContent = planet.name;
    planetImage.src = planet.image;
    planetDescription.textContent = planet.description;
    
    planetDetails.classList.remove('hidden');
}

// Анимация звездного неба
function createStarfield() {
    const canvas = document.getElementById('space-background');
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

// Инициализация
window.onload = createStarfield;
