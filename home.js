  function toggleMenu() {  
    const menu = document.getElementById("dropdownMenu");  
    menu.style.display = (menu.style.display === "block") ? "none" : "block";  
  }  function revealOnScroll() {
const elements = document.querySelectorAll('.card, .about-section');
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
const bottom = el.getBoundingClientRect().bottom;
const inView = top < window.innerHeight && bottom > 0;

if (inView) {  
    el.classList.add("visible");  
  } else {  
    el.classList.remove("visible");  
  }  
});

}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

const observer = new MutationObserver(() => {
revealOnScroll();
});

observer.observe(document.body, {
childList: true,
subtree: true,
});
