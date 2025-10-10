import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
import './estilo.css'

const icones = [perfil, sacola]
function IconeHeader() {
    return (
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
    )
}
export default IconeHeader;