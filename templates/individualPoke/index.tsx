import Link from "next/link";
import { Abilitie, AbilitiesContainer, Container, PokeContainer, PokeIdentificationDiv, PokeName, PokeStatusDiv, PokeType, PokemonDiv } from "./style";
import NavBar from "src/components/NavBar";
import { useRouter } from "next/router";
import Image from "next/image";
interface IndividualPokeProps {
    pokeName: string | string[] | undefined;
    pokeImage: string;
    pokeNumber: string | string[] | undefined;
    pokeAbility: {
        ability:{
            name: string;
        }
    }[];
    pokeType: {
        type:{
            name: string;
        }
    }[];
}
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
interface Ability {
    name: string
}
export default function IndividualPoke({pokeName, pokeImage, pokeAbility, pokeNumber, pokeType}:IndividualPokeProps) {
    
    const pokeAbilities = pokeType.map((ability, index:number) =>{
        return ability.type.name
    })
    console.log(pokeAbilities);
    return(
        <Container>
            <NavBar />
            <PokeContainer>
                <PokemonDiv>
                    <PokeIdentificationDiv>
                        <PokeName>N° 000{pokeNumber}</PokeName>
                        <Image src={pokeImage} width={200} height={200} alt="Imagem do pokemon"/>
                        <PokeName>{pokeName}</PokeName>
                    </PokeIdentificationDiv>
                    <PokeStatusDiv>
                        ABILITIES
                        <AbilitiesContainer>
                            {pokeAbility.map((ability, index:number)=>(
                            <Abilitie>{ability.ability.name}</Abilitie>
                        ))}
                        </AbilitiesContainer>
                        TYPES
                        <AbilitiesContainer>
                            {pokeType.map((types, index:number) =>(
                                <PokeType type={types.type.name as keyof TypeColors} >{types.type.name}</PokeType>
                            ))}
                        </AbilitiesContainer>
                    </PokeStatusDiv>
                </PokemonDiv>
            </PokeContainer>
            
        </Container>
    )
}