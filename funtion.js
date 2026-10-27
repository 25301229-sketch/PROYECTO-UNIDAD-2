const tarjetas = document.querySelectorAll('.feature-box');
tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('mouseenter', () => {
        tarjeta.classList.add('resaltada');
    });
    tarjeta.addEventListener('mouseleave', () => {
        tarjeta.classList.remove('resaltada');
    });
});

const secciones = document.querySelectorAll('main > section');

if (secciones.length > 0) {
    document.body.classList.add('animaciones');

    function mostrarSecciones() {
        secciones.forEach((seccion) => {
            if (seccion.getBoundingClientRect().top < window.innerHeight - 70) {
                seccion.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', mostrarSecciones);
    window.addEventListener('resize', mostrarSecciones);
    window.addEventListener('load', mostrarSecciones);
    mostrarSecciones();
}
