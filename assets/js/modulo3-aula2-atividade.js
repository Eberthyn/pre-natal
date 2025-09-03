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
        "<b>CORRETO</b>. Sim, os profissionais que assistem o pré-natal devem definir com clareza, se o diabetes já existia antes da gravidez, ou se apareceu depois. Se já existia antes, é importante descrever de forma completa a história da doença: momento do diagnóstico, tratamentos realizados, complicações existentes, etc. O prognóstico e os cuidados podem ser diferentes.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. O rastreio do diabetes gestacional é feito através do Teste Oral de Tolerância á Glicose (TOTG), realizado entre 24 e 28 semanas. Glicemia é mensurada em jejum, 1 hora e 2 horas após ingestão de 75 gramas de dextrosol. Excepcionalmente, em locais em que o TOTG não está disponível, ou quando a mulher não tolera ingestão de dextrosol, o rastreio entre 24 e 28 semanas pode ser feito apenas com uma glicemia de jejum (Locais com viabilidade financeira ou disponibilidade técnica parcial).";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Glicemia de jejum ≥ 126 mg/dL em qualquer momento da gravidez confirma o diagnóstico de diabetes pré-gestacional.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. Desde 2017, a diretriz do Ministério da Saúde é fazer o rastreio universal. Isso significa que o Teste oral de Tolerância à Glicose (TOTG) deve ser oferecida a todas as mulheres, entre 24-28 semanas.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
