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

import { getItemTemplate } from "./src/getItemTemplate";
import { items as importedItems } from "./src/items";

let items = importedItems;