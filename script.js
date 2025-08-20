document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const currency = document.getElementById("currency").value;

  document.getElementById("result").innerText =
    `Thank you, ${name}! You registered with ${email} and chose ${currency}.`;
});
