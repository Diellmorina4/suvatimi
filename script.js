// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Language dropdown toggle
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const btn = document.querySelector('.lang-dropdown-btn');
    dropdown.classList.toggle('active');
    btn.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('language-dropdown');
    const btn = document.querySelector('.lang-dropdown-btn');
    if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.remove('active');
        btn.classList.remove('active');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Wait for EmailJS to be available
    function initEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init('He199eMJjcMN_xQVm');
        } else {
            setTimeout(initEmailJS, 100);
        }
    }
    initEmailJS();
    
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
    updateLanguageButtons(savedLanguage);
});

// Change language function
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguageButtons(lang);
    
    // Get translations object
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded');
        return;
    }
    
    const t = translations[lang];
    
    // Update Hero Section
    document.querySelectorAll('[data-hero-subtitle]').forEach(el => {
        el.textContent = t.heroSubtitle;
    });
    document.querySelectorAll('[data-hero-tagline]').forEach(el => {
        el.textContent = t.heroTagline;
    });
    document.querySelectorAll('[data-get-in-touch]').forEach(el => {
        el.textContent = t.getInTouch;
    });
    
    // Update Services Section
    document.querySelectorAll('[data-our-services]').forEach(el => {
        el.textContent = t.ourServices;
    });
    document.querySelectorAll('[data-suvatim-title]').forEach(el => {
        el.textContent = t.suvatimTitle;
    });
    document.querySelectorAll('[data-suvatim-desc]').forEach(el => {
        el.textContent = t.suvatimDesc;
    });
    document.querySelectorAll('[data-fasad-title]').forEach(el => {
        el.textContent = t.fasadTitle;
    });
    document.querySelectorAll('[data-fasad-desc]').forEach(el => {
        el.textContent = t.fasadDesc;
    });
    document.querySelectorAll('[data-knauf-title]').forEach(el => {
        el.textContent = t.knaufTitle;
    });
    document.querySelectorAll('[data-knauf-desc]').forEach(el => {
        el.textContent = t.knaufDesc;
    });
    document.querySelectorAll('[data-ngjyra-title]').forEach(el => {
        el.textContent = t.ngjyraTitle;
    });
    document.querySelectorAll('[data-ngjyra-desc]').forEach(el => {
        el.textContent = t.ngjyraDesc;
    });
    document.querySelectorAll('[data-izolim-title]').forEach(el => {
        el.textContent = t.izolimTitle;
    });
    document.querySelectorAll('[data-izolim-desc]').forEach(el => {
        el.textContent = t.izolimDesc;
    });
    
    // Update About Section
    document.querySelectorAll('[data-about-title]').forEach(el => {
        el.textContent = t.aboutUsTitle;
    });
    document.querySelectorAll('[data-about-text1]').forEach(el => {
        el.textContent = t.aboutUsText1;
    });
    document.querySelectorAll('[data-about-text2]').forEach(el => {
        el.textContent = t.aboutUsText2;
    });
    document.querySelectorAll('[data-team]').forEach(el => {
        el.textContent = t.professionalTeam;
    });
    document.querySelectorAll('[data-quality]').forEach(el => {
        el.textContent = t.qualityMaterials;
    });
    document.querySelectorAll('[data-reliable]').forEach(el => {
        el.textContent = t.reliableService;
    });
    document.querySelectorAll('[data-pricing]').forEach(el => {
        el.textContent = t.competitivePricing;
    });
    document.querySelectorAll('[data-satisfaction]').forEach(el => {
        el.textContent = t.customerSatisfaction;
    });
    document.querySelectorAll('[data-gallery]').forEach(el => {
        el.textContent = t.projectGallery;
    });
    
    // Update Appointments Section
    document.querySelectorAll('[data-book-apt-title]').forEach(el => {
        el.textContent = t.bookAppointmentTitle;
    });
    document.querySelectorAll('[data-book-apt-subtitle]').forEach(el => {
        el.textContent = t.bookAppointmentSubtitle;
    });
    document.querySelectorAll('[data-how-works]').forEach(el => {
        el.textContent = t.howItWorks;
    });
    document.querySelectorAll('[data-step1]').forEach(el => {
        el.textContent = t.step1;
    });
    document.querySelectorAll('[data-step2]').forEach(el => {
        el.textContent = t.step2;
    });
    document.querySelectorAll('[data-step3]').forEach(el => {
        el.textContent = t.step3;
    });
    document.querySelectorAll('[data-step4]').forEach(el => {
        el.textContent = t.step4;
    });
    document.querySelectorAll('[data-available-hours]').forEach(el => {
        el.textContent = t.availableHours;
    });
    document.querySelectorAll('[data-mon-sat]').forEach(el => {
        el.textContent = t.mondayToSaturday;
    });
    document.querySelectorAll('[data-eight-six]').forEach(el => {
        el.textContent = t.eightToSix;
    });
    document.querySelectorAll('[data-sunday]').forEach(el => {
        el.textContent = t.sundayNote;
    });
    document.querySelectorAll('[data-free-consult]').forEach(el => {
        el.textContent = t.freeConsultation;
    });
    document.querySelectorAll('[data-no-obligation]').forEach(el => {
        el.textContent = t.noObligation;
    });
    
    // Update Form Labels
    document.querySelectorAll('[data-label-name]').forEach(el => {
        el.textContent = t.fullName + ' *';
    });
    document.querySelectorAll('[data-label-email]').forEach(el => {
        el.textContent = t.email + ' *';
    });
    document.querySelectorAll('[data-label-phone]').forEach(el => {
        el.textContent = t.phone + ' *';
    });
    document.querySelectorAll('[data-label-property]').forEach(el => {
        el.textContent = t.propertyType + ' *';
    });
    document.querySelectorAll('[data-label-date]').forEach(el => {
        el.textContent = t.preferredDate + ' *';
    });
    document.querySelectorAll('[data-label-time]').forEach(el => {
        el.textContent = t.preferredTime + ' *';
    });
    document.querySelectorAll('[data-label-service]').forEach(el => {
        el.textContent = t.serviceType + ' *';
    });
    document.querySelectorAll('[data-label-details]').forEach(el => {
        el.textContent = t.projectDetails;
    });
    
    // Update Select Options
    document.querySelectorAll('[data-select-property]').forEach(el => {
        el.textContent = t.selectPropertyType;
    });
    document.querySelectorAll('[data-residential]').forEach(el => {
        el.textContent = t.residential;
    });
    document.querySelectorAll('[data-commercial]').forEach(el => {
        el.textContent = t.commercial;
    });
    document.querySelectorAll('[data-industrial]').forEach(el => {
        el.textContent = t.industrial;
    });
    document.querySelectorAll('[data-other]').forEach(el => {
        el.textContent = t.other;
    });
    
    document.querySelectorAll('[data-select-time]').forEach(el => {
        el.textContent = t.selectTime;
    });
    
    document.querySelectorAll('[data-select-service]').forEach(el => {
        el.textContent = t.selectService;
    });
    document.querySelectorAll('[data-opt-suvatim]').forEach(el => {
        el.textContent = t.suvatim;
    });
    document.querySelectorAll('[data-opt-fasad]').forEach(el => {
        el.textContent = t.fasad;
    });
    document.querySelectorAll('[data-opt-knauf]').forEach(el => {
        el.textContent = t.knauf;
    });
    document.querySelectorAll('[data-opt-ngjyra]').forEach(el => {
        el.textContent = t.ngjyra;
    });
    document.querySelectorAll('[data-opt-izolim]').forEach(el => {
        el.textContent = t.izolim;
    });
    document.querySelectorAll('[data-opt-consult]').forEach(el => {
        el.textContent = t.generalConsultation;
    });
    
    // Update Form Buttons and Messages
    document.querySelectorAll('[data-schedule-apt]').forEach(el => {
        el.textContent = t.scheduleAppointment;
    });
    document.querySelectorAll('[data-confirm-24]').forEach(el => {
        el.textContent = t.confirmWithin24;
    });
    
    // Update Contact Section
    document.querySelectorAll('[data-contact-title]').forEach(el => {
        el.textContent = t.contactUsTitle;
    });
    document.querySelectorAll('[data-phone-label]').forEach(el => {
        el.textContent = t.phoneLabel;
    });
    document.querySelectorAll('[data-address-label]').forEach(el => {
        el.textContent = t.addressLabel;
    });
    document.querySelectorAll('[data-hours-label]').forEach(el => {
        el.textContent = t.hoursLabel;
    });
    document.querySelectorAll('[data-hours-time]').forEach(el => {
        el.textContent = t.mondayToSaturdayHours;
    });
    document.querySelectorAll('[data-sunday-label]').forEach(el => {
        el.textContent = t.sundayLabel;
    });
    document.querySelectorAll('[data-send-message]').forEach(el => {
        el.textContent = t.sendMessage;
    });
    
    // Update Footer
    document.querySelectorAll('[data-copyright]').forEach(el => {
        el.textContent = t.copyrightText;
    });
    document.querySelectorAll('[data-footer-services]').forEach(el => {
        el.textContent = t.professionalServices;
    });
    
    // Update page title
    if (lang === 'sq') {
        document.title = "SUVATIMI-H | Shërbime Profesionale të Fasadës";
    } else {
        document.title = "SUVATIMI-H | Professional Facade Services";
    }
}

