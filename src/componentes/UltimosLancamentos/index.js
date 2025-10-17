import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import { CardRecomenda } from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';
import imagemLivro2 from '../../imagens/livro3.png';
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    & img:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }

  & img{
    width: 150px;
  }
`
function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor={"#000"}
            tamanhoFonte={"36px"}
            alinhamento={"center"}
            >
                ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
            titulo={"Talve você se interesse por"} 
            subtitulo={"Angular 11"} 
            descricao={"Contruindo uma aplicação com a plataforma Google"} 
            img={imagemLivro}/>
            <CardRecomenda 
            titulo={"Talve você se interesse por"} 
            subtitulo={"One piece vol 105"} 
            descricao={"A formação dos Quatro Imperadores mudou e, agora, Luffy é o novo membro desse seleto grupo de piratas! Contudo, com a chegada de uma nova era, o mundo começa a mudar drasticamente enquanto o bando deixa o País de Wano... Que aventuras estão esperando por eles?! Uma nova viagem começa agora!!"} 
            img={imagemLivro2}/>
        </UltimosLancamentosContainer >
    )
}
export default UltimosLancamentos;