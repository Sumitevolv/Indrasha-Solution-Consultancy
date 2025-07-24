// Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Project Modal
        const projectCards = document.querySelectorAll('.project-card');
        const modal = document.getElementById('projectModal');
        const closeModal = document.querySelector('.close-modal');
        
        const projectsData = {
            "1": {
                title: "Smart Home Automation System",
                description: "A comprehensive IoT solution that allows users to control all their home appliances remotely through a mobile app. The system includes energy monitoring, scheduling, and voice control integration.",
                tech: ["ESP32 Microcontroller", "React Native Mobile App", "MQTT Protocol", "Firebase Backend", "Custom PCB Design"],
                price: "₹25,000 - ₹50,000",
                duration: "4-6 weeks",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            "2": {
                title: "E-commerce Platform",
                description: "A full-featured online store with product management, shopping cart, payment gateway integration, and admin dashboard. Built with modern web technologies for optimal performance.",
                tech: ["React.js Frontend", "Node.js Backend", "MongoDB Database", "Stripe Payment Integration", "AWS Hosting"],
                price: "₹35,000 - ₹75,000",
                duration: "6-8 weeks",
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            "3": {
                title: "Industrial Monitoring System",
                description: "A real-time monitoring solution for industrial equipment that collects sensor data, provides analytics, and enables predictive maintenance to reduce downtime and improve efficiency.",
                tech: ["STM32 Microcontroller", "Python Data Processing", "React Dashboard", "SQL Database", "Custom Sensors"],
                price: "₹50,000 - ₹1,20,000",
                duration: "8-12 weeks",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            }
        };
        
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const project = projectsData[projectId];
                
                document.getElementById('modal-title').textContent = project.title;
                document.getElementById('modal-description').textContent = project.description;
                document.getElementById('modal-image').src = project.image;
                document.getElementById('modal-price').textContent = project.price;
                document.getElementById('modal-duration').textContent = project.duration;
                
                const techList = document.getElementById('modal-tech');
                techList.innerHTML = '';
                project.tech.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techList.appendChild(li);
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Accordion
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const isActive = button.classList.contains('active');
                
                // Close all accordion items first
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.maxHeight = null;
                });
                
                document.querySelectorAll('.accordion-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Open current if it was closed
                if (!isActive) {
                    button.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
        
        // Open first accordion by default
        if (accordionButtons.length > 0) {
            accordionButtons[0].classList.add('active');
            accordionButtons[0].nextElementSibling.style.maxHeight = accordionButtons[0].nextElementSibling.scrollHeight + 'px';
        }
        
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme preference or use preferred color scheme
        const currentTheme = localStorage.getItem('theme') || 
                            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the current theme
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
        
        // Scroll animation
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.service-card, .project-card, .info-card, .stat');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state for animated elements
        document.querySelectorAll('.service-card, .project-card, .info-card, .stat').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Animate hero content
        document.querySelector('.hero-content').style.opacity = '0';
        document.querySelector('.hero-content').style.transform = 'translateY(20px)';
        document.querySelector('.hero-content').style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            document.querySelector('.hero-content').style.opacity = '1';
            document.querySelector('.hero-content').style.transform = 'translateY(0)';
        }, 300);
        
        // Run animation on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Run once on page load
        animateOnScroll();