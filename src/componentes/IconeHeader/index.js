import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
// import './estilo.css'
import styled from 'styled-components'
const Icone = styled.li`
  margin-right: 40px;
  width: 25px
`
const Icones = styled.ul`
  display:flex;
  align-items: center;
`
const icones = [perfil, sacola]
function IconeHeader() {
    return (
        <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}
        </Icones>
    )
}
export default IconeHeader;