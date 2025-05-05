document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !mensaje) return;

    // Oculta el formulario y muestra la pantalla de agradecimiento
    document.getElementById('formulario-container').classList.add('d-none');
    document.getElementById('agradecimiento').classList.remove('d-none');
});