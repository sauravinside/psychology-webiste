<script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
        
        // Modal
        const modal = document.getElementById('bookModal');
        const bookBtns = document.querySelectorAll('.book-btn');
        const closeBtn = document.querySelector('.close-btn');
        
        bookBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Session Type Selection
        const sessionTypes = document.querySelectorAll('.session-type');
        
        sessionTypes.forEach(type => {
            type.addEventListener('click', () => {
                // Remove active class from all types
                sessionTypes.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked type
                type.classList.add('active');
            });
        });
        
        // Form Submission
        const callbackForm = document.getElementById('callback-form');
        
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // You can add AJAX form submission here
            alert('Thank you for your message! Coach Vanshika will get back to you shortly.');
            callbackForm.reset();
        });
        
        // FAQ Accordion
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                // Close all other items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        
        // Animation on Scroll
        const animateElements = document.querySelectorAll('.animate');
        
        function checkScroll() {
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial state for animation
        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // Check scroll on page load
        window.addEventListener('load', checkScroll);
        
        // Check scroll on scroll
        window.addEventListener('scroll', checkScroll);
    </script>