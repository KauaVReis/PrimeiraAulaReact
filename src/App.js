import './App.css';
import Logo from './componentes/index.js';
import OpcoesHeader from './componentes/OpcoesHeader/index.js';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const icones = [perfil, sacola]
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
