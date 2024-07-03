const successButton = document.getElementById("button-success");
const infoButton = document.getElementById("button-info");
const errorButton = document.getElementById("button-error");
const warningButton = document.getElementById("button-warning");

const toaster = new Toaster("toaster", {
  button: true,
  darkmode: true,
  animation: "pop",
  position: "center",
});

successButton.addEventListener("click", () => {
  toaster.create("Success: This is a success toast.", "success");
});

infoButton.addEventListener("click", () => {
  toaster.create("Info: This is an information toast.", "info");
});

errorButton.addEventListener("click", () => {
  toaster.create("Error: This is a error toast.", "error");
});

warningButton.addEventListener("click", () => {
  toaster.create("Warning: This is a warning toast.", "warning");
});
