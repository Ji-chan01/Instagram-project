document.querySelectorAll('.userbox input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
});