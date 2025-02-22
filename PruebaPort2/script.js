
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

