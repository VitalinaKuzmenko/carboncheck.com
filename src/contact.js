///function for send message button inside popup form in contact page
let button = document.querySelector(".send-message-button");
let form = document.querySelector(".order-form");
form.addEventListener("submit", () => {
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  form.innerHTML = `Dear ${firstName} ${lastName}! Thank you very much for sending your message! We will take your message into consideration. Have a nice day!`;
});
