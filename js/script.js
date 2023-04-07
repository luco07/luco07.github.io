let menuVisible = false;
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList = "nav-container";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
   document.getElementById("nav").classList = "nav-container";
   menuVisible = false;
}
document.querySelector('.subir').addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior : 'smooth|'
    })
})