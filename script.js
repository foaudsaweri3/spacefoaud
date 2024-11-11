document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
    alert('شكراً لتواصلك معنا، سنقوم بالرد عليك قريباً!');
    this.reset(); // إعادة تعيين النموذج بعد الإرسال
});
