document.addEventListener('DOMContentLoaded', () => {
    // --- Diccionario de Traducciones ---
    const translations = {
        es: {
            menuTechServices: "Servicios Tecnológicos",
            serviceAI: "1. Desarrollo de IA",
            serviceMobile: "2. Aplicaciones Móviles",
            serviceInfra: "3. Infraestructura TI",
            serviceCloud: "4. Servicios de la nube",
            serviceSupport: "5. Soporte y Serv. Admin.",
            menuMarketingDesign: "Servicios de marketing y diseño",
            menuContact: "Contacto",
            menuAboutUs: "Quiénes somos",
            langButton: "EN",
            heroTitlePart1: "Unit00 Creando",
            heroTitlePart2: " universos",
            heroButton: "Contáctanos",
            presentationText: "En Unit00 nos encargamos de llevarte a lo mejor del mundo tecnológico de manera accesible y al ritmo correcto.",
            contentTitle: "Unit00 Servicios tecnológicos",
            card1Title: "Desarrollo de software basados en Inteligencia Artificial",
            card1PointA: "Desarrolla tu empresa o Startup con software a la medida aplicando herramientas de Inteligencia Artificial.",
            card1PointB: "Al ser cliente de Unit00 cuentas con el respaldo de personal altamente capacitado listo para asesorarte en el desarrollo e implantación de estas herramientas desarrolladas a la medida.",
            card2Title: "Aplicaciones Móviles",
            card2Text: "El mundo se mueve y las personas llevan sus vidas en dispositivos, mantener una presencia en estos dispositivos es crucial para las empresas, en Unit00, estamos preparados para desarrollar APPs versátiles y confiables para que tu empresa llegue al mercado adecuado.",
            card3Title: "Aprovisionamiento y administración de Infraestructura TI",
            card3Text: "Enfocado a clientes que requieren manejar su propia infraestructura, servidores, redes o servicios. Unit00 ofrece una aplica gama de implementación y administración de tecnologías tales como:",
            card3SubPointA: "Validación y diseño de arquitecturas de red",
            card3SubPointB: "Diseño e implementación de redes alámbricas e inalámbricas",
            card4Title: "Servicios de la nube",
            card4Text: "Despliega tus aplicaciones y servicios en plataformas cloud líderes. Optimizamos tus costos y aseguramos la escalabilidad y seguridad de tu infraestructura en la nube.",
            card5Title: "Soporte y servicios administrados",
            card5Text: "Pensado para empresas que no cuentan con un área especializada para mantener el control y funcionamiento de sus servicios de TI.",
            card5SubPointA: "Servicio de soporte técnico",
            card5SubPointB: "Administración de infraestructura",
            card5SubPointC: "Mantenimiento preventivo y correctivo",
            contactButtonCard: "Contáctanos",
            footerContactTitle: "Contacto Directo",
            footerPhone: "Teléfono:",
            footerEmail: "Correo:",
            footerFormTitle: "Envíanos un Mensaje",
            formName: "Nombre",
            formEmail: "Correo",
            formMessage: "Mensaje",
            formSend: "Enviar Mensaje",
            footerSlogan: "Creando universos tecnológicos.",
            footerRights: "Todos los derechos reservados Unit00 2025",
            marketingTitle: "Unit00 Branding y marketing digital",
            marketingDigitalTitle: "Marketing digital",
            marketingDigitalText: "Unit00 ofrece los servicios de profesionales del marketing digital, creando campañas para redes sociales.",
            marketingDigitalText2: "Solo tienes que preocuparte en tu objetivo, Unit00 se encarga de lo demás, generación de imágenes, textos, estrategias, post, nosotros administramos completamente tu campaña.",
            brandingTitle: "Branding",
            brandingText: "Unit00 te ayuda a crear o potencializar tu marca, no importa si es nueva o tiene años en el mercado, es sumamente importante mantener una marca que cause impacto en las personas, mediante nuestros expertos te apoyamos con servicios tales como, Generación de marca, diseño gráfico para la generación de:",
            brandingListItem1: "Logotipos",
            brandingListItem2: "Manual de identidad",
            brandingListItem3: "Presencia web",
            brandingListItem4: "Redes sociales",
        },
        en: {
            menuTechServices: "Technological Services",
            serviceAI: "1. AI-based Software Development",
            serviceMobile: "2. Mobile Applications",
            serviceInfra: "3. IT Infrastructure",
            serviceCloud: "4. Cloud Services",
            serviceSupport: "5. Support & Managed Services",
            menuMarketingDesign: "Marketing and Design Services",
            menuContact: "Contact",
            menuAboutUs: "About Us",
            langButton: "ES",
            heroTitlePart1: "Unit00 Creating",
            heroTitlePart2: " universes",
            heroButton: "Contact Us",
            presentationText: "At Unit00, we take you to the best of the technological world in an accessible way and at the right pace.",
            contentTitle: "Unit00 Technological Services",
            card1Title: "AI-based Software Development",
            card1PointA: "Develop your company or Startup with custom software applying Artificial Intelligence tools.",
            card1PointB: "As a Unit00 client, you have the support of highly trained personnel ready to advise you on the development and implementation of these custom-developed tools.",
            card2Title: "Mobile Applications",
            card2Text: "The world is on the move and people carry their lives on devices. Maintaining a presence on these devices is crucial for companies. At Unit00, we are prepared to develop versatile and reliable APPs so your company reaches the right market.",
            card3Title: "IT Infrastructure Provisioning and Management",
            card3Text: "Focused on clients who need to manage their own infrastructure, servers, networks, or services. Unit00 offers a wide range of implementation and administration of technologies such as:",
            card3SubPointA: "Network architecture validation and design",
            card3SubPointB: "Design and implementation of wired and wireless networks",
            card4Title: "Cloud Services",
            card4Text: "Deploy your applications and services on leading cloud platforms. We optimize your costs and ensure the scalability and security of your cloud infrastructure.",
            card5Title: "Support and Managed Services",
            card5Text: "Designed for companies that do not have a specialized area to maintain control and operation of their IT services.",
            card5SubPointA: "Technical support service",
            card5SubPointB: "Infrastructure administration",
            card5SubPointC: "Preventive and corrective maintenance",
            contactButtonCard: "Contact Us",
            footerContactTitle: "Direct Contact",
            footerPhone: "Phone:",
            footerEmail: "Email:",
            footerFormTitle: "Send Us a Message",
            formName: "Name",
            formEmail: "Email",
            formMessage: "Message",
            formSend: "Send Message",
            footerSlogan: "Creating technological universes.",
            footerRights: "All rights reserved Unit00 2025",
            marketingTitle: "Unit00 Branding and Digital Marketing",
            marketingDigitalTitle: "Digital Marketing",
            marketingDigitalText: "Unit00 offers the services of digital marketing professionals, creating social media campaigns.",
            marketingDigitalText2: "You only have to worry about your goal; Unit00 takes care of the rest: image generation, texts, strategies, posts, we completely manage your campaign.",
            brandingTitle: "Branding",
            brandingText: "Unit00 helps you create or enhance your brand, whether it's new or has been on the market for years. It's crucial to maintain a brand that impacts people. Through our experts, we support you with services such as brand generation, graphic design for:",
            brandingListItem1: "Logos",
            brandingListItem2: "Identity manual",
            brandingListItem3: "Web presence",
            brandingListItem4: "Social media",
        }
    };

    let currentLang = document.documentElement.lang || 'es';

    const langToggleButtons = document.querySelectorAll('#lang-toggle, #lang-toggle-mobile');
    const translatableElements = document.querySelectorAll('[data-translate]');

    function updateTexts() {
        translatableElements.forEach(el => {
            const key = el.dataset.translate;
            if (translations[currentLang] && translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
        langToggleButtons.forEach(button => {
            button.textContent = translations[currentLang]['langButton'] || (currentLang === 'es' ? 'EN' : 'ES');
        });
        document.documentElement.lang = currentLang;
    }

    langToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            updateTexts();
        });
    });

    // --- Intersection Observer for Animations ---
    const sectionsToAnimate = document.querySelectorAll('#hero, #presentation, #marketing-branding');
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // observer.unobserve(entry.target); // Uncomment to animate only once
            } else {
                entry.target.classList.remove('animate'); // Re-animate when scrolling back
            }
        });
    };
    const animationObserver = new IntersectionObserver(animateOnScroll, observerOptions);
    sectionsToAnimate.forEach(section => {
        animationObserver.observe(section);
    });

    // --- Scroll to Top Button ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const techServicesMobileDropdownToggle = document.querySelector('#mobile-menu a[href="#tech-services-mobile-dropdown"], #mobile-menu a[href="#tech-services-mobile-dropdown-unitdiseno"]');
    const techServicesMobileDropdownContent = document.getElementById('tech-services-mobile-dropdown-content') || document.getElementById('tech-services-mobile-dropdown-content-unitdiseno');


    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (techServicesMobileDropdownToggle && techServicesMobileDropdownContent) {
        techServicesMobileDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento de anclaje
            techServicesMobileDropdownContent.classList.toggle('hidden');
        });
    }


    // --- Dropdown de Servicios Tecnológicos (Escritorio) con Retraso ---
    // El retraso principal se maneja con CSS (transition-delay en group-hover)
    // Este JS es para asegurar que el `pointer-events` se active después del retraso si es necesario.
    // La solución CSS con `group-hover` y `transition-delay` es generalmente suficiente.
    const techDropdownButton = document.querySelector('#header .group > button'); // El botón que es padre del dropdown
    const techDropdown = document.getElementById('tech-dropdown');

    if (techDropdownButton && techDropdown) {
        let enterTimeout;
        let leaveTimeout;

        const techDropdownGroup = techDropdownButton.parentElement; // El div.relative.group

        techDropdownGroup.addEventListener('mouseenter', () => {
            clearTimeout(leaveTimeout);
            enterTimeout = setTimeout(() => {
                techDropdown.style.opacity = '1';
                techDropdown.style.pointerEvents = 'auto';
                techDropdown.style.transform = 'translateY(0)';
            }, 500); // 0.5 segundos de retraso
        });

        techDropdownGroup.addEventListener('mouseleave', () => {
            clearTimeout(enterTimeout);
            // No necesitamos un retraso para ocultar aquí porque el CSS ya lo hace,
            // pero sí para resetear los estilos que JS podría haber modificado.
            leaveTimeout = setTimeout(() => {
                techDropdown.style.opacity = '0';
                techDropdown.style.pointerEvents = 'none';
                techDropdown.style.transform = 'translateY(10px)';
            }, 150); // Un pequeño retraso para permitir mover el cursor al dropdown
        });
    }

    // Inicializar textos al cargar la página
    updateTexts();
});