
document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }

  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["I", "J", "C"].includes(e.key.toUpperCase())
  ) {
    e.preventDefault();
  }

  if (e.ctrlKey && e.key.toUpperCase() === "U") {
    e.preventDefault();
  }
});

// Արգելափակել աջ քլիկը
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});