document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar la fecha actual en el pie de página
    //const dateElement = document.getElementById('currentDate');
    //const today = new Date();
    //const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //dateElement.textContent = today.toLocaleDateString('es-ES', options);

    // 2. Efecto de "Revelación" de la tarjeta
    const card = document.getElementById('dedicationCard');
    const revealButton = document.getElementById('revealButton');

    // Oculta todo el contenido y solo muestra el botón
    const contentElements = card.querySelectorAll('.header, .content, .footer');
    contentElements.forEach(el => el.style.display = 'none');
    
    // El botón al centro
    revealButton.style.display = 'block';

    // Hace visible la tarjeta contenedora para el efecto de fade-in
    card.classList.add('visible');

    // Función para revelar el contenido
    revealButton.addEventListener('click', () => {
        // Oculta el botón
        revealButton.style.display = 'none';

        // Muestra el contenido con un pequeño retraso
        setTimeout(() => {
            contentElements.forEach(el => el.style.display = 'block');
        }, 300); 

        // Opcional: añadir un mensaje especial después de revelar
        console.log("¡Contenido revelado! Feliz cumpleaños, Flora Juana.");
    });
});