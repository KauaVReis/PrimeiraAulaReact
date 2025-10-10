
import './estilo.css'
import Logo from '../index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconeHeader from '../IconeHeader/index.js'

function Header() {
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconeHeader></IconeHeader>
        </header>
    )
}
export default Header;