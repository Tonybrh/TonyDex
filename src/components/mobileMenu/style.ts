import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"
import {AiOutlineClose} from 'react-icons/ai'
import { MdCatchingPokemon } from 'react-icons/md';

interface ModalProps {
    showModal: boolean;
}
export const Overlay = styled.div<ModalProps>`
    width: 100vw;
    height: 100%;
    z-index: 1;
    background-color: #d9d9d9;
    display: ${props => props.showModal ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
`
export  const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PokeLogo = styled.h1`
    font-size: 36px;
    color: black;
    margin-top: 40px;
    margin-bottom: 200px;
`;
export const ModalLinksUl = styled.ul`
    justify-content: space-around;
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`
export const ModalLi = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
`
export const PokeIcon = styled(MdCatchingPokemon)`
    width: 20px;
    height: 20px;
    color: black;
`
export const MediaLink = styled(Link)`
    color: black;
    text-decoration: none;
`
export const CloseButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    left: 0px;
    margin-left: 30px;
    top: 50px;
`
export const CloseIcon = styled(AiOutlineClose)`
    width: 30px;
    height: 30px;
    color: black;
`