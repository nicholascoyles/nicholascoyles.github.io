const filter_btns = document.querySelectorAll(".filter-btn");

filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add('active');

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    });
});

$('.grid').isotope({
    itemSelector:'.grid__item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s",
});

// /*MENU SHOW Y HIDDEN*/ 

const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})


//Show more button





