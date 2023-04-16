function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function mdc(a,b){
  if (b==0){
    return a;
  }
  return mdc(b, a % b)
}

function gerar_chaves(p,q){
  let n = p * q;
  let func_tot = (p-1) * (q-1)

  while (true) {
    let e = Math.floor(Math.random() * (phi - 2 + 1) + 2);
    if (gcd(e, phi) === 1) {
      break;
    }
  }
  
  let d = 0;
  for (let i = 1; i < phi; i++) {
    if ((i * e) % phi === 1) {
      d = i;
      break;
    }
  }
  
  return [[e, n], [d, n]];

}










/*
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
*/