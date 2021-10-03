const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else {
    if (figure.classList.contains("triangle")) {
      figure.classList.remove("triangle")
    } else {
      figure.classList.add("rounded")
    }
  }
}
