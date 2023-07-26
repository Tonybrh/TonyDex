import { MediaLink, MenuMobileIcon, MobileButton, NavBarComponent, NavBarLi, NavBarUl, PokeIcon, PokeLogo, PokeLogoContainer} from "./style";
import { useState } from "react";
import PokeLogoSrc from "public/images/pokeLogo.png";
import MobileMenu from "../mobileMenu";
export default function NavBar(){
    const [showModal, setShowModal] = useState(false);
    return(
        <NavBarComponent>
            <MobileMenu showModal={showModal} setShowModal={setShowModal}/>
            <PokeLogoContainer>
                <PokeLogo>TonyDex</PokeLogo>
                <PokeIcon />
            </PokeLogoContainer>
            <NavBarUl>
                <MediaLink href={"/"}><NavBarLi>POKEDEX</NavBarLi></MediaLink>
                <MediaLink href={"/aboutanime"}><NavBarLi>SOBRE O ANIME </NavBarLi></MediaLink>
            </NavBarUl>
            <MobileButton onClick={() => setShowModal(true)}>
                <MenuMobileIcon />
            </MobileButton>
        </NavBarComponent>
    )
}