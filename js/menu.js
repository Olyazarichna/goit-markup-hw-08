(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("arai-expended") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
    });
})();
