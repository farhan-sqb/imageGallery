document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
        window.open(item.src, '_blank').focus();
    });
});

document.body.addEventListener('keydown', function(e){
    let currentImage = document.getElementById('currentImage').value;
    if(currentImage == 12)
        currentImage = 0;
    
    if(currentImage == -1)
        currentImage = 0;

    if(e.key == "ArrowRight"){
        document.getElementsByTagName('img')[currentImage].style.border = '3px solid red';
        currentImage++;
        
        document.getElementById('currentImage').value = currentImage;
    }

    if(e.key == "ArrowLeft"){
        currentImage--;
        document.getElementsByTagName('img')[currentImage].style.border = '0px';
        
        document.getElementById('currentImage').value = currentImage;
    }
});