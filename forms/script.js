document.addEventListener("DOMContentLoaded", () => {
  const showPass = document.getElementById("show_pass");

  showPass.addEventListener("click", (e) => {
    const pass = document.getElementById("password");
    const pass_ = document.getElementById("password_");
    if (!showPass.checked) {
      pass.type = "password";
      pass_.type = "password";
    } else {
      pass.type = "text";
      pass_.type = "text";
    }
  });

  // persona.saludar();

  const form = document.querySelector(".form-container");
  const inputs = document.querySelectorAll("input");

  inputs.forEach((i) => {
    i.addEventListener("input", () => validateInput(i));
    i.addEventListener("blur", () => validateInput(i));
  });

  form.addEventListener("submit", (e) => {
    const inputs = document.querySelectorAll("input");
    let formIsValid = true;

    inputs.forEach((input) => {
      if (!validateInput(input)) {
        formIsValid = false;
      }
      e.preventDefault();
      if (formIsValid) {
        alert("Registro exitoso");
        clearError(null, true);
        form.reset();
      }
    });
    // checkForm();
  });
  // checkForm();
});

const validateInput = (input) => {
  clearError(input);

  if (!input.checkValidity()) {
    showError(input);
    return false;
  }

  if (input.type === "password") {
    clearError(input, true);
    const inputsPass = document.querySelectorAll("input[type='password']");

    if (inputsPass[0].value !== inputsPass[1].value) {
      showError(input, true, false);
      return false;
    } else {
      showError(input, false, true);
      return true;
    }
  }

  return true;
};

function checkForm() {
  const inputs = document.querySelectorAll("input");
  let formIsValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      formIsValid = false;
      showError(input);
    } else {
      clearError(input);
    }
  });

  if (formIsValid) {
    alert("Registro exitoso");
    form.reset();
  }
}

const showError = (input, validatePass = false, passOk = false) => {
  const error = document.createElement("small");
  error.classList.add("error-message");

  if (input.validity.valueMissing) {
    error.textContent = "Campo Obligatorio";
  } else if (input.validity.patternMismatch) {
    error.textContent = input.title || "Formato Invalido";
  } else if (input.validity.typeMismatch) {
    error.textContent = "Formato Incorrecto";
  }

  if (validatePass) {
    const inputsPass = Array.from(
      document.querySelectorAll("input[type='password']")
    );
    if (!passOk) {
      error.textContent = "Passwords no coenciden";
      inputsPass.map((e) => e.insertAdjacentElement("afterend", error));
    } else {
      for (const e of inputsPass) {
        e.insertAdjacentElement("afterend", error);
      }
    }
  }

  input.insertAdjacentElement("afterend", error);
};

const clearError = (input, clearAll = false) => {
  if (clearAll) {
    const smalls = Array.from(document.querySelectorAll("small"));
    smalls.map((e) => e.remove());
  }
  const next = input?.nextElementSibling;
  if (next && next.classList.contains("error-message")) {
    next.remove();
  }
};

const persona = {
  nombre: "Pepito",
  saludar: function () {
    console.log("Hola " + this.nombre);
  },
};
//no usar cuando se requiere this las arrow function

// const suma = () => {
//   console.log(arguments);
// };

function suma() {
  console.log(arguments);
}

const ejericio1 = () => {
  const arr = [5, 6, 9, 7, 2, 3, 4, 0];
  console.log("array original " + arr);

  const resp = arr.map((e) => e * 2);
  return resp;
};
