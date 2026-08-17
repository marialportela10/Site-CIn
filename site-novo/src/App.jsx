import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // aqui a questão de seleção de tema 
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const handleClick = () => {
  setIsDarkMode((prev) => !prev);};
  const [paginaAtual, setPaginaAtual] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="container">
      {/* botao de mudar o tema */}

      {/* o menu */}
      <header>
        <nav>
          <button className="btn-transparente" onClick={() => setPaginaAtual('home')}>Início</button>
          <button className="btn-transparente" onClick={() => setPaginaAtual('sobre')}>Sobre</button>
          <button className="btn-transparente" onClick={() => setPaginaAtual('portfolio')}>Portfólio</button>
          <button 
        className="btn-tema" 
        onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
        </nav>
      </header>

      <main>
        {paginaAtual === 'home' && <Home />}
        {paginaAtual === 'sobre' && <Sobre />}
        {paginaAtual === 'portfolio' && <Portfolio />}
      </main>

      <footer>
        <h3>Formas de contato:</h3>
        <p><strong>Email institucional:</strong> mlpp@cin.ufpe.br</p>
        <p><strong>Email pessoal:</strong> marial.portela10@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/maria-luiza-portela"
            target="_blank"
            rel="noopener noreferrer">
            www.linkedin.com/in/maria-luiza-portela
          </a>
        </p>
        <p>
          <strong>Github:</strong>{' '}
          <a
            href="https://github.com/marialportela10"
            target="_blank"
            rel="noopener noreferrer">
            github.com/marialportela10
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;