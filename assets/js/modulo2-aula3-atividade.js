// MÓDULO 1 QUESTÃO 1
var resposta = "D1"; // Resposta correta
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

    if (value !== "D1") {
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
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "<b>CORRETA</b>. As principais fontes de transmissão da toxoplasmose são alimentos e águas contaminadas com oocistos ou carnes e derivados contendo cistos teciduais. Todas as mulheres devem receber orientações sobre prevenção primária da infecção pelo <i>Toxoplasma gondii</i>. Isso deve ser feito através de folhetos explicativos e atividades educativas.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETA</b>. O <i>Toxoplasma gondii</i> é um protozoário, não um vírus.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETA</b>. Muitas pessoas denominam a toxoplasmose como “a doença do gato”, porque o gato faz parte do ciclo evolutivo do <i>Toxoplasma gondii</i>. Sim, isso é verdade, mas os gatos domésticos não são a principal fonte de transmissão da toxoplasmose.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETA</b>. As principais fontes de transmissão da toxoplasmose são alimentos e águas contaminadas com oocistos ou carnes e derivados contendo cistos teciduais. Todavia, o completo de todos os tipos de carne, incluindo porco, embutidos, frango, frutos do mar e outros, inativa os oocistos. Por isso, o consumo de carnes não é contraindicado.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
