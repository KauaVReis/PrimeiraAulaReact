// import './estilo.css'
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const Opcoes = styled.ul`
    display: flex;
`
// Vai se comportar como um li
const Opcao = styled.li` 
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
function OpcoesHeader() {
    return (
        <Opcoes>
            {/* exemplo de refatoração melhor que usar varios li */}
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
            {/* O react pega o array de <li> que o map gerou e redenriza tudo dentro da <ul> */}
        </Opcoes>
    )
}
export default OpcoesHeader;