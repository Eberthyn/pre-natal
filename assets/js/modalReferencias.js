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
    body: [
      `
      <p>BRASIL. Ministério da Saúde. Secretaria de Atenção em Saúde. Departamento de Ações Programáticas Estratégicas. 
      Cuidando de adolescentes: orientações básicas para a saúde sexual e a saúde reprodutiva [recurso eletrônico]. Brasília: Ministério da Saúde, 2015. 44 p., il.</p>

      <p>CABRAL, A. C.; DUARTE, G.; MORAES FILHO, O. B.; VAZ, J. O. Êmese da gravidez. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia, 2018. 
      Capítulo 4, Classificação e tratamento, p. 16-23. (Orientações e Recomendações FEBRASGO, n. 2/Comissão Nacional Especializada em Assistência Pré-Natal).</p>

      <p>KOREN, G.; BOSKOVIC, R.; HARD, M.; MALTEPE, C.; NAVIOZ, Y.; EINARSON, A. Motherisk-PUQE (<i>pregnancy-unique quantification of emesis and nausea) scoring system for nausea and vomiting of pregnancy. 
      American Journal of Obstetrics and Gynecology</i>, v. 186, n. 5, p. S228-S231, 2002. DOI: <a href="https://doi.org/10.1067/mob.2002.123054">https://doi.org/10.1067/mob.2002.123054</a>.</p>

       `
    ],
  },
  {
    id: "2",
    heading: "Módulo 2",
    body: [
      `
      <p>BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde; Secretaria de Vigilância em Saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical do HIV, sífilis e hepatites virais [recurso eletrônico]. Brasília: Ministério da Saúde, 2022. 224 p. 
      Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf">https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf</a>. Acesso em: 21 ago. 2025.</p>

      <p>BRASIL. Ministério da Saúde. Toxoplasmose. Brasília: Ministério da Saúde, [2025]. 
      Disponível em: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/toxoplasmose">https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/toxoplasmose</a>. Acesso em: 21 ago. 2025.</p>

      <p>BRASIL. Ministério da Saúde. Departamento de HIV, Aids, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis. Transmissão vertical. Brasília: Ministério da Saúde, [2025].</p>

      <p>BRASIL. Ministério da Saúde. Departamento de HIV, Aids, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis. Boletim Epidemiológico – HIV e Aids. Brasília: Ministério da Saúde, 2024.</p>

      <p>DVIAHV. Indicadores e dados básicos de gestantes nos municípios brasileiros com mais de 100.000 habitantes. Brasília: Ministério da Saúde, [2025].</p>

      <p>MATUSZKIEWICZ-ROWIŃSKA, J.; MAŁYSZKO, J.; WIELICZKO, M. <i>Urinary tract infections in pregnancy: old and new unresolved diagnostic and therapeutic problems. Archives of Medical Science</i>, v. 11, n. 1, p. 67-77, 2015.</p>

      <p>UNAIDS BRASIL. Países da coalizão global de prevenção do HIV reduzem novas infecções por HIV, mas é preciso acelerar o progresso global. 2024. 
      Disponível em: <a href="https://unaids.org.br/2024/03/paises-da-coalizao-global-de-prevencao-do-hiv-reduzem-novas-infeccoes-por-hiv-mas-e-preciso-acelerar-o-progresso-global/">https://unaids.org.br/2024/03/paises-da-coalizao-global-de-prevencao-do-hiv-reduzem-novas-infeccoes-por-hiv-mas-e-preciso-acelerar-o-progresso-global/</a>. Acesso em: 21 ago. 2025.</p>


      `
    ],

  },
  {
    id: "3",
    heading: "Módulo 3",
    body: [
      `
      <p>BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. Manual de gestação de alto risco [recurso eletrônico]. Brasília: Ministério da Saúde, 2022. 692 p., il. 
      Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/manual_gestacao_alto_risco.pdf">https://bvsms.saude.gov.br/bvs/publicacoes/manual_gestacao_alto_risco.pdf</a>. Acesso em: 21 ago. 2025.</p>

      <p>CLARK, S. F. Iron deficiency anemia. Nutrition in Clinical Practice, v. 23, n. 2, p. 128-141, 2008. DOI: <a href="https://doi.org/10.1177/0884533608314536">https://doi.org/10.1177/0884533608314536</a>.</p>

      <p>CORTES, M. H.; VASCONCELOS, I. A. L.; COITINHO, D. C. Prevalência de anemia ferropriva em gestantes brasileiras: uma revisão dos últimos 40 anos. Revista de Nutrição, Campinas, v. 22, n. 3, p. 409-418, 2009.</p>

      <p>FAO; WHO; UNU. <i>Human energy requirements: report of a Joint FAO/WHO/UNU Expert Consultation; Rome, 17–24 October 2001. Roma: FAO, 2001</i>. 
      Disponível em: <a href="https://www.fao.org/4/y5686e/y5686e00.htm#Contents">https://www.fao.org/4/y5686e/y5686e00.htm#Contents</a>. Acesso em: 21 ago. 2025.</p>

      <p>FEDERAÇÃO BRASILEIRA DAS ASSOCIAÇÕES DE GINECOLOGIA E OBSTETRÍCIA. Femina. v. 47, n. 11, 2019. 
      Disponível em: <a href="https://www.febrasgo.org.br/media/k2/attachments/FEMINAZ11ZV3.pdf">https://www.febrasgo.org.br/media/k2/attachments/FEMINAZ11ZV3.pdf</a>. Acesso em: 21 ago. 2025.</p>

      <p>FIGUERAS, F.; GRATACÓS, E. <i>Update on the diagnosis and classification of fetal growth restriction and proposal of a stage-based management protocol. 
      Fetal Diagnosis and Therapy</i>, v. 36, n. 2, p. 86-98, 2014. DOI: <a href="https://doi.org/10.1159/000357592">https://doi.org/10.1159/000357592</a>.</p>

      <p>RAHMAN, M. M. <i>et al. Maternal anemia and risk of adverse birth and health outcomes in low- and middle-income countries: systematic review and meta-analysis. 
      American Journal of Clinical Nutrition</i>, v. 103, n. 2, p. 495-504, 2016.</p>

      <p>SAFIRI, S. <i>et al. Burden of anemia and its underlying causes in 204 countries and territories, 1990-2019: results from the Global Burden of Disease Study 2019. 
      Journal of Hematology & Oncology</i>, v. 14, n. 185, 2021.</p>

      <p>TOLKIEN, Z. <i>et al. Ferrous sulfate supplementation causes significant gastrointestinal side-effects in adults: a systematic review and meta-analysis. PLoS One</i>, v. 10, n. 2, e0117383, 2015.</p>

      <p>VON DADELSZEN, P.; MAGEE, L. A. <i>Preventing deaths due to the hypertensive disorders of pregnancy. Best Practice & Research Clinical Obstetrics & Gynaecology</i>, v. 36, p. 83-102, 2016. 
      DOI: <a href="https://doi.org/10.1016/j.bpobgyn.2016.05.005">https://doi.org/10.1016/j.bpobgyn.2016.05.005</a>.</p>

      <p>ZAJDENVERG, L. <i>et al.</i> Rastreamento e diagnóstico da hiperglicemia na gestação. 2022. DOI: <a href="https://doi.org/10.29327/557753.2022-11">https://doi.org/10.29327/557753.2022-11</a>.</p>

      `
    ],

  },
  {
    id: "4",
    heading: "Módulo 4",
    body: [

    `
    <p>BEEBE, K. R.; HUMPHREYS, J. <i>Expectations, perceptions, and management of labor in nulliparas prior to hospitalization. Journal of Midwifery & Women’s Health</i>, v. 51, n. 5, p. 347-353, 2006.</p>

    <p>BRASIL. Ministério da Saúde. Pré-natal de baixo risco. Brasília: Ministério da Saúde, 2012. (Cadernos de Atenção Básica, n. 32). 
    Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf">https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf</a>. Acesso em: 21 jul. 2025.</p>

    <p>DECLERCQ, E. <i>et al. The natural pattern of birth timing and gestational age in the U.S. compared to England, and the Netherlands. PLoS One</i>, v. 18, n. 1, e0278856, 2023. 
    DOI: <a href="https://doi.org/10.1371/journal.pone.0278856">https://doi.org/10.1371/journal.pone.0278856</a>.</p>

    <p>HOWARD, L. M. <i>et al. Non-psychotic mental disorders in the perinatal period. The Lancet</i>, v. 384, 15 nov. 2014.</p>

    <p>MUGLU, J. <i>et al. Risks of stillbirth and neonatal death with advancing gestation at term: a systematic review and meta-analysis of cohort studies of 15 million pregnancies. 
    PLoS Medicine</i>, v. 16, n. 7, e1002838, 2019.</p>

    <p>O'CONNOR, E. <i>et al. Primary Care Screening for and Treatment of Depression in Pregnant and Postpartum Women: 
    Evidence Report and Systematic Review for the US Preventive Services Task Force</i>. JAMA, v. 315, p. 388-406, 2016.</p>

    <p>ORGANIZAÇÃO MUNDIAL DA SAÚDE. Recomendações da OMS sobre cuidados maternos e neonatais para uma experiência pós-natal positiva. Genebra: OMS, 2022. 
    Disponível em: <a href="https://iris.who.int/bitstream/handle/10665/354560/9789240048515-por.pdf?sequence=1&isAllowed=y">https://iris.who.int/bitstream/handle/10665/354560/9789240048515-por.pdf?sequence=1&isAllowed=y</a>. Acesso em: 21 jul. 2025.</p>

    <p>ORGANIZAÇÃO MUNDIAL DA SAÚDE. Recomendações da OMS sobre cuidados maternos e neonatais para uma experiência pós-natal positiva: sumário executivo. Genebra: OMS, 2022. 
    Disponível em: <a href="https://www.who.int/pt/publications/i/item/9789240044074">https://www.who.int/pt/publications/i/item/9789240044074</a>. Acesso em: 21 ago. 2025.</p>

    <p>UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL. Quais são os cuidados com o coto umbilical do recém-nascido? TelessaúdeRS-UFRGS, [2025]. 
    Disponível em: <a href="https://www.ufrgs.br/telessauders/perguntas/quais-sao-os-cuidados-com-o-coto-umbilical-do-recem-nascido/">https://www.ufrgs.br/telessauders/perguntas/quais-sao-os-cuidados-com-o-coto-umbilical-do-recem-nascido/</a>. Acesso em: 21 ago. 2025.</p>

    <p>WAQAS, A. <i>et al. Screening programs for common maternal mental health disorders among perinatal women: report of the systematic review of evidence. 
    BMC Psychiatry</i>, v. 22, n. 54, 2022. DOI: <a href="https://doi.org/10.1186/s12888-022-03694-9">https://doi.org/10.1186/s12888-022-03694-9</a>.</p>

    <p>WISNER, K. L. <i>et al. Onset timing, thoughts of self-harm, and diagnoses in postpartum women with screen-positive depression findings. JAMA Psychiatry</i>, v. 70, p. 490-498, 2013.</p>

    <p>WHITTON, A.; WARNER, R.; APPLEBY, L. <i>The pathway to care in post-natal depression: women's attitudes to post-natal depression and its treatment. British Journal of General Practice</i>, v. 46, n. 408, p. 427-428, 1996.</p>



    `
    ],
  },

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
