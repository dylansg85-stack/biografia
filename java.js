function toggleMenu() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active'); 
}


document.getElementById('social-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert("Mis Redes Sociales:\n- Gmail: dylansg85@gmail.com\n- whatsApp: 72510142\n- GitHub: dylansg85-stack");
});


document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    const email = "dylansg85@gmail.com";
    alert("Mi dirección de correo es: " + email);
    
    navigator.clipboard.writeText(email).then(() => {
        console.log('Correo copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre && mensaje) {
        alert("¡Gracias " + nombre + "! Tu registro se ha enviado correctamente.");
        this.reset(); // Limpia el formulario
    } else {
        alert("Por favor, completa todos los campos.");
    }
});