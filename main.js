function scrollHeader(){
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/

var swiperPopular = new Swiper(".popular-container", {
    spacBetween: 32,
    grabCursor: true,
    centeresSledis: true,
    slidPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/

const acordationItems =document.querySelectorAll('.value-acordation-item')

acordationItems.forEach((item) =>{
  const acordationHeader = item.querySelector('.value-acordation-header')

  acordationHeader.addEventListener('click', () =>{
    const openItem = document.querySelectorAll('acordation-open')
     toggleItem(item)

     if(openItem && openItem !== item){
       toggleItem(openItem)
     }

  })
})

const toggleItem = (item) =>{
   
  const acordationContent = item.querySelector('.value-acordation-content')

  if(item.classList.contains('acordation-open')){
    acordationContent.removeAttribute('style')
    item.classList.remove('acordation-open')
  }else{
    acordationContent.style.height = acordationContent.scrollHeight + 'px'
    item.classList.add('acordation-open')

  }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  // Quando a rolagem for maior que 350 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top

  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema selecionado anteriormente (se o usuário for selecionado)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos se o usuário já escolheu um tema

if (selectedTheme) {

  // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o escuro

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {

    // Adicione ou remova o tema escuro / ícone

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    //Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== ROLAGEM DE ANIMAÇÃO ===============*/

const sr = ScrollReveal({

    origin: 'top',
    distance: '68px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.home-titulo, .popular-container, .inscricao-container, .footer-container')
sr.reveal('.home-descricao, .footer-info', {delay: 500})
sr.reveal('.home-search', {delay: 600})
sr.reveal('.home-value', {delay: 700})
sr.reveal('.home-imagens', {delay: 800, origin: 'bottom'})
sr.reveal('.logos-img', {interval: 100})
sr.reveal('.values-imagens, .contact-content', {origin:'left'})
sr.reveal('.value-content, .contact-imagens', {origin:'right'})