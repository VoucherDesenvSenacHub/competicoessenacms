const btnVoltar = document.getElementById('voltar')

btnVoltar.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        

    })
})