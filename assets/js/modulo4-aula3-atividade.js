// MÓDULO 1 QUESTÃO 1
var resposta = "B1"; // Resposta correta
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

    if (value !== "B1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "<b>CORRETO</b>. As mulheres com diagnóstico de hipertensão, em geral, recebem alta em 48-72 horas após o nascimento. Devido à reabsorção de líquidos, os níveis pressóricos podem subir durante a primeira semana após o parto. Assim, mulheres com pressão arterial bem controlada no momento da alta, podem apresentar descontrole pressórico nos dias seguintes. Por isso, a pressão arterial dessas mulheres deve ser cuidadosamente acompanhada até 10-14 dias após o parto. A PA deve ser medida a cada 1-2 dias, nesse período.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETO</b>. Febre, dor abdominal e corrimento com odor fétido no puerpério são sinais de alarme. Mulheres apresentando estes sinais de alarme devem ser imediatamente avaliadas por um médico.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Puerpério é o período que se estende desde o nascimento do bebê, até 42 dias após o parto (6 semanas).";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. Puerpério é o período que se estende desde o nascimento do bebê, até 42 dias após o parto (6 semanas). Ficar de repouso e não lavar o cabelo é uma crendice popular, que deve ser desmistificada pelos profissionais de saúde.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
