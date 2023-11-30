function handleOpenCookie() {
  const screen2 = document.querySelector(".screen2");
  screen2.classList.remove("hide");

  document.querySelector(".screen1").classList.add("hide")
}

function handleNewCookie() {
    const screen1 = document.querySelector(".screen1");
    screen1.classList.remove("hide");

    document.querySelector(".screen2").classList.add("hide")
}
