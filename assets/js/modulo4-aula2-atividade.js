// MÓDULO 1 QUESTÃO 1
var resposta = "C1"; // Resposta correta
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

    if (value !== "C1") {
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
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "<b>CORRETO</b>. Todos são fatores de alerta para depressão pós parto. Uma mulher, grávida ou puérpera, apresentando qualquer um desses sintomas deve ser avaliada por um profissional de saúde com rapidez. Se confirmados os sinais, deve passar pelo médico imediatamente, para avaliação e diagnóstico.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETO</b>. Gravidez não planejado é um fator de risco para depressão perinatal.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. Atualmente, existe uma tendência de se denominar a depressão puerperal ou pós parto de depressão perinatal, já que esse tipo de depressão pode se manifestar tanto antes quanto após o parto.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. A depressão perinatal pode ser percebida por algumas pessoas como uma fraqueza ou um traço de caráter, que pode ser tratada por motivação ou técnicas de auto-ajuda. Atividade física, com certeza, é excelente intervenção para promoção da saúde integral do indivíduo. Todavia, de forma isolada não é tratamento da depressão perinatal. Mulheres com esse diagnóstico devem receber apoio e tratamento específico.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
