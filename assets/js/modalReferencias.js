// Helper para criar elementos
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (let [k, v] of Object.entries(attrs)) {
    if (k === "class") e.className = v;
    else e.setAttribute(k, v);
  }
  for (let c of children) {
    if (typeof c === "string") e.appendChild(document.createTextNode(c));
    else if (c instanceof Node) e.appendChild(c);
  }
  return e;
}

// Dados do seu accordion
const accordions = [
  {
    id: "1",
    heading: "Módulo 1",
    body: [],
  },
  {
    id: "2",
    heading: "Módulo 2",
    body: [],

  },
  {
    id: "3",
    heading: "Módulo 3",
    body: [],

  },
  {
    id: "4",
    heading: "Módulo 4",
    body: [],
  },
  // {
  //   id: "5",
  //   heading: "Módulo 5",
  //   body: [
  //     "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
  //     "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
  //     "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
  //   ],
  // },
];

function buildAccordionDom(data) {
  const acc = el("div", { class: "accordion", id: "accordionDemo" });
  data.forEach((item, idx) => {
    const collapseId = "collapse" + item.id;
    const headingId = "heading" + item.id;
    // CARD
    const card = el("div", { class: "card" });
    // HEADER
    const head = el(
      "div",
      { class: "card-header", id: headingId },
      el(
        "a",
        {
          class: "collapsed",
          "data-toggle": "collapse",
          "data-target": "#" + collapseId,
          "aria-expanded": "false",
          "aria-controls": collapseId,
        },
        el(
          "p",
          {},
          el("b", {}, item.heading),
          el("i", { class: "fas fa-window-minimize" })
        )
      )
    );
    // BODY
    const body = el(
      "div",
      {
        id: collapseId,
        class: "collapse",
        "aria-labelledby": headingId,
        "data-parent": "#accordionDemo",
      },
      el(
        "div",
        { class: "card-body" },
        ...item.body.map((htmlStr) => {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = htmlStr;
          return wrapper;
        })
      )
    );
    card.appendChild(head);
    card.appendChild(body);
    acc.appendChild(card);
  });
  return acc;
}

function criarModalReferencias() {
  // 1) Cria o container principal da modal
  const modal = el("div", {
    class: "modal fade",
    id: "modalReferencias",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modalReferenciasLabel",
    "aria-hidden": "true",
  });

  // 2) Diálogo (note que agora uso modal-dialog-centered + modal-lg + scrollable)
  const dialog = el("div", {
    class: "modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",
    role: "document",
  });

  // 3) content
  const content = el("div", { class: "modal-content" });

  // 4) header (cópia da modalCreditos, trocando apenas texto e id do título)
  const header = el(
    "div",
    { class: "modal-header" },
    el(
      "h1",
      {
        class: "modal-title",
        id: "modalReferenciasLabel",
        style: "color: #c04caf; margin-top: 0 !important;",
      },
      "Referências Bibliográficas"
    ),
    el(
      "button",
      {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Fechar",
      },
      el("span", { "aria-hidden": "true" }, "×")
    )
  );

  // 5) body: aqui você pode injetar o seu accordion
  const body = el(
    "div",
    { class: "modal-body" },
    buildAccordionDom(accordions)
  );

  // 6) footer: mesmo botão “Fechar” da modalCreditos
  const footer = el(
    "div",
    { class: "modal-footer" },
    el(
      "button",
      {
        id: "botaoComecar",
        type: "button",
        class: "btn btn-primary",
        "data-dismiss": "modal",
      },
      "Fechar"
    )
  );

  // monta tudo
  content.append(header, body, footer);
  dialog.appendChild(content);
  modal.appendChild(dialog);
  document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", criarModalReferencias);
