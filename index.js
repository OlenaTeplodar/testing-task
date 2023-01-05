// import { refs } from './src/refs';
// import { openModalSingIn } from './src/sing-in-open-modal';


 const refs = {
   body: document.querySelector("body"),

   userName: document.querySelector(".user-name"),

   openModalBtnSingUp: document.querySelector(".modal-sing-up-open"),
   openModalBtnSingIn: document.querySelector(".modal-sing-in-open"),
   closeModalBtn: document.querySelector(".close-btn"),
   backdrop: document.querySelector(".backdrop"),

   goOut: document.querySelector(".close-out"),

   modalSingIn: document.querySelector(".modal-in-open"),
   modalSingUp: document.querySelector(".modal-up-open"),
   singInSubmit: document.querySelector(".js-sing-in"),
   singUpSubmit: document.querySelector(".js-sing-up"),

   singUpName: document.querySelector(".js-data-sing-up-name"),
   singUpPassword: document.querySelector(".js-data-sing-up-password"),
   singUpEmail: document.querySelector(".js-data-sing-up-email"),
   singUpEmailControl: document.querySelector(".js-data-sing-up-email-control"),

   singInData: document.querySelector(".js-data-sing-in"),
   singInPassword: document.querySelector(".js-data-sing-in-password"),

   tableStatistic: document.querySelector(".js-table-statistic > tbody"),

   aboutWallet: document.querySelector(".about-wallet"),
 };


// работа с именем и кнопкой вихода- сначала - невидимое, потом - при сабмите - видим, плюс показываем главный екран
refs.userName.classList.add('not-show');
refs.goOut.classList.add("not-show");

//слушаем сабмит на модалках
refs.singUpSubmit.addEventListener("click", onShowMainWindow);
refs.singInSubmit.addEventListener("click", onShowMainWindow);

//функция показа основного экрана (4 окно)
function onShowMainWindow(e) {
  e.preventDefault();
  refs.userName.classList.toggle("not-show");
  refs.goOut.classList.toggle("not-show");
  refs.openModalBtnSingIn.classList.add('is-hidden');
  refs.openModalBtnSingUp.classList.add('is-hidden');
    closeModal();
  mainWindowShow();
  // statisticRender();

}

function mainWindowShow() {
  refs.aboutWallet.innerHTML="";
  console.log(1245432);
}
//  работа с именем - конец

// Кнопка ВИХІД
refs.goOut.addEventListener('click', (e) => { document.location.reload(); });
// кнопка ВИХІД Кінець


//  Открытие модалки логования и скрытия кнопки
refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);

function openModalSingIn() {
  refs.modalSingIn.classList.remove("is-hidden");  //видна модалка
  window.addEventListener("keydown", onEscClick);  // слушаем клик по Esc
  refs.openModalBtnSingIn.classList.toggle('is-hidden'); // скрываем кнопку открытия
  refs.openModalBtnSingUp.classList.toggle("center-position");
}

//Открытие модалки Регистрации и скрытия кнопки
refs.openModalBtnSingUp.addEventListener("click", openModalSingUp);

function openModalSingUp() {
  refs.modalSingUp.classList.remove("is-hidden"); //видна модалка
  window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
  refs.openModalBtnSingUp.classList.toggle("is-hidden"); // скрываем кнопку открытия
  refs.openModalBtnSingIn.classList.toggle("center-position");
}

// Закрытие модалок

refs.closeModalBtn.addEventListener("click", closeModal);


function onEscClick(evt) {
  if (evt.code === "Escape") {
    closeModal();
    // window.removeEventListener("keydown", onEscClick);
    console.log(56);
  }
}


refs.closeModalBtn.addEventListener('click', () => {
  console.log("yes!");
});

function closeModal() {
  refs.modalSingIn.classList.add('is-hidden');
  refs.modalSingUp.classList.add('is-hidden');
  refs.backdrop.classList.add('is-hidden');
refs.openModalBtnSingUp.classList.toggle("is-hidden");


  console.log(123456);
}


// function openModalSingUp() {
//   refs.modalSingUp.classList.remove("is-hidden"); //видна модалка
//   window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
//   refs.openModalBtnSingUp.classList.toggle("is-hidden"); // скрываем кнопку открытия
//   refs.openModalBtnSingIn.classList.toggle("center-position");
// }




//    refs.openModalBtnSingIn.classList.remove('is-hidden');
//    refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);
// }
// refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);

// function openModalSingIn() {
//   refs.modalSingIn.classList.remove("is-hidden");
//   window.addEventListener("keydown", onEscClick);
//   document.body.classList.add("active-modal");
//   refs.openModalBtnSingIn.classList.add("is-hidden");
//   refs.openModalBtnSingIn.removeEventListener("click", openModalSingIn);
// }


// ------------Open Sing-UP window--------//

// refs.openModalBtnSingUp.addEventListener("click", openModalSingUp);

// function openModalSingUp() {
//   refs.modalSingUp.classList.remove("is-hidden");
//   // refs.body.classList.add("no-scroll");
//   window.addEventListener("keydown", onEscClick);
//   document.body.classList.add("active-modal");
//   refs.openModalBtnSingUp.classList.add("is-hidden");
//   refs.openModalBtnSingUp.removeEventListener("click", openModalSingUp);
// }




















// import { Chart } from "chart.js";
// var popCanvas = $("#popChart");
// // var popCanvas = document.getElementById("popChart");
// var popCanvas = document.getElementById("popChart").getContext("2d");

// var popCanvas = document.getElementById("popChart");
// var barChart = new Chart(popCanvas, {
//   type: "bar",
//   data: {
//     labels: [
//       "China",
//       "India",
//       "United States",
//       "Indonesia",
//       "Brazil",
//       "Pakistan",
//       "Nigeria",
//       "Bangladesh",
//       "Russia",
//       "Japan",
//     ],
//     datasets: [
//       {
//         label: "Population",
//         data: [
//           1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861,
//           190632261, 157826578, 142257519, 126451398,
//         ],
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 206, 86)",
//           "rgb(75, 192, 192)",
//           "rgb(153, 102, 255)",
//           "rgb(255, 159, 64)",
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 206, 86)",
//           "rgb(75, 192, 192)",
//           "rgb(153, 102, 255)",
//         ],
//       },
//     ],
//   },
// });

// import { getItemTemplate } from "./src/getItemTemplate";
// import { items as importedItems } from "./src/js/items";

// let items = importedItems;
