// Данные о планетах
const planets = {
    mercury: {
        name: 'Меркурий',
        description: 'Ближайшая к Солнцу планета, небольшая и каменистая.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvHduBtGdyAKvhjK4gopwQ_0fRTk03iAd_QFj_W4DYXIkK2nhN9JjGbuXIrqe5cpAYj3AdJlBsI3QxQo8_X2Mn_KA3L2iixL-XZJdNV3nHYd1Qds7iWNKlh7aHtTrf92l3gh5ZxtLuPlSCpMLnPmRk2N_lvy_EgHZXm6-9Xd3MD5stwcpd-mV7ScXtYw8I/s320/%E2%80%94Pngtree%E2%80%94mercury%20planet_8364672.png'
    },
    venus: {
        name: 'Венера',
        description: 'Вторая планета от Солнца, похожа по размеру на Землю.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHHDT3Vk1Eax2YJVLhaTy4fZsW0jX9STxoRWp_t4pQg7mLDXzieOf5GAjS6kcSfVp_i6u2rLxql95H0MFLtLRnaIT7dJN4d66CJeQQ5xUAQhl6IL62Chc2Fau9gnWO4J48BlrMlfwYaorHDzg_5fxmPpqI5VKuYtTo0t0TtjoL1rM5KXtj0dhFvl9Fwh6W/s320/pngwing.com.png'
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
