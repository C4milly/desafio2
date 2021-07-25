submitButton.addEventListener("click",function(){
    let nomeUsuario = document.getElementById("name").value;
    let emailUsuario = document.getElementById("email").value;
    let enderecoUsuario = document.getElementById("endereco").value;
    let numeroUsuario = document.getElementById("phone").value;
    let cidadeUsuario = document.getElementById("Cidade").value;
    let estadoUsuario = document.getElementById("Estado").value;
    let cepUsuario = document.getElementById("CEP").value;
  
  console.log("Teste");
    
    localStorage.setItem('nomeUsuario',JSON.stringify(nomeUsuario));
    localStorage.setItem('emailUsuario',JSON.stringify(emailUsuario));
    localStorage.setItem('enderecoUsuario',JSON.stringify(enderecoUsuario));
    localStorage.setItem('numeroUsuario',JSON.stringify(numeroUsuario));
    localStorage.setItem('cidadeUsuario',JSON.stringify(cidadeUsuario));
    localStorage.setItem('estadoUsuario',JSON.stringify(estadoUsuario));
    localStorage.setItem('cepUsuario',JSON.stringify(cepUsuario));  
  })

  submitButtonProduto.addEventListener("click",function(){
    let nomeProduto = document.getElementById("produto").value;
    let codigoProduto = document.getElementById("codigo").value;
    let quantidadeProduto = document.getElementById("quantidade").value;
  

    localStorage.setItem('nomeProduto',JSON.stringify(nomeProduto));
    localStorage.setItem('codigoProduto',JSON.stringify(codigoProduto));
    localStorage.setItem('quantidadeProduto',JSON.stringify(quantidadeProduto));
  })