        // Declariacion de variables globales 
let up = document.querySelectorAll('.works a')
let colour = document.getElementById('primeroida')
let menu = document.querySelector('.redes')

menu.addEventListener('mouseover',() => {
    document.getElementById('p').classList.remove('desactivo');
    document.getElementById('p').classList.add('activo');
})
 
menu.addEventListener('mouseout',() => {
    document.getElementById('p').classList.add('desactivo');
    document.getElementById('p').classList.remove('activo');
})   
        // Animacion de ida
let transition = (color) => {
    if(window.scrollY == 0 && color == 1){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://sarlaftend.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 2){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://proyectodo.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 3){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://weather-mauve-eight.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 4){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://www.youtube.com/watch?v=tCodXFWW2gU";},2250)
    } 
    if(window.scrollY == 0 && color == 5){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://www.youtube.com/watch?v=xaK9Jwv46W8";},2250)
    }  
}

document.addEventListener('scroll', transition)

        // Recorre los a de work en el assets y a esos a agregarles un evento para que ejecute una funcion anonima tipo flecha

up.forEach((a) => {
    a.addEventListener('click', (e) => {
        setTimeout( () => {transition(e.target.name)},1000)
    })
})

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";
	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	colour.style.background = color;
}

generarNuevoColor()