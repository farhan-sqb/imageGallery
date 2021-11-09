document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
        window.open(item.src, '_blank').focus();
    });
});