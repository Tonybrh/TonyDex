import styled, {keyframes} from "styled-components";
import { MdCatchingPokemon } from 'react-icons/md';
import Link from "next/link";
interface LoadingProps{
    show: boolean;
}
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Crie um objeto que mapeia cada tipo a uma cor de fundo
type PlaneProps = {
    sending: boolean;
};
type TypeColors = {
    normal: string;
    fire: string;
    water: string;
    electric: string;
    grass: string;
    ice: string;
    fighting: string;
    poison: string;
    ground: string;
    flying: string;
    psychic: string;
    bug: string;
    rock: string;
    ghost: string;
    dragon: string;
    dark: string;
    steel: string;
    fairy: string;
  };
const typeColors: TypeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  type TypeTitleProps = {
    type: keyof TypeColors;//O componente vai receber type que deve ter um dos valores permitidos no objeto typeColors
  };
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PokeCardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    margin-top: 20px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @media (max-width: 1350px){
      grid-template-columns: repeat(4, 250px);
    };
    @media (max-width: 1100px){
        grid-template-columns: repeat(3, 250px);
    }
    @media (max-width: 800px){
        grid-template-columns: repeat(2, 250px);
    };
    @media(max-width: 550px){
        grid-template-columns: repeat(1, 100%);
    }
`;
export const Card = styled.div<TypeTitleProps>`
    background-color: #d9d9d9;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: transform 0.3s;
        background-color: ${props => typeColors.hasOwnProperty(props.type) ? typeColors[props.type] : 'gray'};;
        color: white;
    }
    @media (max-width: 550px){
        flex-direction: row;
        height: 100px;
        border-radius: 0;
        justify-content: space-around;
        pointer-events: none;
    };
`;  
export const CardP = styled.p`
    font-size: 20px;
    margin-right: auto;
    margin-left: 20px;
    text-transform: capitalize;
    @media (max-width: 800px){
        margin: 0;
    }
`;
export const CardTitle = styled.h1`
    font-size: 24px;
    text-transform: capitalize;
`;
export const TypeContainer = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 20px;
    @media (max-width: 550px){
        flex-direction: column;
    }
`;
export const TypeTitle = styled.p<TypeTitleProps>`
    text-transform: capitalize;
    font-size: 20px;
    background-color: ${props => typeColors[props.type]};
    width: 100px;
    text-align: center;
    border-radius: 5px;
    @media (max-width: 550px){
        width: 70px;
    }
`;
export const MoreButton = styled.button`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 5px;
    margin-top: 50px;
    cursor: pointer;
    background-color: #d9d9d9;
    border: 0;
`
export const LoadingContainer = styled.div<LoadingProps>`
    width: 70px;
    background-color: rgb(50,50,50, 0.8);
    height: 50px;
    margin-top: 200px;
    position: fixed;
    font-size: 2rem;
    display:  ${props => props.show ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    z-index: 1;
`
export const LoadingIcon = styled(MdCatchingPokemon)`
    width: 30px;
    height: 30px;
    animation: ${spinAnimation} 1s infinite linear;
    color: #d9d9d9;
`
export const MediaLink = styled(Link)`
    text-decoration: none;
    color: black ;
`;