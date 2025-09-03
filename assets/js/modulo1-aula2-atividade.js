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
        "<b>CORRETA</b>. Sim, o ultrassom precoce, realizado no primeiro trimestre de gestação é o método mais preciso para estimar a idade gestacional. A equipe de saúde acolher as mulheres com suspeita de gravidez, realizar o diagnóstico com o Teste Rápido de urina e, imediatamente, inserir as mulheres com teste positivo na agenda do pré-natal.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETA</b>. O ultrassom endovaginal pode mostrar uma gestação intrauterina a partir de 5-6 semanas de atraso menstrual. Mas, se não houver nenhum sangramento ou dor abdominal, não é necessário fazer um ultrassom de forma tão prece.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETA</b>. A DPP (Data Provável do Parto) corresponde a 40 semanas de gestação. Para a mulher, é importante conhecer a DPP, para que ela e sua família possam organizar a chegada do bebê. A maioria dos bebês nascem antes de 40 semanas. Todavia, cerca de 30-40% dos bebês podem nascer após 40 semanas. A equipe de saúde deve explicar significado da DPP, para que a mulher e sua família não criem expectativas não realistas de que o bebê deve nascer antes dessa data.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETA</b>. É verdade que a DPP é apenas uma data aproximada para o nascimento. Mas, é importante para que a mulher e sua família possam organizar a chegada do bebê.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
