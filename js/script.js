document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el año en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Lógica del idioma
    let currentLang = localStorage.getItem('lang') || 'es'; // 'es' por defecto
    const langToggleBtn = document.getElementById('lang-toggle');

    function updateContent(lang) {
        document.querySelectorAll('[data-lang-es], [data-lang-en]').forEach(element => {
            if (lang === 'es' && element.dataset.langEs) {
                element.textContent = element.dataset.langEs;
            } else if (lang === 'en' && element.dataset.langEn) {
                element.textContent = element.dataset.langEn;
            }
        });

        // Actualizar el texto del botón de idioma
        if (lang === 'es') {
            langToggleBtn.textContent = langToggleBtn.dataset.langEs; // Mostrar "English"
        } else {
            langToggleBtn.textContent = langToggleBtn.dataset.langEn; // Mostrar "Español"
        }

        document.documentElement.lang = lang; // Establecer el atributo lang del HTML
    }

    window.toggleLanguage = () => {
        currentLang = (currentLang === 'es') ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        updateContent(currentLang);
    };

    // Inicializar el idioma al cargar la página
    updateContent(currentLang);

    // Lógica del menú móvil
    const mobileMenuBtn = document.querySelector('header button.md\\:hidden');
    const mainMenu = document.getElementById('main-menu');

    window.toggleMobileMenu = () => {
        mainMenu.classList.toggle('hidden');
        mainMenu.classList.toggle('flex');
        mainMenu.classList.toggle('flex-col');
        // Esto ajusta la posición para que el menú aparezca debajo del header
        if (!mainMenu.classList.contains('hidden')) {
            const headerHeight = document.querySelector('header').offsetHeight;
            mainMenu.style.top = `${headerHeight}px`;
        } else {
            mainMenu.style.top = '100%'; // Restaura la posición o a la posición inicial
        }
    };

    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!mainMenu.classList.contains('hidden') && !mainMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mainMenu.classList.add('hidden');
            mainMenu.classList.remove('flex', 'flex-col');
        }
    });


    // Lógica del dropdown de servicios (solo en index.html)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        window.toggleDropdown = (event, dropdownId) => {
            event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
            const dropdown = document.getElementById(dropdownId);
            if (dropdown) {
                dropdown.classList.toggle('hidden');
                // Cerrar otros dropdowns si estuvieran abiertos
                document.querySelectorAll('.absolute.shadow-lg').forEach(openDropdown => {
                    if (openDropdown.id !== dropdownId) {
                        openDropdown.classList.add('hidden');
                    }
                });
            }
        };

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', (event) => {
            document.querySelectorAll('.absolute.shadow-lg').forEach(dropdown => {
                if (!dropdown.contains(event.target) && !event.target.closest('.group')) {
                    dropdown.classList.add('hidden');
                }
            });
        });
    }

    // Lógica de scroll a sección
    window.scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Cierra el menú móvil si está abierto
            if (!mainMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Botón de scroll a la parte superior
    window.scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});