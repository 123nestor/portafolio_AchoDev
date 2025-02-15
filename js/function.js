//javascript para el boton
window.addEventListener("scroll", () =>{
    var log= window.scrollY;
    console.log(log);
    if(log > 300){
        document.querySelector('.botoncito').classList.add('show');
    }else{
        document.querySelector('.botoncito').classList.remove('show');
    }
});
document.querySelector('.botoncito').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});
//javascript para el contacto
var input= document.getElementsByClassName('form_input');
for(var i= 0; i< input.length; i++){
    input[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}


//javascript para cambiar modo dark
const btn_check = document.querySelector('#toggle');
const btn_toggle = document.querySelector('#label_toggle');
var servo = document.querySelector('.container-servicio');
var servi = document.querySelector('.container-servicio1');
btn_check.addEventListener('change', (event) => {
    let checked=event.target.checked;
    btn_check.classList.toggle('activar');
    document.body.classList.toggle('dark');
    servo.classList.toggle('ligth');
    servi.classList.toggle('ligth');
    if(checked==true){
        
        btn_toggle.innerHTML='<i class=" fa fa-solid fa-sun"></i>';
    }else{
        btn_toggle.innerHTML='<i class=" fa fa-solid fa-moon"></i>';
    }
});

//javascript para cambiar colors
const elegir=document.getElementById('color');
const estilo= document.documentElement.style;
elegir.addEventListener('click',(e)=>{
    console.log(e.target.dataset.color);
    estilo.setProperty('--color-primario',e.target.dataset.color);
});