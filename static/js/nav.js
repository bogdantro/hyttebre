window.addEventListener("scroll", function(){
    const navbar = document.getElementById('mobileNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
})

window.addEventListener("scroll", function(){
    const navbar = document.getElementById('desNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
})

function menu(){
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('mobileNav');

    if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
        hamburger.classList.add('active');
        sidebar.classList.add('active');
        navbar.classList.add('menu');
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }else{
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        navbar.classList.remove('menu');
        document.body.style.overflow = "scroll";
        document.documentElement.style.overflow = "scroll";
    }
}