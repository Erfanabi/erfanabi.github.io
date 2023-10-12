// ! navbar

const showIcon = document.getElementById("show-icon");
const navMenu = document.getElementById("nav-link");

showIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-show");
  showIcon.classList.toggle("close-icon");
});

// ! sevices
const tabIcon = document.querySelectorAll(".tab-icon");

const servicesContent = document.querySelectorAll(".services__content");

tabIcon.forEach((item) => {
  item.addEventListener("click", () => {
    // console.log(item.dataset.todoId);
    // console.log(servicesContent);

    for (let i = 0; i <= 6; i++) {
      servicesContent.forEach((content) => content.classList.remove("active"));
    }
    servicesContent[item.dataset.todoId - 1].classList.add("active");

    // switch (item.dataset.todoId) {
    //   case "1":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[0].classList.add("active");
    //     break;
    //   case "2":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[1].classList.add("active");
    //     break;
    //   case "3":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[2].classList.add("active");
    //     break;
    //   case "4":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[3].classList.add("active");
    //     break;
    //   case "5":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[4].classList.add("active");
    //     break;
    //   case "6":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[5].classList.add("active");
    //     break;
    //   case "7":
    //     servicesContent.forEach((content) =>
    //       content.classList.remove("active")
    //     );
    //     servicesContent[6].classList.add("active");
    //     break;
    // }
  });
});
