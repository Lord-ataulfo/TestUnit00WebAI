// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.getElementById('langButton');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const techServicesDropdownButton = document.getElementById('techServicesDropdownButton');
    // const techServicesDropdown = document.getElementById('techServicesDropdown'); // Group-hover lo maneja
    const techServicesDropdownButtonMobile = document.getElementById('techServicesDropdownButtonMobile');
    const techServicesDropdownMobile = document.getElementById('techServicesDropdownMobile');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // --- Traducciones ---
    const translations = {
        es: {
            // Header
            menuTechServices: "Servicios Tecnológicos",
            menuMarketingDesign: "Servicios de marketing y diseño",
            menuContact: "Contacto",
            langButtonText: "EN",
            // Hero
            heroTitle: "Unit00 Creando universos",
            // Tech Services Section (index.html)
            techServicesTitle: "Unit00 Servicios tecnológicos",
            serviceIaTitle: "Desarrollo de software basados en Inteligencia Artificial",
            serviceIaDesc1: "Desarrolla tu empresa o Startup con software a la medida aplicando herramientas de Inteligencia Artificial.",
            serviceIaDesc2: "Al ser cliente de Unit00 cuentas con el respaldo de personal altamente capacitado listo para asesorarte en el desarrollo e implantación de estas herramientas desarrolladas a la medida.",
            serviceMobileTitle: "Aplicaciones Móviles",
            serviceMobileDesc: "El mundo se mueve y las personas llevan sus vidas en dispositivos, mantener una presencia en estos dispositivos es crucial para las empresas, en Unit00, estamos preparados para desarrollar APPs versátiles y confiables para que tu empresa llegue al mercado adecuado.",
            serviceInfraTitle: "Aprovisionamiento y administración de Infraestructura TI",
            serviceInfraDesc: "Enfocado a clientes que requieren manejar su propia infraestructura, servidores, redes o servicios. Unit00 ofrece una amplia gama de implementación y administración de tecnologías tales como:",
            serviceCloudTitle: "Servicios de la nube",
            serviceCloudItem1: "Validación y diseño de arquitecturas de red",
            serviceCloudItem2: "Diseño e implementación de redes alámbricas e inalámbricas",
            serviceSupportTitle: "Soporte y servicios administrados",
            serviceSupportDesc: "Pensado para empresas que no cuentan con un área especializada para mantener el control y funcionamiento de sus servicios de TI.",
            serviceSupportItem1: "Servicio de soporte técnico",
            serviceSupportItem2: "Administración de infraestructura",
            serviceSupportItem3: "Mantenimiento preventivo y correctivo",
            cardContactButton: "Contáctanos",
            // Footer
            footerContactTitle: "Contacto UNIT00",
            footerPhone: "Teléfono:",
            footerEmail: "Correo Electrónico:",
            footerSendEmailOption: "Envía un correo electrónico",
            footerSendMessageTitle: "Envíanos un mensaje", // Este no fue explícitamente pedido, pero es común
            footerYourEmail: "Tu correo electrónico", // Para el placeholder del form
            footerMessage: "Mensaje", // Para el placeholder del form
            footerSendButton: "Enviar Mensaje", // Para el botón del form
            footerAllRights: "Unit00. Todos los derechos reservados.",
            // Marketing Page (unitdiseno.html)
            marketingDesignTitleFull: "Unit00 Branding y marketing digital",
            marketingDigitalSubTitle: "Marketing digital",
            marketingText1: "Unit00 ofrece los servicios de profesionales del marketing digital, creando campañas para redes sociales. Solo tienes que preocuparte en tu objetivo, Unit00 se encarga de lo demás, generación de imágenes, textos, estrategias, post, nosotros administramos completamente tu campaña.",
            brandingTitle: "Branding",
            brandingText1: "Unit00 te ayuda a crear o potencializar tu marca, no importa si es nueva o tiene años en el mercado, es sumamente importante mantener una marca que cause impacto en las personas, mediante nuestros expertos te apoyamos con servicios tales como, generación de marca, diseño gráfico para la generación de Logotipos, manual de identidad, presencia web, redes sociales, entre otros.",
        },
        en: {
            // Header
            menuTechServices: "Technological Services",
            menuMarketingDesign: "Marketing and Design Services",
            menuContact: "Contact",
            langButtonText: "ES",
            // Hero
            heroTitle: "Unit00 Creating universes",
            // Tech Services Section (index.html)
            techServicesTitle: "Unit00 Technological Services",
            serviceIaTitle: "AI-based Software Development",
            serviceIaDesc1: "Develop your company or Startup with custom software applying Artificial Intelligence tools.",
            serviceIaDesc2: "As a Unit00 client, you have the support of highly trained personnel ready to advise you on the development and implementation of these custom-developed tools.",
            serviceMobileTitle: "Mobile Applications",
            serviceMobileDesc: "The world moves and people carry their lives on devices, maintaining a presence on these devices is crucial for companies. At Unit00, we are prepared to develop versatile and reliable APPs so that your company reaches the right market.",
            serviceInfraTitle: "IT Infrastructure Provisioning and Administration",
            serviceInfraDesc: "Focused on clients who need to manage their own infrastructure, servers, networks, or services. Unit00 offers a wide range of implementation and administration of technologies such as:",
            serviceCloudTitle: "Cloud Services",
            serviceCloudItem1: "Validation and design of network architectures",
            serviceCloudItem2: "Design and implementation of wired and wireless networks",
            serviceSupportTitle: "Support and Managed Services",
            serviceSupportDesc: "Designed for companies that do not have a specialized area to maintain control and operation of their IT services.",
            serviceSupportItem1: "Technical support service",
            serviceSupportItem2: "Infrastructure administration",
            serviceSupportItem3: "Preventive and corrective maintenance",
            cardContactButton: "Contact Us",
            // Footer
            footerContactTitle: "UNIT00 Contact",
            footerPhone: "Phone:",
            footerEmail: "Email:",
            footerSendEmailOption: "Send an email",
            footerSendMessageTitle: "Send us a message",
            footerYourEmail: "Your email",
            footerMessage: "Message",
            footerSendButton: "Send Message",
            footerAllRights: "Unit00. All rights reserved.",
            // Marketing Page (unitdiseno.html)
            marketingDesignTitleFull: "Unit00 Branding and Digital Marketing",
            marketingDigitalSubTitle: "Digital Marketing",
            marketingText1: "Unit00 offers the services of digital marketing professionals, creating campaigns for social networks. You just have to worry about your goal, Unit00 takes care of the rest, image generation, texts, strategies, posts, we completely manage your campaign.",
            brandingTitle: "Branding",
            brandingText1: "Unit00 helps you create or enhance your brand, no matter if it is new or has been on the market for years, it is extremely important to maintain a brand that makes an impact on people. Through our experts, we support you with services such as brand generation, graphic design for Logotypes, identity manual, web presence, social networks, among others.",
        }
    };

    let currentLang = localStorage.getItem('unit00Lang') || 'es'; // Usar un nombre específico para localStorage

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('unit00Lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            } else if (element.placeholder && translations[lang] && translations[lang][key + 'Placeholder']) { // Para placeholders
                element.placeholder = translations[lang][key + 'Placeholder'];
            }
        });

        if (langButton) {
            langButton.textContent = translations[lang].langButtonText;
        }
        const langButtonMobile = document.getElementById('langButtonMobile'); // Asegurarse que el del móvil también se actualice
        if (langButtonMobile) {
            langButtonMobile.textContent = translations[lang].langButtonText;
        }
    }

    if (langButton) {
        langButton.addEventListener('click', () => {
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    setLanguage(currentLang);

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (techServicesDropdownButtonMobile && techServicesDropdownMobile) {
        techServicesDropdownButtonMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            techServicesDropdownMobile.classList.toggle('hidden');
        });
    }

    if (scrollToTopBtn) {
        function handleScroll() {
            if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        }
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.addEventListener('scroll', handleScroll);
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    const header = document.querySelector('header');
    const headerOffset = header ? header.offsetHeight : 70;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "#!") { // Ignorar enlaces vacíos o de JS preventivo
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (techServicesDropdownMobile && !techServicesDropdownMobile.classList.contains('hidden')) {
                        techServicesDropdownMobile.classList.add('hidden');
                    }
                }

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Sincronizar botón de idioma móvil si existe y no es el principal
    const langButtonMobile = document.getElementById('langButtonMobile');
    if (langButton && langButtonMobile && langButton !== langButtonMobile) {
        langButtonMobile.addEventListener('click', () => {
            langButton.click(); // Dispara el evento del botón principal
        });
    }
});