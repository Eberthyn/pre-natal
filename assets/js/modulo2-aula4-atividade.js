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
        "<b>CORRETA</b>. Sim, esta é a recomendação do Ministério da Saúde. Muitos municípios fazem também um teste rápido no terceiro trimestre, antes da internação para o parto.";
    } else if (value == "B1") {
      mensagem =
        "<b>INCORRETA</b>. A cesariana está indicada apenas quando a carga viral é desconhecida ou detectável (&gt; 1.000 cópias/mL), a partir de 34 semanas. Se a carga viral é detectável (&lt; 1.000 cópias/mL), ou indetectável, a via de parto pode ocorrer segundo indicação obstétrica. Isto é, se não houver nenhuma outra indicação para cesariana, a via preferencial é o parto vaginal. Por isso, é essencial que a equipe garanta a realização da Carga Viral com 34 semanas, para que o resultado esteja disponível no momento do parto, e a equipe obstétrica possa tomar a melhor decisão sobre via de parto.";
    } else if (value == "C1") {
      mensagem =
        "<b>INCORRETA</b>. Em gestantes com carga viral indetectável, o risco de transmissão vertical é &lt; 1%, o que equivale a praticamente eliminar a transmissão vertical. Esse é o objetivo do programa de eliminação da transmissão vertical do HIV. No Brasil, várias cidades já atingiram este objetivo. O diagnóstico no início da gestação e o uso de terapia antiretroviral são fundamentais para a obtenção de cargas virais indetectáveis.";
    } else if (value == "D1") {
      mensagem =
        "<b>INCORRETA</b>. O aleitamento materno está contraindicado em recém-nascidos filhos de mulheres vivendo com HIV. Por isso, essas mulheres devem receber gabergolina, logo após o nascimento, para supressão do aleitamento. No Brasil, o Sistema Único de Saúde (SUS) fornece gratuitamente fórmulas lácteas para bebês de mães HIV positivas.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
