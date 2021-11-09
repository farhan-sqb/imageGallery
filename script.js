document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
        console.log(item);
        window.open(item.src, '_blank').focus();
    });
});