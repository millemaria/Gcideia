const naoBtn = document.getElementById("não");
const simBtn = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

naoBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${x}px`;
  naoBtn.style.top = `${y}px`;
});

simBtn.addEventListener("click", function(){
  mensagem.innerText ="Parabéns, você garantiu seu lugar no céu!" 
});