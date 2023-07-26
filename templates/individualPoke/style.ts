import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
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
    background-color: #d84444;
    height: 100vh;
`
export const PokeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
export const PokemonDiv = styled.div`
    background-color: #d9d9d9;
    width: 80%;
    display: flex;
    margin-bottom: 100px;
    padding: 2rem;
    border-radius: 10px;
    justify-content: space-between;
    padding: 2rem 20%;
    @media (max-width: 1300px){
        padding: 2rem;
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
export const PokeName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    @media (max-width: 550px) {
        font-size: 1.5rem;
    }
`;
export const PokeIdentificationDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
export const PokeStatusDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    @media (max-width: 450px) {
        font-size: 1.3rem;
    }
`
export const AbilitiesContainer = styled.div`
    display: flex;
    gap: 10px;
    text-transform: uppercase;
    margin-bottom: 40px;
`
export const Abilitie = styled.p`
    font-size: 20px;
    background-color: #d84444;
    text-align: center;
    width: 110px;
    border-radius: 5px;
    text-transform: capitalize;
    color: white;
`
export const PokeType = styled.p<TypeTitleProps>`
    text-transform: capitalize;
    font-size: 20px;
    background-color: ${props => typeColors[props.type]};
    width: 100px;
    text-align: center;
    color: white;
    border-radius: 5px;
`
export const CloseIcon = styled(AiOutlineClose)`
    width: 20px;
    height: 20px;
`
export const CloseButton = styled.button`
    background-color: transparent;
    border: 0;
    position: absolute;
    cursor: pointer;
`