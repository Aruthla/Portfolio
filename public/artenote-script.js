// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initTypewriter();
    initCounters();
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
        observer.observe(item);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
        observer.observe(item);
    });
}

// ========================================
// TYPEWRITER EFFECT (Optional Enhancement)
// ========================================

function initTypewriter() {
    const gradientText = document.querySelector('.gradient-text');
    
    if (gradientText) {
        const text = gradientText.textContent;
        gradientText.textContent = '';
        gradientText.style.borderRight = '2px solid var(--primary)';
        
        let index = 0;
        
        function type() {
            if (index < text.length) {
                gradientText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 80);
            } else {
                // Remove cursor after typing
                setTimeout(() => {
                    gradientText.style.borderRight = 'none';
                }, 500);
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 500);
    }
}

// ========================================
// ANIMATED COUNTERS
// ========================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent.trim();
                
                // Handle special characters (like ∞)
                if (target === '∞') {
                    animateInfinity(counter);
                } else if (target.includes('+')) {
                    // Handle numbers with +
                    const number = parseInt(target);
                    animateCounter(counter, 0, number, speed, '+');
                } else if (target.includes('%')) {
                    // Handle percentages
                    const number = parseInt(target);
                    animateCounter(counter, 0, number, speed, '%');
                } else {
                    const number = parseInt(target);
                    if (!isNaN(number)) {
                        animateCounter(counter, 0, number, speed);
                    }
                }
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

function animateInfinity(element) {
    const symbols = ['∞', '♾️', '∞'];
    let index = 0;
    
    setInterval(() => {
        element.textContent = symbols[index];
        index = (index + 1) % symbols.length;
    }, 1000);
}

// ========================================
// FEATURE CARD HOVER EFFECTS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ========================================
// PARALLAX EFFECT FOR ORBS
// ========================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.1 + (index * 0.05);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// MOCKUP WINDOW TILT EFFECT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const mockup = document.querySelector('.mockup-window');
    
    if (mockup) {
        mockup.addEventListener('mousemove', function(e) {
            const rect = mockup.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        mockup.addEventListener('mouseleave', function() {
            mockup.style.transform = 'perspective(1000px) rotateY(-10deg)';
        });
    }
});

// ========================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ========================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copié dans le presse-papiers !');
    }).catch(err => {
        console.error('Erreur de copie:', err);
    });
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PROGRESS BAR ON SCROLL
// ========================================

window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            z-index: 10000;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', function(e) {
    // ESC to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Ctrl/Cmd + K to go to contact
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ========================================
// LAZY LOAD IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    '%c✨ ArteNote - En Développement ✨',
    'font-size: 20px; font-weight: bold; color: #430b66; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);
console.log(
    '%cProjet développé par Laëtitia Borde',
    'font-size: 14px; color: #6b7280;'
);
console.log(
    '%c🌐 Portfolio: https://aruthla.github.io/Portfolio/',
    'font-size: 12px; color: #a855f7;'
);
