/* =====================================================
   SÉPTICOS SANTA BÁRBARA - Scripts Interactivos
   =====================================================
   Didier Cuervo | 313 381 5853
   ===================================================== */

// ─── NAVEGACIÓN Y MENÚ ────────────────────────────────

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const mainContainer = document.getElementById('main-container');
const dots          = document.querySelectorAll('.dot');
const sections      = document.querySelectorAll('.snap-section');

// Abrir / cerrar menú móvil
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Desplazamiento suave a la sección indicada
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateDots(id);
    }
}

// Actualizar punto activo en la navegación lateral
function updateDots(activeId) {
    dots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-target') === activeId);
    });
}

// Detectar sección visible al hacer scroll
if (mainContainer) {
    mainContainer.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = mainContainer.scrollTop + (window.innerHeight / 2);

        sections.forEach(section => {
            const top    = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) updateDots(currentSectionId);
    });
}


// ─── FILTRO DE GALERÍA ────────────────────────────────

function filterGallery(category) {
    const items      = document.querySelectorAll('.gallery-item');
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');

    // Actualizar botones
    filterBtns.forEach(btn => {
        const isActive = btn.textContent.toLowerCase().includes(category) ||
                         (category === 'todo' && btn.textContent === 'Todo');
        btn.classList.toggle('bg-brand',     isActive);
        btn.classList.toggle('text-white',   isActive);
        btn.classList.toggle('shadow-md',    isActive);
        btn.classList.toggle('bg-sky-100',   !isActive);
        btn.classList.toggle('text-slate-700', !isActive);
    });

    // Mostrar / ocultar ítems
    items.forEach(item => {
        const visible = category === 'todo' || item.classList.contains(category);
        item.classList.toggle('hidden', !visible);
    });
}


// ─── COMPARADOR ANTES Y DESPUÉS ───────────────────────

const slider    = document.querySelector('.comparison-slider');
const beforeImg = document.getElementById('before-image');
const handle    = document.getElementById('slider-handle');

if (slider && beforeImg && handle) {
    let isDragging = false;

    const moveSlider = (x) => {
        const rect = slider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.min(100, Math.max(0, pos));

        beforeImg.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
        handle.style.left = `${pos}%`;
    };

    // Eventos de ratón
    slider.addEventListener('mousedown',  () => isDragging = true);
    window.addEventListener('mouseup',    () => isDragging = false);
    slider.addEventListener('mousemove',  (e) => { if (isDragging) moveSlider(e.clientX); });

    // Eventos táctiles (móvil)
    slider.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend',   () => isDragging = false);
    slider.addEventListener('touchmove',  (e) => { if (isDragging) moveSlider(e.touches[0].clientX); });
}


// ─── COTIZADOR INTELIGENTE ────────────────────────────

let selectedType = 'septico'; // 'septico' | 'tanque'

function selectQuoteType(type) {
    selectedType = type;

    const btnSeptico  = document.getElementById('btn-type-septico');
    const btnTanque   = document.getElementById('btn-type-tanque');
    const septicoOpts = document.getElementById('septico-options');
    const tanqueOpts  = document.getElementById('tanque-options');

    const activeClass   = "py-2.5 px-4 rounded-xl font-semibold border-2 border-brand bg-brand text-white transition text-xs sm:text-sm flex items-center justify-center gap-2 shadow";
    const inactiveClass = "py-2.5 px-4 rounded-xl font-semibold border-2 border-slate-200 bg-white hover:border-sky-300 text-slate-700 transition text-xs sm:text-sm flex items-center justify-center gap-2";

    if (type === 'septico') {
        btnSeptico.className = activeClass;
        btnTanque.className  = inactiveClass;
        septicoOpts.classList.remove('hidden');
        tanqueOpts.classList.add('hidden');
    } else {
        btnTanque.className  = activeClass;
        btnSeptico.className = inactiveClass;
        tanqueOpts.classList.remove('hidden');
        septicoOpts.classList.add('hidden');
    }

    calculateQuote();
}

function updatePeopleCount(val) {
    document.getElementById('people-badge').textContent = val;
    calculateQuote();
}

function calculateQuote() {
    const resultLabel    = document.getElementById('result-label');
    const resultCapacity = document.getElementById('result-capacity');
    const specCapacity   = document.getElementById('spec-capacity');
    const specMaterial   = document.getElementById('spec-material');

    if (selectedType === 'septico') {
        const people  = parseInt(document.getElementById('person-range').value);
        const jobType = document.getElementById('septic-job').value;

        resultLabel.textContent = "Capacidad Séptica Recomendada";

        let capacity, description;
        if      (people <= 5)  { capacity = 1000;  description = "Pozo Séptico de 1,000L - Monobloque"; }
        else if (people <= 10) { capacity = 2000;  description = "Pozo Séptico de 2,000L con FAFA"; }
        else if (people <= 25) { capacity = 5000;  description = "Sistema Séptico Integrado 5,000L"; }
        else                   { capacity = 10000; description = "Sistemas Multicamara 10,000L"; }

        resultCapacity.textContent = `Para ${people} Personas`;
        specCapacity.textContent   = `${capacity.toLocaleString()} Litros`;

        if      (jobType === 'mantenimiento') specMaterial.textContent = "Servicio de Limpieza y Succión";
        else if (jobType === 'ambos')         specMaterial.textContent = `${description} + Enzimas`;
        else                                  specMaterial.textContent = description;

    } else {
        const capacityVal  = document.getElementById('tank-capacity').value;
        const installType  = document.querySelector('input[name="tank-install"]:checked').value;

        resultLabel.textContent    = "Tanque de Almacenamiento Elegido";
        resultCapacity.textContent = `Tanque de ${parseInt(capacityVal).toLocaleString()} Litros`;
        specCapacity.textContent   = `${parseInt(capacityVal).toLocaleString()} Litros`;
        specMaterial.textContent   = installType === 'si'
            ? "Incluye Instalación Hidráulica Básica"
            : "Solo Distribución y Suministro";
    }
}

function sendWhatsAppQuote() {
    const phone = "573133815853"; // Colombia · Didier Cuervo
    let message = "";

    if (selectedType === 'septico') {
        const people   = document.getElementById('person-range').value;
        const jobEl    = document.getElementById('septic-job');
        const job      = jobEl.options[jobEl.selectedIndex].text;
        const capacity = document.getElementById('spec-capacity').textContent;
        const system   = document.getElementById('spec-material').textContent;

        message = `Hola Didier Cuervo (Sépticos Santa Bárbara). Me gustaría recibir una cotización detallada de un pozo séptico.\n\n*Detalles del requerimiento:*\n- Número de personas: ${people}\n- Trabajo requerido: ${job}\n- Capacidad estimada recomendada: ${capacity}\n- Tipo de sistema propuesto: ${system}`;
    } else {
        const capacity   = document.getElementById('tank-capacity').value;
        const installVal = document.querySelector('input[name="tank-install"]:checked').value;
        const install    = installVal === 'si' ? "Suministro e Instalación básica" : "Únicamente compra de tanque";

        message = `Hola Didier Cuervo (Sépticos Santa Bárbara). Me interesa cotizar un tanque de agua potable.\n\n*Detalles del tanque:*\n- Capacidad requerida: ${capacity} Litros\n- Modalidad elegida: ${install}`;
    }

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Ejecutar cálculo inicial al cargar
window.addEventListener('load', () => {
    if (document.getElementById('result-label')) {
        calculateQuote();
    }
});
