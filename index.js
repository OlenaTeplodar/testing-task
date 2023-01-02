(() => {
  const refs = {
    openModalBtnSingUp: document.querySelector("[data-modal-sing-up-open]"),
    openModalBtnSingIn: document.querySelector("[data-modal-sing-in-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modals]"),
  };

  refs.openModalBtnSingIn.addEventListener("click", toggleModal);
  refs.openModalBtnSingUp.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// const refs = {};
