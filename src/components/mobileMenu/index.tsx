import { CloseButton, CloseIcon, PokeLogo, MediaLink, ModalContainer, ModalLi, ModalLinksUl, Overlay, PokeIcon } from "./style";
import Logo from 'public/images/pokeLogo.png'
interface MenuProps{
    showModal: boolean;
    setShowModal: (showModal:boolean) => void
}
export default function MobileMenu(
    {showModal, setShowModal}: MenuProps
    ){
    return(
        <Overlay showModal={showModal}>
                <PokeLogo>TonyDex</PokeLogo>
                <CloseButton onClick={() => setShowModal(false)}>
                    <CloseIcon />
                </CloseButton>
            <ModalContainer>
                <ModalLinksUl>
                    <ModalLi>
                        <PokeIcon />
                        <MediaLink href={'/'}>POKEDEX</MediaLink>
                    </ModalLi>
                    <ModalLi>
                        <PokeIcon />
                        <MediaLink href={'/aboutanime'}>SOBRE O ANIME</MediaLink>
                    </ModalLi>
                </ModalLinksUl>
            </ModalContainer>
        </Overlay>
    )
};