function enviar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;


  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  const dados = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  fetch("https://formdata2023.azurewebsites.net/api/HttpTrigger1?code=9sbnmIXdFEzUHX7dvxDEu3R3yMAHIx9zp19oaks-2DIHAzFu1F3jCg==", {
    method: "POST",
    body: JSON.stringify(dados)
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Ocorreu um erro ao enviar o formulário.");
    }
    alert("Obrigado por entrar em contato!");

    
    limparFormulario();
    
    return response.json();
  })
  .catch(function(error) {
    console.error("Erro: " + error.message);
  });

  return false;
}

function limparFormulario() {
  document.getElementById("agradecimento").style.display = "block";
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";

  
}
