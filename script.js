document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobil Menü (Hamburger Menu) Yönetimi
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Linklere tıklandığında menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. Sık Sorulan Sorular (Akordiyon Sistemi)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            
            // Diğer açık olan panelleri kapat
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // Tıklanan paneli aç/kapat
            accordionItem.classList.toggle('active');
        });
    });

    // 3. Kaydırmaya Duyarlı Aktif Menü Linki (Scrollspy)
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

});