document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = (target) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.onload = () => img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        observer.observe(target);
    };

    images.forEach(img => {
        lazyLoad(img);
    });

    // Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;
});
