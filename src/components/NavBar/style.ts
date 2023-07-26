import  styled  from "styled-components";
import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai'
import { MdCatchingPokemon } from 'react-icons/md';
export const NavBarComponent = styled.nav`
    width: 100%;
    height: 120px;  
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    align-items: center;
    background-color: #d84444;
    @media (max-width: 900px){
        justify-content: center;
    }
`;
export const PokeLogoContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    @media (max-width: 900px){
        margin: 0 auto;
    }
`;
export const PokeLogo = styled.h1`
    font-size: 36px;
    color: white;
`;
export const PokeIcon = styled(MdCatchingPokemon)`
    width: 30px;
    height: 30px;
    color: white;
`
export const NavBarUl = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 26px;
    gap: 20px;
    @media (max-width: 900px){
        display: none;
    }
`;
export const NavBarLi = styled.li`
    white-space: nowrap;
`;
export const MediaLink = styled(Link)`
    height: 70px;   
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease-in-out;
    border-radius: 5px;
     &:hover{
        transition: transform 0.3s;
        transform: scale(1.2);
        cursor: pointer;
    } 
    @media (max-width: 1350px){
      font-size: 1.3rem;
    };
`;
export const MobileButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: none;
    @media (max-width: 900px){
        display: block;
        position: absolute;
        left: 10px;
    };
`
export const MenuMobileIcon = styled(AiOutlineMenu)`
    width: 30px;
    height: 30px;
    color: white;
`
