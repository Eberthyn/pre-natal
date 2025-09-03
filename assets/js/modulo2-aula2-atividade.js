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
        "<b>CORRETA</b>. Bacteriúria assintomática (BA) é um diagnóstico baseado em cultura da urina. Essa é uma definição de grande importância prática. Significa que não é possível fazer o diagnóstico com outros tipos de exame como EAS (Urina tipo 1), ou Gram de gota. Infelizmente, em muitos locais do Brasil, a cultura de urina não está disponível. Nestes locais, o uso de EAS ou Gram de gota para diagnosticar BA leva ao que se chama “superdiagnóstico”, que é o diagnóstico em excesso, ou diagnóstico de uma condição que na verdade não existe, levando ao uso desnecessário de antibióticos.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETA</b>. A bacteriúria assintomática foi associada a aumento no risco de prematuridade, baixo peso, sepse neonatal, admissão em UTI neonatal e óbito fetal/neonatal, além de pielonefrite e óbito materno. Por isso o rastreio está indicado.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETA</b>. Esses sinais e sintomas são típicos de pielonefrite, que é a infecção renal. Na bacteriúria assintomática, como o nome diz, não existem sintomas.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETA</b>. Bacteriúria assintomática (BA) é um diagnóstico baseado em cultura da urina. Essa é uma definição de grande importância prática. Significa que não é possível fazer o diagnóstico com outros tipos de exame como EAS (Urina tipo 1), ou Gram de gota. Infelizmente, em muitos locais do Brasil, a cultura de urina não está disponível. Nestes locais, o uso de EAS ou Gram de gota para diagnosticar BA leva ao que se chama “superdiagnóstico”, que é o diagnóstico em excesso, ou diagnóstico de uma condição que na verdade não existe, levando ao uso desnecessário de antibióticos.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
