console.log("client side javascript is running");

const form = document.querySelector("form");
const input = document.querySelector("input");
const p1 = document.querySelector("#message1");
const p2 = document.querySelector("#message2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  p1.textContent = "";
  p2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${value}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        p1.textContent = data.error;
      } else {
        p2.textContent = data.location;
      }
    });
  });
});
