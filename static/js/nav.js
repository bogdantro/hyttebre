window.addEventListener("scroll", function(){
    const navbar = document.getElementById('mobileNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
})

function menu(){
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
        hamburger.classList.add('active');
        sidebar.classList.add('active');
    }else{
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    }
}