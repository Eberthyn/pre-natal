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
        "<b>CORRETO</b>. O Ministério da Saúde recomenda realizar um hemograma no início de gravidez e também em torno de 28 semanas, para rastreio de anemia.";
    } else if (value == "A1") {
      mensagem =
        "<b>INCORRETO</b>. A deficiência de vitamina B12, assim com a deficiência de ácido fólico, são causas de anemia. Mas não são as causas mais frequentes. A principal causa de anemia, em qualquer fase da vida, incluindo a gravidez, é a deficiência de ferro.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. A eletroforese de hemoglobina foi incorporada à rotina do pré-natal em 2013, pela Rede Cegonha. Tem por objetivo identificar anemia falciforme e portadores do traço de anemia falciforme.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. As dietas são classificadas conforme a biodisponibilidade de ferro (baixa, intermediária e alta. Dieta baseada em cereais, raízes e tubérculos, com pouca quantidade de carnes, apresenta BAIXA biodisponibilidade de ferro, o que significa que menos de 10% do ferro contido nestas dietas é absorvido. Para ser considerada dieta com alta disponibilidade em ferro, a dieta deve conter pelo menos 90 g/dia de carne, aves e peixes ou &gt; 75 mg/dia de ácido ascórbico.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