// Update language button states
function updateLanguageButtons(lang) {
    const currentLangSpan = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (currentLangSpan) {
        currentLangSpan.textContent = lang === 'en' ? 'English' : 'Shqip';
    }
    
    langOptions.forEach(btn => {
        btn.classList.remove('active');
        if ((lang === 'en' && btn.textContent.includes('English')) || 
            (lang === 'sq' && btn.textContent.includes('Shqip'))) {
            btn.classList.add('active');
        }
    });
}

// Handle contact form submission
function handleForm(event) {
    event.preventDefault();
    
    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const phone = event.target.elements[2].value;
    const message = event.target.elements[3].value;
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
        alert('Email service is not available. Please contact us directly.');
        return;
    }
    
    // Send email using EmailJS
    emailjs.send('service_ws6458k', 'template_jsdu5zt', {
        name: name,
        email: email,
        phone: phone,
        message: message,
        title: "New Contact Form Submission"
    }).then(function(response) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        event.target.reset();
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    });
}

// Handle appointment form submission
function handleAppointment(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const phone = form.elements[2].value;
    const propertyType = form.elements[3].value;
    const date = form.elements[4].value;
    const time = form.elements[5].value;
    const serviceType = form.elements[6].value;
    const details = form.elements[7].value;
    
    // Format date for display
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
        alert('Email service is not available. Please contact us directly.');
        return;
    }
    
    // Send email using EmailJS
    emailjs.send('service_ws6458k', 'template_jsdu5zt', {
        name: name,
        email: email,
        phone: phone,
        message: `Appointment Request\n\nProperty Type: ${propertyType}\nDate: ${formattedDate}\nTime: ${time}\nService: ${serviceType}\nDetails: ${details}`,
        title: "New Appointment Request"
    }).then(function(response) {
        const message = `Thank you, ${name}!\n\nYour appointment has been scheduled:\n\nDate: ${formattedDate}\nTime: ${time}\nProperty Type: ${propertyType}\nService: ${serviceType}\n\nWe will confirm shortly via email and phone.`;
        alert(message);
        form.reset();
    }, function(error) {
        alert('Failed to schedule appointment. Please try again.');
        console.error('EmailJS error:', error);
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navbar.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
