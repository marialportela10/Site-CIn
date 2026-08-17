export default function Sobre({ setPaginaAtual, alternarTema }) {
    return (
        <>
            <div class="pagina-sobre">
                <main>
                    <article class="sobre-artigo">
                        <header> 
                            <h1>Sobre mim</h1>
                        </header>
                        <section>
                            <p>Olá! Meu nome é Maria Luiza de Paula Portela, sou Graduanda em Sistemas de Informação pela Universidade Federal de Pernambuco (UFPE), com interesse na área de Gestão de Projetos e Produtos de Tecnologia (Product Management) e na área de cibersegurança.
        </p>
                            <p>Fora do ambiente acadêmico, expresso minha visão artística por meio de artes plásticas, pintura, cerâmica e modelagem 3D. Para manter o equilíbrio, invisto meu tempo livre na leitura, em jogos digitais, cinema e atividades físicas como vôlei, academia e Muay Thai. 
        </p>
                        </section>

                        <section>
                                <h2>Experiências Acadêmicas</h2>
                                <h3>Monitoria em Introdução à Programação</h3>
                                <p>Me tornei monitora da cadeira de Introdução à Programação com o intuito de auxiliar estudantes que nunca tiveram contato prévio com a lógica e a linguagem Python. Como aluna, compreendo perfeitamente a dificuldade de sair da zona de conforto ao iniciar os estudos em algo completamente novo.
        </p>
                            <p>Considero essa a disciplina mais importante dos cursos de tecnologia, pois é nela que se desenvolve a base que será utilizada em todas as outras matérias. Através da monitoria, não só ajudo esses alunos, como também desenvolvo minhas próprias habilidades de comunicação clara, escuta ativa e liderança facilitadora.
        </p>
                                <h3>Liga Acadêmica de Jogos Eletrônicos (LAJE)</h3>
                                <p>Atuo como desenvolvedora e game designer, vivenciando na prática o ciclo de vida de um produto digital, o trabalho multidisciplinar e o foco na experiência do usuário (UX).
        </p>
                        </section>
                        <div class="linha-secoes">
                            <aside>
                                <section>
                                    <h2>Linguagens</h2>
                                        <ul class="badge-lista">
                                            <li class="badge">Python</li>
                                            <li class="badge">C</li>
                                            <li class="badge">C++</li>
                                            <li class="badge">JavaScript</li>
                                            <li class="badge">HTML</li>
                                            <li class="badge">CSS</li>
                                        </ul>
                                </section>
                            </aside>
                            <section>
                                <h2>Interesses e Estudos</h2>
                                <ul class="badge-lista">
                                    <li class="badge">Gestão de Projetos e Produtos de Tecnologia (Product Management)</li>
                                    <li class="badge">Cibersegurança</li>
                                    <li class="badge">Desenvolvimento Web</li>
                                    <li class="badge">Desenvolvimento de Jogos Digitais</li>
                                </ul>
                            </section>
                        </div>
                        <section>
                            <p>Estou sempre aberta a conversas, trocas de experiências sobre tecnologia, produto e games, além de oportunidades de estágio nas áreas de Gestão de Projetos e Product Management e Cibersegurança.
        </p>
                        </section>
                    </article>
                </main>

            </div>
        </>
    );
}