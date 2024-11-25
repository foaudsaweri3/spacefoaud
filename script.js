// Добавляем событие клика на заголовки, чтобы разворачивать и сворачивать секции
document.addEventListener('DOMContentLoaded', function() {
 const headings = document.querySelectorAll('h2');
 headings.forEach(function(heading) {
 heading.addEventListener('click', function() {
 const section = heading.parentNode;
 section.classList.toggle('expanded');
 });
 });
});

// Добавляем анимацию к навигации
document.addEventListener('scroll', function() {
 const nav = document.querySelector('header nav');
 const sections = document.querySelectorAll('main section');
 const scrollTop = window.scrollY;
 sections.forEach(function(section) {
 const top = section.offsetTop;
 const height = section.offsetHeight;
 if (scrollTop >= top && scrollTop < top + height) {
 nav.querySelector(`a[href="#${section.id}"]`).classList.add('active');
 } else {
 nav.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
 }
 });
});
