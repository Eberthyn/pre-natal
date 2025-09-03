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
        "<b>CORRETO</b>. Sim, isso é correto. Conhecer os hábitos alimentares da gestante e fornecer orientações sobre dieta saudável é uma atividade essencial do pré-natal. Orientações sobre dieta saudável podem ser fornecidas de forma individual, durante a consulta, ou de forma coletiva, em atividades de grupo.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. Baixo peso no início da gestação (IMC &lt; 18,5) ou ganho de peso abaixo do esperado durante a gestação aumentam o risco de fetos Pequenos para a Idade Gestacional. Risco aumentado de preeclampsia e diabetes gestacional está relacionado a obesidade e ganho de peso excessivo durante a gestação.";
    } else if (value == "C1") {
      mensagem =
        '<b>INCORRETO</b>. Essa informação não é verdadeira. Conheça o <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank">Guia alimentar para a população brasileira</a>.';
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. Obesidade, segundo a Classificação da Organização Mundial de Saúde, é definida como um IMC ≥ 30. Um IMC ≥ 25 e &lt; 30 é definido como sobrepeso. O sobrepeso também aumenta o risco gestacional para doenças como diabetes gestacional.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
