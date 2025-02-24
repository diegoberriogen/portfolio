
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !e.target.closest('.menu-icon')) {
            mobileMenu.classList.remove('active');
        }
    });
}


//subtitulo del inicio
var options = {
    strings: ["Web Frontend", "Web Backend", "de APIs"],  // Las palabras que se alternan
    typeSpeed: 50,  // Velocidad de escritura
    backSpeed: 30,  // Velocidad de borrado
    backDelay: 1000,  // Tiempo antes de borrar
    loop: true  // Hacer que el ciclo se repita infinitamente
};

var typed = new Typed("#typed-output", options);  // Aplica la animación al span
//


// borrar
window.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.info-list li');
    const animationDone = localStorage.getItem('aboutAnimationDone');

    if (!animationDone) {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 150);
        });
        localStorage.setItem('aboutAnimationDone', 'true');
    } else {
        listItems.forEach((item) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }
});

// borrar

// Obtener todos los enlaces
const links = document.querySelectorAll('.nav-list a');

// Añadir evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', function () {
        // Eliminar la clase 'active' de todos los enlaces
        links.forEach(link => link.classList.remove('active'));

        // Añadir la clase 'active' al enlace que fue clickeado
        this.classList.add('active');
    });
});

// Resaltar enlaces al hacer scroll
window.addEventListener('scroll', function () {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Obtener todas las secciones
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
});


// Hobbies con íconos y textos con animaciones secuenciales letra por letra
const hobbies = [
    { icon: "fas fa-code", title: "Playcode" },
    { icon: "fas fa-dumbbell", title: "Ejercicio" },
    { icon: "fas fa-globe", title: "Viajes" },
    { icon: "fas fa-users", title: "Tiempo en Familia" },
    { icon: "fas fa-book", title: "Lectura Crítica" },
    { icon: "fas fa-user-shield", title: "Ethical Hacking" }

];

const hobbiesContainer = document.getElementById("hobbiesContainer");

// Crear las tarjetas de hobbies
hobbies.forEach((hobby) => {
    const card = document.createElement("div");
    card.className = "hobby-card";

    // Crear el ícono
    const icon = document.createElement("i");
    icon.className = `hobby-icon ${hobby.icon}`;

    // Crear el texto con cada letra en un span
    const title = document.createElement("div");
    title.className = "hobby-title";

    [...hobby.title].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`; // Retardo escalonado
        title.appendChild(span);
    });

    card.appendChild(icon);
    card.appendChild(title);
    hobbiesContainer.appendChild(card);
});

// Animación secuencial (una palabra a la vez, letra por letra)
let currentIndex = 0;

function animateHobbies() {
    const cards = document.querySelectorAll(".hobby-card");

    // Quitar la clase activa de todas las tarjetas
    cards.forEach(card => card.classList.remove("active"));

    // Agregar la clase activa a la tarjeta actual
    cards[currentIndex].classList.add("active");

    // Pasar al siguiente índice, con bucle infinito
    currentIndex = (currentIndex + 1) % cards.length;

    // Repetir la animación cada 2.5 segundos
    setTimeout(animateHobbies, 2500);
}

// Iniciar la animación
animateHobbies();

// terminar
const terminalData = {
    html: `<h1>Hola Mundo</h1>\n<p>Este es un párrafo con algo de texto en HTML.</p>`,
    css: `body {\n    background-color: #333;\n    color: #fff;\n    font-family: Arial, sans-serif;\n}`,
    sass: `$primary-color: #3498db;\nbody {\n    background-color: $primary-color;\n    color: lighten($primary-color, 50%);\n}`,
    js: `function saludar() {\n    console.log('Hola Mundo desde JavaScript');\n}\nsaludar();`,
    python: `def saludar():\n    print('Hola Mundo desde Python')\n\nsaludar()`,
    sql: `SELECT nombre, email FROM usuarios\nWHERE activo = 1\nORDER BY nombre ASC;`
};

function typeWriter(text, element) {
    let index = 0;
    element.textContent = '';
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, Math.random() * 50 + 30); // Velocidad variable para más realismo
}

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
        const skill = item.getAttribute('data-skill');
        const terminalOutput = document.getElementById('terminalOutput');
        const text = terminalData[skill] || 'Comando no disponible...';
        typeWriter(text, terminalOutput);
    });
});

// terminar

// Projects
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const modalLink = document.getElementById('modal-link');
const closeModal = document.getElementById('close-modal');


// Asignar eventos de clic a cada tarjeta del proyecto
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Projects
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.getElementById('close-modal');

    // Asignar eventos de clic a cada tarjeta del proyecto
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.onclick = () => {
            modalTitle.textContent = card.dataset.title;
            modalDescription.textContent = card.dataset.description;
            modalLink.href = card.dataset.link;

            const details = JSON.parse(card.dataset.details);
            modalDetails.innerHTML = "";
            details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                modalDetails.appendChild(li);
            });

            // Mostrar el modal
            modal.style.display = 'block';

            // Posicionamiento dinámico del modal
            const rect = card.getBoundingClientRect();
            const isEven = index % 2 === 0; // Determinar si la tarjeta es par o impar
            const modalWidth = modal.offsetWidth;
            const windowWidth = window.innerWidth;

            let modalX = 0;

            if (isEven) {
                // Tarjetas pares: modal a la derecha si hay espacio
                if (rect.right + modalWidth + 10 < windowWidth) {
                    modalX = rect.right + 10;
                } else {
                    modalX = windowWidth - modalWidth - 10; // Ajustar al borde derecho si no hay espacio
                }
            } else {
                // Tarjetas impares: modal a la izquierda si hay espacio
                if (rect.left - modalWidth - 10 > 0) {
                    modalX = rect.left - modalWidth - 10;
                } else {
                    modalX = 10; // Alinear al borde izquierdo si no hay espacio
                }
            }

            const modalY = rect.top + window.scrollY;

            modal.style.left = `${modalX}px`;
            modal.style.top = `${modalY}px`;
        };
    });

    // Cerrar el modal
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

//projects