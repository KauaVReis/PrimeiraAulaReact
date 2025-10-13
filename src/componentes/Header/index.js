
// import './estilo.css'
import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconeHeader from '../IconeHeader/index.js'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color:#FFF;
    display:flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconeHeader></IconeHeader>
        </HeaderContainer>
    )
}
export default Header;