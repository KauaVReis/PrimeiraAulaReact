const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {/* exemplo de refatoração melhor que usar varios li */}
            {textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
            {/* O react pega o array de <li> que o map gerou e redenriza tudo dentro da <ul> */}
        </ul>
    )
}
export default OpcoesHeader;