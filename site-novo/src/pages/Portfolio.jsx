import { useState } from 'react';

function Carrossel({ imagens }) {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
    };

    const proximo = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carrossel">
            <button 
            type="button" 
            className="btn-carrossel prev" 
            onClick={anterior} 
            aria-label="Imagem anterior"
            >
            &#10094;
            </button>

            <div className="carrossel-container">
            <img
                src={imagens[indiceAtual]}
                alt={`Slide ${indiceAtual + 1}`}
                className="slide active"
            />
            </div>

            <button 
            type="button" 
            className="btn-carrossel next" 
            onClick={proximo} 
            aria-label="Próxima imagem"
            >
            &#10095;
            </button>
        </div>
    );
}

export default function Portfolio({ setPaginaAtual, alternarTema }) {
const imagensMapeia = [
'/src/imagens/mapeia/pagina1.jpg',
'/src/imagens/mapeia/pagina2.jpg',
'/src/imagens/mapeia/pagina3.jpg',
'/src/imagens/mapeia/pagina4.jpg',
'/src/imagens/mapeia/pagina5.jpg',
'/src/imagens/mapeia/pagina6.jpg',
'/src/imagens/mapeia/pagina7.jpg',
'/src/imagens/mapeia/pagina8.jpg'
];

const imagensOuroECachaca = [
'/src/imagens/ouroecachaca/pagina1.jpg',
'/src/imagens/ouroecachaca/pagina2.jpg',
'/src/imagens/ouroecachaca/pagina3.jpg',
'/src/imagens/ouroecachaca/pagina4.jpg',
'/src/imagens/ouroecachaca/pagina5.jpg',
'/src/imagens/ouroecachaca/pagina6.jpg',
'/src/imagens/ouroecachaca/pagina7.jpg',
'/src/imagens/ouroecachaca/pagina8.jpg',
'/src/imagens/ouroecachaca/pagina9.jpg',
'/src/imagens/ouroecachaca/pagina10.jpg',
'/src/imagens/ouroecachaca/pagina11.jpg',
'/src/imagens/ouroecachaca/pagina12.jpg'
];

const imagensTheBunker = [
'/src/imagens/the-bunker/pagina (1).jpg',
'/src/imagens/the-bunker/pagina (2).jpg',
'/src/imagens/the-bunker/pagina (3).jpg',
'/src/imagens/the-bunker/pagina (4).jpg',
'/src/imagens/the-bunker/pagina (5).jpg',
'/src/imagens/the-bunker/pagina (6).jpg',
'/src/imagens/the-bunker/pagina (7).jpg',
'/src/imagens/the-bunker/pagina (8).jpg',
'/src/imagens/the-bunker/pagina (9).jpg',
'/src/imagens/the-bunker/pagina (10).jpg'
];

return (
    <>

        <div className="pagina-sobre">
            <main>
                <article className="portfolio-artigo">
                <header>
                    <h1>Produções</h1>
                </header>
                <section>
                    <p>
                    Aqui estão algumas das minhas produções acadêmicas e artísticas, incluindo trabalhos de programação, design de jogos e artes plásticas. Cada projeto reflete meu interesse em tecnologia, criatividade e inovação.
                    </p>
                </section>
                </article>

                <article>
                <h1>Mapeia</h1>
                <Carrossel imagens={imagensMapeia} />
                <p>
                    Desenvolvido como projeto da disciplina de Concepção de Artefatos digitais, o Mapeia é uma plataforma GovTech baseada em um mapa colaborativo que funciona como um sensor territorial em tempo real. Conecta o monitoramento de field via crowdsourcing (realizado por cidadãos e movimentos sociais de base) à inteligência de dados públicos para identificar e georreferenciar casarões históricos ociosos e degradados no Centro do Recife.
                </p>
                <p>
                    Criado com o objetivo de unificar e cruzar dados de vacância fiscal com critérios de segurança estrutural por meio de algoritmos de triagem, eliminando a fragmentação de informações entre secretarias e cartórios. O sistema gera relatórios automatizados para identificar edificações seguras e aptas para conversão em Habitação de Interesse Social (HIS), combatendo o déficit habitacional.
                </p>
                <p>
                    <strong>Site:</strong>{' '}
                    <a href="https://mapeia.figma.site" target="_blank" rel="noopener noreferrer">
                    www.mapeia.figma.site
                    </a>
                </p>
                </article>

                <article>
                <h1>Ouro e Cachaça</h1>
                <Carrossel imagens={imagensOuroECachaca} />
                <p>
                    Desenvolvido como projeto da disciplina Introdução à Programação com o objetivo de botar em prática os conhecimentos aprendidos em sala, sendo desenvolvido inteiramente em Python, utilizando a biblioteca Pygame. O jogo mistura os gêneros de TCG, roguelike deckbuilder e terror psicológico para apresentar o lado sombrio do folclore brasileiro.
                </p>
                <p>
                    <strong>Github:</strong>{' '}
                    <a href="https://github.com/marialportela10/Ouro-e-Cachaca" target="_blank" rel="noopener noreferrer">
                    github.com/marialportela10/Ouro-e-Cachaca
                    </a>
                </p>
                </article>

                

                <article>
                <h1>The Bunker</h1>
                <Carrossel imagens={imagensTheBunker} />
                <p>
                    Desenvolvido para o processo seletivo da Liga Acadêmica de Jogos Eletrônicos (LAJE), The Bunker é uma experiência 2D single-player de terror psicológico e stealth. Na pele do personagem Damião, o jogador tem o objetivo de escapar de uma clínica macabra e conter o ritual de uma seita obscura. Através de uma interface 2D focada na exploração de cenários, o protótipo permite ao jogador coletar registros para desvendar a história, encontrar rotas de fuga e improvisar recursos e armas com itens do ambiente para sobreviver às ameaças.
                </p>
                <p>
                    <strong>Itch.io:</strong>{' '}
                    <a href="https://vica13.itch.io/the-bunker" target="_blank" rel="noopener noreferrer">
                    https://vica13.itch.io/the-bunker
                    </a>
                </p>
                </article>
            </main>
        </div>
    </>
    );
}