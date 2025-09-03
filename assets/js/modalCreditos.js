class ModalCreditos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style type="text/css">
            p {
                margin-bottom: 0px !important;
                margin-top: 30px !important;
            }

            h2 {
                font-size: 15px !important;
                margin-top: 30px !important;
                text-transform: uppercase;
                font-family: "Prelo Bold";
            }
        </style>

        <h2>Ministério da Saúde</h2>

        <p>Alexandre Padilha</p>
        <i>Ministro</i>

        <h2>Fundação Oswaldo Cruz – Fiocruz</h2>

        <p>Mario Moreira</p>
        <i>Presidente</i>

        <p>Marly Cruz</p>
        <i>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</i>

        <h2>Campus Virtual Fiocruz</h2>

        <p>Ana Cristina da Matta Furniel</p>
        <i>Coordenadora Geral</i>

        <p>Rosane Mendes</p>
        <i>Coordenadora Adjunta</i>

        <p>Renata Bernardes David</p>
        <i>Coordenadora de Produção</i>

        <p>Juliana Dutra</p>
        <i>Gerente de Produção</i>

        <p>Claúdia Reis</p>
        <i>Assessora Pedagógica</i>

        <p>Isabela Schincariol</p>
        <i>Assessora de Comunicação</i>

        <p>Alessandra Guedes</p>
        <i>Designer Educacional</i>

        <p>Daniela Botelho</p>
        <i>Designer UX/UI</i>

        <p>Eberthyn Marques</p>
        <i>Desenvolvedor</i>

        <p><b>Recursos Audiovisuais</b></p>

        <p>Bruno Athaydes</p>
        <i>Edição Audiovisual</i>

        <p><b>Recursos Educacionais</b></p>

        <p>Carmélia Brito</p>
        <i>Bibliotecária</i>

        <p>Natália Rasina</p>
        <i>Audiodescrição</i>

        <p>Maria Angélica Marcondes Drska</p>
        <i>Revisora Ortográfica</i>

        <p><b>Suporte Técnico de Tecnologia da Informação</b></p>

        <p>Bruno Alexandre de Oliveira</p>
        <i>Desenvolvedor</i>

        <p>Eduardo Xavier da Silva</p>
        <i>Desenvolvedor</i>

        <p>Adriano Lourenço</p>
        <i>Analista de Tecnologias Educacionais</i>

        <p>Orlando Terra</p>
        <i>Analista de Tecnologias Educacionais</i>

        <p>Fábio Carneiro</p>
        <i>Designer Gráfico e Web Designer</i>

        <h2>Coordenação Acadêmica</h2>

        <p>Maria do Carmo Leal</p>
        <i>Escola Nacional de Saúde Pública Sérgio Arouca – ENSP/FIOCRUZ</i>

        <h2>Coordenação do Projeto</h2>

        <p>Michele Rocha de Araújo El Kadri</p>
        <i>Instituto Leônidas e Maria Deane – ILMD/Fiocruz Amazônia</i>

        <h2>Equipe ILMD/Fiocruz Amazônia</h2>

        <p>Letícia Santos de Souza <br>
        Rosinete Lacerda Alves <br>
        Tatiane Figueiredo</p>

        <h2>Conteudista</h2>
        <p>Edson Borges de Souza</p>
        <i>Hospital Sofia Feldman – Belo Horizonte / MG</i>


`;
  }
}

customElements.define("modal-creditos", ModalCreditos);
