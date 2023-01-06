document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".c-hamburger");

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        btn.classList.toggle('is-active');
    })
})