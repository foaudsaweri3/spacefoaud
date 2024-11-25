// معلومات الحيوانات
const animalDetails = {
    lion: {
        name: 'الأسد',
        description: 'الأسد هو أحد أكبر القطط البرية، ويُعرف بلقب "ملك الغابة". يعيش في أفريقيا وبعض مناطق الهند.'
    },
    elephant: {
        name: 'الفيل',
        description: 'الفيل هو أكبر الثدييات البرية ويتميز بذاكرته القوية وحبه للأسرة. توجد الأفيال في أفريقيا وآسيا.'
    },
    tiger: {
        name: 'النمر',
        description: 'النمر هو قط بري يعيش في الغابات الكثيفة، ويشتهر بقوته وسرعته. وهو من الحيوانات المهددة بالانقراض.'
    },
    giraffe: {
        name: 'الزرافة',
        description: 'الزرافة هي أطول الثدييات على وجه الأرض، وتعيش في السهول الأفريقية. تميزها الرقبة الطويلة التي تصل إلى الأشجار العالية.'
    }
};

// عناصر HTML من الصفحة
const modal = document.getElementById("animal-info-modal");
const animalNameElement = document.getElementById("animal-name");
const animalDescriptionElement = document.getElementById("animal-description");
const closeModalButton = document.querySelector(".close-btn");

// إظهار نافذة معلومات الحيوان
function showAnimalInfo(animalKey) {
    const animal = animalDetails[animalKey];
    animalNameElement.textContent = animal.name;
    animalDescriptionElement.textContent = animal.description;

    modal.classList.remove("hidden");
}

// إغلاق النافذة المنبثقة
function closeModal() {
    modal.classList.add("hidden");
}

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// التمرير السلس عند النقر على روابط التنقل
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // التمرير السلس إلى القسم المستهدف
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
