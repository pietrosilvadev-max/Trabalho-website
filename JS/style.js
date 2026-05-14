// LOGIN

const form = document.getElementById("form");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const user = document.getElementById("user").value;

        const senha = document.getElementById("senha").value;

        const erro = document.getElementById("erro");

        if(user === "admin" && senha === "1234"){

            window.location.href = "indextarefas.html";

        }else{

            erro.textContent = "Login incorreto";

        }

    });

}


// GALERIA

function abrirGaleria(){

    window.location.href = "indexgaleria.html";

}