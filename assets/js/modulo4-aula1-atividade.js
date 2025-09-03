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
        "<b>CORRETO</b>. As evidências mais atuais indicam que a partir de 41 semanas, a indução do parto teve resultados melhores do que continuar esperando o trabalho de parto espontâneo. Por isso, as diretrizes recomendam oferecer à mulher a indução do parto, a partir dessa data. Mas esperar o trabalho de parto espontâneo até 41 + 6 pode ser a preferência de algumas mulheres. Se a condição fetal estiver boa e a mulher não apresentar comorbidades, essa pode ser uma opção segura.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETO</b>. A data provável do parto corresponde a uma idade gestacional de 40 semanas. Um estudo com dados dos EUA mostrou que em 1990, quase metade de todos os nascimentos (48%) ocorreu com ≥40 semanas. Em 2020, todavia, este número caiu para menos de um terço (30%). De todo modo, 40 semanas não é uma data limite, além da qual a gravidez não pode continuar.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Se a interrupção da gravidez estiver indicada em algum momento, e não houver contraindicações ao parto normal, a indução do parto é uma opção segura e efetiva. Interromper a gestação a partir de 41 semanas não significa fazer cesariana.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. A indução do parto é um processo pelo qual o médico/enfermeiro obstetra promove o início das contrações uterinas que vão levar ao nascimento do bebê. Existem vários motivos que podem levar o médico/EO a induzir o parto. Uma idade gestacional &gt; 41 semanas é uma indicação muito frequente. Existem também várias formas de induzir o parto. As mais utilizadas são o balão e o misoprostol. Não é um tipo de “parto forçado.”";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
