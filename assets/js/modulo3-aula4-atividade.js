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
        "<b>CORRETO</b>. Sim, o tabagismo é um importante fator de risco, para restrição de crescimento fetal intrauterino. Outros fatores de risco são: idade materna &gt; 40 anos, hipertensão arterial, diabetes com doença vascular, exercício físico vigoroso (atletas), história prévia de óbito fetal. Estes fatores podem ser identificados desde a primeira consulta através da anamnese e exame físico e devem ser registrados na caderneta de gestante.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETO</b>. Atualmente o ultrassom tornou-se um exame amplamente disponível, e muitas pessoas acham que o ultrassom deve ser feito várias vezes durante a gravidez. Todavia, em gestantes de baixo risco, o Ministério da Saúde do Brasil recomenda um único ultrassom no início da gravidez, para determinar a idade gestacional. Outros exames devem ser realizados a critério clínico, isto é, se o prenatalista julgar necessário.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETO</b>. A avaliação da altura uterina com uma fita métrica é um método barato e acessível para avaliar o crescimento uterino e deve ser realizada em todas as mulheres, em todas as consultas de prenatal, a partir de 16-20 semanas. O objetivo é identificar desvios do crescimento fetal. Se a medida da altura uterina estivar acima do esperado para a idade gestacional, a suspeita é de fetos Grandes para a Idade Gestacional (GIG). Se abaixo, a suspeita é fetos Pequenos para a Idade Gestacional (PIG). Em qualquer suspeito de crescimento fetal anormal, um ultrassom deve ser solicitado para confirmar o diagnóstico.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETO</b>. A mensuração da altura uterina é feita com uma fita métrica medindo desde a sínfise púbica até fundo uterino, não até a cicatriz umbilical.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
