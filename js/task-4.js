const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log({
    email: userEmail,
    password: userPassword,
  });

  event.currentTarget.reset();
});
