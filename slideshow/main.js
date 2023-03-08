const hidden = document.querySelectorAll(".hidden")

window.addEventListener("scroll", scrolanim)

scrolanim()
function scrolanim(){
    const window_height = window.innerHeight /4*5;
    
    hidden.forEach(devebi => {
        const devebi_top= devebi.getBoundingClientRect().top

        if(devebi_top < window_height){
            devebi.classList.add("show")
        }else{
            devebi.classList.remove("show")
        }

    })
}