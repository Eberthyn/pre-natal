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
        "<b>CORRETA</b>. A atividade física regular (150 minutos de atividade física por semana) tem múltiplos benefícios, inclusive prevenção de dor lombar.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETA</b>. Se a mulher apresentar sangramento no primeiro trimestre (ameaça de aborto), deve ser orientada a evitar atividade física. Mas para mulheres assintomáticas, não existem evidências de que atividade física aumente o risco de aborto.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETA</b>. Todo medicamento deve ser utilizado de forma racional durante a gravidez, inclusive analgésicos comuns. Não existem evidências de que dipirona ou paracetamol aumentem o risco de malformações fetais. Por isso, podem ser utilizados com segurança, quando indicados.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETA</b>. É importante que a gestante passe pelo dentista, durante a gestação, como rotina. A consulta com o dentista é um indicador de qualidade da atenção básica. Não existem contraindicações para tratamento odontológico durante a gestação, incluindo tratamento de cáries dentárias, aplicação de anestesia e realização de raio X.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
