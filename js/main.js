//funcao ajax 
$(function(){
    $(".cep").hide();//esconder resultado
    $(".barra-progresso").hide();//esconder barra de progresso
});

// Funcao que sera executada ao clicar no botao
function consultaCep(){
    $(".barra-progresso").show();//mostrar barra de progresso
        cep = ""//variavel que recebe cep do usuario
        var cep = document.getElementById("cep").value//pegar cep do usuario

        //funcao ajax
        $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json",//pega valor do site que traz todos os dados em um  Json
        type: "GET",//pega pelo get
        success: function(response){//passar o valor pra variavel response

            //Aula 1
            // document.querySelector("#logradouro").innerHTML = response.logradouro
            // $("#bairro").html(response.bairro)

            $("#titulo").html("CEP: " + response.cep)//pegar valor do objeto e colocar no html
            $("#bairro").html(response.bairro)//pegar valor do objeto e colocar no html
            $("#logradouro").html(response.logradouro)//pegar valor do objeto e colocar no html
            $("#localidade").html(response.localidade)//pegar valor do objeto e colocar no html
            $("#uf").html(response.uf)//pegar valor do objeto e colocar no html
            $(".cep").show();///mostrar resultado
            $(".barra-progresso").hide();//esconder barra de progresso
           }
    })
}