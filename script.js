cont botoeCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
let curtir = fale;
botaoCurtir.addEventListener("clik", curtir);
function curtir(){
    cont contador = botaoCurtir.querySelector("span");
    if(curtir === false){
        contador.textContent++;
        curtir = true;}
        else{
            contador.textContent--;
            curtiu = false;
      }
}
});
