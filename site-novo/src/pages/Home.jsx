export default function Home({ setPaginaAtual, alternarTema }) {
    return (
        <>
            <div class="container">
                <div class="perfil-topo">
                    <aside>
                        <figure> <img src="imagens/malu.jpeg" alt= "maru" class="foto-perfil"/></figure>
                    </aside>
                    <main>
                        <h1>Maria Luiza de Paula Potela</h1>
                        <p>Graduanda em Sistemas da Informação no Centro de Informática (CIn) da Universidade Federal de Pernambuco (UFPE).</p>
                        <ul class="badge-lista">
                            <li class="badge">Inglês Avançado</li>
                            <li class="badge">Português Nativo</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}