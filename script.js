document.getElementById('cyberbullyingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = {
        q1: document.getElementById('q1').value, // ¿Quiénes?
        q2: document.getElementById('q2').value, // ¿Cómo?
        q3: document.getElementById('q3').value, // ¿Red social?
        q4: document.getElementById('q4').value, // ¿Concienciación?
        q5: document.getElementById('q5').value  // ¿Mejoras?
    };

    // Send data to Google Sheets
    fetch('URL_DE_TU_APLICACION_WEB', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(message => {
        alert('¡Gracias por compartir tu experiencia! Tu respuesta ha sido recibida.');
        document.getElementById('cyberbullyingForm').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar tu respuesta. Por favor, inténtalo de nuevo.');
    });
});