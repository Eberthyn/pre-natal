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
        "<b>CORRETO</b>. Sífilis latente é definida como um período em que não se observa nenhum sinal ou sintoma clínico de sífilis, verificando-se, porém, reatividade nos testes imunológicos que detectam anticorpos. <u>A maioria dos diagnósticos ocorre nesse estágio</u>.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. A sífilis latente é dividida em: latente recente (até um ano de infecção) e latente tardia (mais de um ano de infecção); Na sífilis latente não aparecem sinais ou sintomas; sífilis recente é definida.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. Na sífilis secundária, são comuns sinais e sintomas sistêmicos da infecção, mimetizando manifestações clinicas de outras enfermidades. Manifestações dermatológicas são comuns. Podem ocorrer erupções cutâneas em forma de maculas (roséola) e/ou pápulas, principalmente no tronco; lesões eritemato-escamosas palmo-plantares; placas eritematosas branco-acinzentadas nas mucosas; lesões papulo-hipertróficas nas mucosas ou pregas cutâneas; alopecia em clareira e madarose (perda da sobrancelha, em especial do terço distal), febre, mal-estar, cefaleia, adinamia e linfadenopatia generalizada. As lesões secundarias são ricas em treponemas.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. A forma clínica mais frequente na gravidez é a sífilis latente (na maioria das vezes de duração indeterminada).";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
