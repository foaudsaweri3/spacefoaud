// إضافة تأثيرات حركية إلى الشريط التنقل
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

// إضافة تأثيرات حركية إلى الأقسام
document.addEventListener('DOMContentLoaded', function() {
 const sections = document.querySelectorAll('main section');
 sections.forEach(function(section) {
 section.addEventListener('mouseover', function() {
 section.classList.add('hover');
 });
 section.addEventListener('mouseout', function() {
 section.classList.remove('hover');
 });
 });
});
