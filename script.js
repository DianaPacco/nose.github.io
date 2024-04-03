document.getElementById('hablar').addEventListener("click", () => {
    decir(document.getElementById("texto").value);
});

function decir(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    
    // Escuchar la respuesta después de que el bot haya hablado
    escucharRespuesta();
}

function escucharRespuesta() {
    const recognition = new webkitSpeechRecognition() || recognitionSpeechRecognition();
    
    recognition.lang = 'es-ES'; // Establece el idioma de reconocimiento, ajusta según sea necesario
    recognition.start();
    
    recognition.onresult = function(event) {
        const respuestaUsuario = event.results[0][0].transcript;
        console.log('Usuario dijo:', respuestaUsuario);
        
        // Puedes agregar lógica para procesar la respuesta del usuario aquí
        
        // Por ejemplo, simplemente hacer que el bot responda nuevamente:
        decir('Has dicho: ' + respuestaUsuario + 'Somos grupo perusis una tienda especializada en venta de computadoras');
    }
}
