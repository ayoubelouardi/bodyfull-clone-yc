const swiper = new Swiper(".mySwiper", {
    // 1. Core Settings
    loop: true,               // Enable infinite looping
    spaceBetween: 16,         // Gap between slides (1rem)
    
    // 2. Continuous Sliding Effect (Autoplay)
    autoplay: {
        delay: 0,             // Zero delay for continuous movement
        disableOnInteraction: false, // Keep sliding even after user interacts
    },
    speed: 4000,              // Duration of the full cycle (higher = slower, lower = faster)
    
    // 3. Responsiveness (Slides per View)
    breakpoints: {
        // Mobile (0px and up): Show 1 slide at a time
        0: {
            slidesPerView: 1,
        },
        // Desktop (640px and up): Show 4 slides at a time
        640: {
            slidesPerView: 4,
        }
    },
    
    // 4. Manual Fix for Continuous Marquee Effect (Optional but recommended)
    allowTouchMove: false,    // Prevent user swiping for a clean marquee effect
    
    // 5. Ensure Slides are Square after Swiper initializes
    on: {
        init: function () {
            // Force height to match width for perfect squares
            const slides = this.slides;
            slides.forEach(slide => {
                const width = slide.offsetWidth;
                slide.style.height = `${width}px`;
            });
        },
        resize: function () {
                // Re-apply on resize
                const slides = this.slides;
                slides.forEach(slide => {
                    const width = slide.offsetWidth;
                    slide.style.height = `${width}px`;
                });
        }
    }
});

// Initialize Video Carousel Swiper
const videoSwiper = new Swiper(".videoSwiper", {
    // 1. Core Settings
    loop: true,                    // Enable infinite/continuous looping
    spaceBetween: 16,              // Gap between video cards (1rem)
    
    // 2. Continuous Autoplay
    autoplay: {
        delay: 3000,               // 3 second delay between transitions
        disableOnInteraction: false, // Keep autoplay after user interaction
    },
    speed: 800,                    // Smooth transition speed
    
    // 3. Responsiveness - Show multiple videos on desktop, 1 on mobile
    breakpoints: {
        // Mobile (0px and up): Show 1 video at a time
        0: {
            slidesPerView: 1,
        },
        // Tablet (768px and up): Show 2 videos
        768: {
            slidesPerView: 2,
        },
        // Desktop (1024px and up): Show 3 videos at a time
        1024: {
            slidesPerView: 3,
        }
    },
    
    // 4. Navigation - Custom arrows
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },
    
    // 5. Pagination - Custom dots
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' w-3 h-3 rounded-full bg-gray-400 inline-block cursor-pointer hover:bg-gray-600"></span>';
        },
    },
    
    // 6. Make slides vertical (aspect ratio for video reels)
    on: {
        init: function () {
            const slides = this.slides;
            slides.forEach(slide => {
                // Make video cards vertical (9:16 aspect ratio like reels/shorts)
                const width = slide.offsetWidth;
                slide.style.height = `${width * 1.77}px`; // 16:9 aspect ratio (vertical)
            });
        },
        resize: function () {
            const slides = this.slides;
            slides.forEach(slide => {
                const width = slide.offsetWidth;
                slide.style.height = `${width * 1.77}px`;
            });
        }
    }
});

// Initialize Fast Sliding 2x2 Grid Swiper
const gridSwiper = new Swiper(".gridSwiper", {
    // 1. Core Settings
    loop: true,                    // Enable infinite looping
    spaceBetween: 0,               // No gap between slides
    
    // 2. Fast Autoplay for Dynamic Display
    autoplay: {
        delay: 1500,               // 1.5 second delay (fast sliding)
        disableOnInteraction: false, // Keep sliding after user interaction
    },
    speed: 600,                    // Quick transition speed
    
    // 3. Effect
    effect: 'fade',                // Smooth fade transition between grid sets
    fadeEffect: {
        crossFade: true
    },
    
    // 4. Single slide view (one 2x2 grid at a time)
    slidesPerView: 1,
});

// Initialize Ingredient Carousel Swiper
const ingredientSwiper = new Swiper(".ingredientSwiper", {
    // 1. Core Settings
    loop: true,                    // Enable infinite looping
    spaceBetween: 0,               // No gap between slides
    
    // 2. Autoplay
    autoplay: {
        delay: 4000,               // 4 second delay between transitions
        disableOnInteraction: false,
    },
    speed: 600,                    // Smooth transition
    
    // 3. Navigation - Custom arrows
    navigation: {
        nextEl: '.ingredient-next',
        prevEl: '.ingredient-prev',
    },
    
    // 4. Pagination - Custom dots
    pagination: {
        el: '.ingredient-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' w-3 h-3 rounded-full bg-gray-600 inline-block cursor-pointer hover:bg-black transition-all"></span>';
        },
    },
    
    // 5. Single slide view
    slidesPerView: 1,
});

// Make ingredient tags interactive - click to go to corresponding slide
const ingredientTags = document.querySelectorAll('.ingredient-tag');

ingredientTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-ingredient'));
        ingredientSwiper.slideToLoop(slideIndex);
    });
});

// FAQ Accordion Toggle Function
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    
    // Check if currently open
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
    
    if (isOpen) {
        // Close the answer
        answer.style.maxHeight = '0';
        icon.textContent = '+';
    } else {
        // Open the answer
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
    }
}
