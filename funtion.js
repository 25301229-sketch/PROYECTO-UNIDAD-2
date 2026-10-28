const formulario = document.querySelector('#formulario');

if (formulario) {
    const interes = document.querySelector('#interes');
    const autoBox = document.querySelector('#autoBox');
    const autoInput = document.querySelector('#auto');
    const fechaBox = document.querySelector('#fechaBox');
    const fecha = document.querySelector('#fecha');
    const mensaje = document.querySelector('#mensaje');
    const correoInput = document.querySelector('#correo');
    const porCorreo = document.querySelector('#porCorreo');
    const porWhatsapp = document.querySelector('#porWhatsapp');
    const contador = document.querySelector('#contador');
    const respuesta = document.querySelector('#respuesta');
    const consultaLista = document.querySelector('#consultaLista');
    const vistaMensaje = document.querySelector('#vistaMensaje');
    const enlaceWhatsapp = document.querySelector('#enlaceWhatsapp');

    interes.addEventListener('change', () => {
        if (interes.value === 'servicio') {
            autoBox.classList.remove('d-none');
            autoInput.required = true;
            fechaBox.classList.remove('d-none');
        } else {
            autoBox.classList.add('d-none');
            autoInput.required = false;
            autoInput.value = '';
            fechaBox.classList.add('d-none');
            fecha.value = '';
        }
    });

    mensaje.addEventListener('input', () => {
        contador.textContent = mensaje.value.length + ' / 300 caracteres';
    });

    porCorreo.addEventListener('change', () => {
        correoInput.required = true;
    });

    porWhatsapp.addEventListener('change', () => {
        correoInput.required = false;
    });

    formulario.addEventListener('input', () => {
        respuesta.classList.add('d-none');
        consultaLista.classList.add('d-none');
    });

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            respuesta.textContent = 'Revisa los campos obligatorios antes de continuar.';
            respuesta.classList.remove('d-none');
            return;
        }

        const nombre = document.querySelector('#nombre').value.trim();
        const correo = document.querySelector('#correo').value.trim();
        const zona = document.querySelector('#zona').value.trim();
        const auto = autoInput.value;
        const detalle = mensaje.value.trim();

        if (nombre === '' || zona === '' || detalle === '') {
            respuesta.textContent = 'Escribe tu nombre, tu zona y tu mensaje.';
            respuesta.classList.remove('d-none');
            return;
        }

        let texto = 'Hola, soy ' + nombre + '. Me interesa: ' + interes.options[interes.selectedIndex].text + '.';
        if (auto !== '') {
            texto += ' Mi auto es ' + auto + '.';
        }
        texto += ' Mi zona es ' + zona + '.';
        if (fecha.value !== '') {
            texto += ' Me gustaría consultar disponibilidad para el ' + fecha.value + '.';
        }
        if (correo !== '') {
            texto += ' Mi correo es ' + correo + '.';
        }
        texto += ' Prefiero que me respondan por ' + document.querySelector('input[name="respuestaPreferida"]:checked').value + '.';
        texto += ' ' + detalle;

        vistaMensaje.textContent = texto;
        enlaceWhatsapp.href = 'https://wa.me/527733531142?text=' + encodeURIComponent(texto);
        consultaLista.classList.remove('d-none');
        respuesta.classList.add('d-none');
    });
}

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
