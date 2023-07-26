import NavBar from "src/components/NavBar";
import PokeCard from "src/components/PokeCard";
import { Container } from "./style";
import MobileMenu from "src/components/mobileMenu";
import { useState } from "react";
export default function HomePage(){
    const [showModal, setShowModal] = useState(false);
    return(
        <Container>
            <MobileMenu showModal={showModal} setShowModal={setShowModal} />
            <NavBar />
            <PokeCard />
        </Container>
    )
}