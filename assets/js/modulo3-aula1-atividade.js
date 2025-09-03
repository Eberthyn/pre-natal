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
        "<b>CORRETO</b>. Preeclampsia em gravidez anterior, principalmente quando de início precoce (antes de 30 semanas) ou com desfecho adverso, aumenta o risco de preeclampsia na gravidez atual em até 8 vezes. É o principal fator de risco para recorrências. Outros fatores de risco são: HAC, doença renal crônica, obesidade (IMC &gt; 30), diabetes prévia, doenças auto-imunes, fertilização in vitro, gestação múltipla.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETO</b>. Hipertensão é definida como uma PAS ≥ 140 OU PAD ≥ 90 mmHg, confirmada por pelo menos duas medidas, com um intervalo de 4 horas. Medidas ≥ 160/110 mmHg indicam hipertensão grave, com indicação de tratamento imediato. Nestes casos, não é necessário aguardar 4 horas para tomar uma segunda medida. É importante que a técnica da medida seja correta e o equipamento esteja calibrado.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Hipertensão pode se apresentar de forma assintomática, principalmente em casos leves.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. Carbonato de cálcio, na dose de 1.000 mg/dia (cálcio elemento) é indicado para prevenção da preeclampsia em mulheres de alto risco, ou baixa ingesta de cálcio. No Brasil, a maioria das mulheres apresentam baixa ingesta de cálcio. Por isso, o Ministério da Saúde passou a recomendar a suplementação universal de cálcio. Não é um medicamento para tratamento da hipertensão.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
