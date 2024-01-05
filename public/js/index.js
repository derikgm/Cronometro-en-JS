let imagenes = document.getElementsByTagName('img');

for (const im of imagenes) {
    im.addEventListener('click', (event)=>{
        event.preventDefault();
        const formulario = event.target.parentNode;
        formulario.submit();
    });
}