// Component Loading for Local Files
document.addEventListener('DOMContentLoaded', function() {
    // Header HTML content
    const headerHTML = `
        <header>
            <div class="container header-container">
                <div class="logo">
                    <img src="Logo_CatNipAcres.png" alt="Catnip Acres Logo">
                    <div class="logo-text">
                        <h1>Catnip Acres</h1>
                        <span>Veterinary Clinic</span>
                    </div>
                </div>
                <div class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html" id="nav-index">Home</a></li>
                        <li><a href="about.html" id="nav-about">About</a></li>
                        <li><a href="services.html" id="nav-services">Services</a></li>
                        <li><a href="hours.html" id="nav-hours">Hours</a></li>
                        <li><a href="payment.html" id="nav-payment">Payment</a></li>
                        <li><a href="additional-resources.html" id="nav-additional-resources">Resources</a></li>
                        <li><a href="dental-referrals.html" id="nav-dental-referrals">Dental Referrals</a></li>
                        <li><a href="contact.html" id="nav-contact">Contact</a></li>
                        <li class="call-button"><a href="tel:7246270846"><i class="fas fa-phone"></i> (724) 627-0846</a></li>
                        <li class="theme-toggle" id="theme-toggle">
                            <i class="fas fa-moon theme-toggle-icon moon"></i>
                            <i class="fas fa-sun theme-toggle-icon sun"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    // Footer HTML content
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>Catnip Acres</h3>
                        <p>Providing affordable veterinary care for cats and dogs in Waynesburg, PA and the surrounding area.</p>
                        <p>"Saving a life, one animal at a time"</p>
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=100090624877802#" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
                            <a href="mailto:catnip.acres@hotmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="hours.html">Hours</a></li>
                            <li><a href="payment.html">Payment</a></li>
                            <li><a href="additional-resources.html">Resources</a></li>
                            <li><a href="dental-referrals.html">Dental Referrals</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Services</h3>
                        <ul class="footer-links">
                            <li><a href="services.html#wellness">Wellness Exams</a></li>
                            <li><a href="services.html#vaccinations">Vaccinations</a></li>
                            <li><a href="services.html#spay-neuter">Spay & Neuter</a></li>
                            <li><a href="services.html#diagnostics">Diagnostic Services</a></li>
                            <li><a href="services.html#surgery">Surgical Procedures</a></li>
                            <li><a href="services.html#telehealth">Telehealth Consultations</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact</h3>
                        <ul class="footer-links">
                            <li><i class="fas fa-map-marker-alt"></i> 1159 Morris Street, Waynesburg, PA 15370</li>
                            <li><i class="fas fa-phone"></i> (724) 627-0846</li>
                            <li><i class="fas fa-envelope"></i> info@catnip-acres.com</li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 Catnip Acres Veterinary Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    // Insert header and footer into the page
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        
        // Set active page in navigation
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPage.split('.')[0] || 'index';
        const navLink = document.getElementById(`nav-${pageName}`);
        
        if (navLink) {
            navLink.classList.add('active');
        }
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize mobile menu
    initializeMobileMenu();

    // Initialize expandable sections
    initializeExpandableSections();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu after clicking a link
                const nav = document.querySelector('nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Current year for copyright
    const currentYearElement = document.querySelector('.current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const requiredInputs = form.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.classList.add('invalid');
                } else {
                    this.classList.remove('invalid');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('invalid');
                }
            });
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        
        if (question) {
            question.addEventListener('click', function() {
                const isOpen = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't open before
                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Image lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    observer.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
        });
    }

    // Testimonial carousel (if exists)
    const testimonialContainer = document.querySelector('.testimonial-container');
    
    if (testimonialContainer) {
        const testimonials = testimonialContainer.querySelectorAll('.testimonial');
        const prevBtn = testimonialContainer.querySelector('.prev-btn');
        const nextBtn = testimonialContainer.querySelector('.next-btn');
        const dots = testimonialContainer.querySelectorAll('.dot');
        
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = testimonials.length - 1;
                showTestimonial(newIndex);
            });
            
            nextBtn.addEventListener('click', function() {
                let newIndex = currentIndex + 1;
                if (newIndex >= testimonials.length) newIndex = 0;
                showTestimonial(newIndex);
            });
        }
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', function() {
                showTestimonial(i);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }, 5000);
    }

    // COG Form Submission
    const cogForm = document.getElementById('cog-form');
    const formResponse = document.getElementById('form-response');
    
    if (cogForm) {
        cogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to your server
            // For demo purposes, we'll just show a success message
            cogForm.style.display = 'none';
            formResponse.style.display = 'block';
            
            // Scroll to response message
            formResponse.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Display today's hours on the index page
    displayTodaysHours();
});

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!mobileMenuToggle || !nav) return;

    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (nav.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
            nav.classList.remove('active');
        }
    });
}

// Expandable sections functionality
function initializeExpandableSections() {
    const expandableHeaders = document.querySelectorAll('.expandable-header');
    
    expandableHeaders.forEach(header => {
        // Make first section expanded by default
        if (header === expandableHeaders[0]) {
            header.classList.add('expanded');
            const content = header.nextElementSibling;
            content.classList.add('expanded');
        }
        
        header.addEventListener('click', function() {
            // Toggle current section
            this.classList.toggle('expanded');
            const content = this.nextElementSibling;
            content.classList.toggle('expanded');
            
            // Smooth scroll to this section if it's being expanded
            if (this.classList.contains('expanded')) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

// Function to display today's hours
function displayTodaysHours() {
    const todayHoursElement = document.getElementById('today-hours');
    
    if (!todayHoursElement) return;
    
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const hoursSchedule = [
        { day: "Sunday", hours: "CLOSED" },
        { day: "Monday", hours: "9:00 AM - 3:00 PM" },
        { day: "Tuesday", hours: "CLOSED (Except for scheduled surgeries)" },
        { day: "Wednesday", hours: "10:00 AM - 2:00 PM (Walk-in for vaccinations ONLY)" },
        { day: "Thursday", hours: "11:00 AM - 3:00 PM" },
        { day: "Friday", hours: "CLOSED (Except for scheduled spay & neuter clinics)" },
        { day: "Saturday", hours: "CLOSED (Except for scheduled spay & neuter clinics)" }
    ];
    
    const todayInfo = hoursSchedule[dayOfWeek];
    const todayDisplay = `<span class="today-label">Today (${todayInfo.day}):</span> <span class="today-hours-value">${todayInfo.hours}</span>`;
    
    todayHoursElement.innerHTML = todayDisplay;
}
