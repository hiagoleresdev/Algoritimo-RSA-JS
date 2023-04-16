function verificarPrimos() {
  const p = parseInt(document.getElementById("p-input").value);
  const q = parseInt(document.getElementById("q-input").value);

  let ehPrimoP = true;
  let ehPrimoQ = true;

  for (let i = 2; i < p; i++) {
    if (p % i === 0) {
      ehPrimoP = false;
      break;
    }
  }

  for (let i = 2; i < q; i++) {
    if (q % i === 0) {
      ehPrimoQ = false;
      break;
    }
  }

  if (ehPrimoP && ehPrimoQ && p > 1 && q > 1) {
    MostrarCampos();
  } else {
    alert("p = " + p + " e q = " + q + " não são primos!");
  }
}

function MostrarCampos() {
  document.getElementById("campo1").style.display = "block";
  document.getElementById("campo2").style.display = "block";
}