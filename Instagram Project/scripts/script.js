document.querySelectorAll('.userbox input').forEach(input => {
    input.addEventListener('input', () => {
        input.value.trim() ? input.classList.add('filled'): input.classList.remove('filled');
    });
});
