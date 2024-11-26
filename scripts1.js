function applyWhatsApp(phoneNumber) {
    const selectedProgram = document.getElementById('programs').value;
    const message = `Hello, I would like to apply for the ${selectedProgram} program.`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
