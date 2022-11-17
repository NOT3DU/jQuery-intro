$(document).ready(function(){
    //add css
    $("#lista").css("color","red");
    //adicionando html
    $('.element').html("meu texto via jquery");

    //disparar no click
    $("a").click(function(){
        alert("ola mundo")
    })
    
});


    //criando funcao
   function pegarvalor(){
        var nome = document.querySelector('.nome').value;
        var sobrenome = document.querySelector('.sobrenome').value;
        
        alert("seja bem vindo " + nome + " " + sobrenome);
        
        console.log(nome + sobrenome);
   }