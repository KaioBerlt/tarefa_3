let btncad = document.querySelector('#btncad');

btncad.addEventListener("click", function(){
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    let tel = document.querySelector('#tel').value;
    let endereco = document.querySelector('#endereco').value;
    if(nome === "") {
        alert("Nome Inválido")
    } if (email === "") {
        alert("E-mail Inválido")
    } if(senha === ""){
        alert("Campo Senha Obrigatório")
    } if(tel === ""){
        alert("Telefone Inválido")
    } if(endereco === ""){
        alert("Endereço Inválido")
    } else{
        document.querySelector("#mensagemOk").insertAdjacentHTML(
            "afterend",
            ` <div class="card-teste">
            <span>Cadastro Realizado Com Sucesso!</span>
            </div>
            `
        );
        let mensagem = document.querySelector('.card-teste');
        setTimeout(() =>{
            mensagem.style.display = "none";
        }, 3000);
    }

    document.querySelector('#nome').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#senha').value = "";
    document.querySelector('#tel').value = "";
    document.querySelector('#endereco').value = "";
})
    
    
    

    