let chave_publica = [0,0]
let chave_privada = [0,0]

const p = document.getElementById("campo1-input").value;
const q = document.getElementById("campo1-input").value;
const mensagem = document.getElementById("mensagem").value;


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
  
  return [[e,n],[d,n]]

}

function encrypt(message, publicKey) {
  const [e, n] = publicKey;
  const encrypted = message.split('').map(char => BigInt(char.charCodeAt(0)) ** BigInt(e) % BigInt(n));
  return encrypted;
}

let public_key, private_key = gerar_chaves(p, q)

let encrypted_message = encrypt(message, public_key)
