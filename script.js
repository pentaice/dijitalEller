window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelector('#Ab').addEventListener('click', function(event) {
    //event.preventDefault(); // Linkin varsayılan tıklama işlevini iptal et

    const element = document.getElementById('icerik'); // Aşağı kaydırılacak hedef element
    element.scrollIntoView({ behavior: 'smooth' }); // Yumuşak kaydırma efekti ile sayfayı aşağı kaydır
});


ScrollReveal().reveal('.scrollReveal1',{delay:200});
ScrollReveal().reveal('.scrollReveal2',{delay:400});


