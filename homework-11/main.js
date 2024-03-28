const textInput = document.querySelector('input');
let messageDiv = null;

textInput.addEventListener('focus', () => {
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'absolute';
        messageDiv.textContent = 'mess';
        document.body.appendChild(messageDiv);
    }
    messageDiv.style.display = 'inline-block';
});

textInput.addEventListener('blur', () => {
    if (messageDiv) {
        messageDiv.style.display = 'none';
    }
});