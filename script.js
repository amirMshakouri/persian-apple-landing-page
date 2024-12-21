document.addEventListener("DOMContentLoaded", function() {
    // فعال کردن منوهای کشویی
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
            dropdownContent.style.opacity = 1;
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
            dropdownContent.style.opacity = 0;
        });
    });

    // تغییر هدر به حالت sticky
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.apple-header');
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // منوی موبایل
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.apple-nav ul');
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});
