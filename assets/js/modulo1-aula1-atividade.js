// MÓDULO 1 QUESTÃO 1
var resposta = "A1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps = $("input[name=questao1]:checked");
  if (resps.length) {
    $("#feedback1").removeClass("escondeFeedback");
    $("input[name=questao1]").removeClass("input-erro input-certo");
    resps.each(function () {
      // concatena os values
      value += $(this).val();
    });

    if (value !== "A1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "<b>CORRETO</b>. Sim, contraceptivos reversíveis de longa ação são atualmente considerados como primeira linha para adolescentes.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. O DIU TCu é considerado categoria 2 para uso em adolescentes, pelos critérios de elegibilidade do CDC (EUA, 2024). Categoria 2 significa “uma condição para a qual as vantagens de usar o método geralmente superam os riscos teóricos ou comprovados”. Significa dizer que é seguro.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Autonomia da adolescente deve sempre ser estimulada e respeitada, compreendendo-se a essência deste princípio bioético enquanto passível de exercício a partir da oferta adequada de informações cientificamente embasadas e com fundamentação técnica pelos organismos de saúde, com vistas à promoção do autocuidado. O uso de anticoncepcional por menina &lt; 16 anos não precisa ser autorizado pelos pais.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. A contracepção de emergência deve ser administrada em até 120 horas (5 dias) após a relação sexual desprotegida ou a violência sexual, sendo ideal que ocorra no menor intervalo possível para aumentar a eficácia.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
