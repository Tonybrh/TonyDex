
import { useRouter } from "next/router";
import IndividualPoke from "templates/individualPoke";
import { GetStaticPaths } from "next";
interface pokemon {
    name: string;
    sprites: string;
    abilities: {
        ability:{
            name:string;
        }[]
    }
}
export const getStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=251')
    const data = await response.json()
    
    
    console.log(data);
    const paths = data.results.map((pokemon: pokemon, index: number)=> {
        return {
            params: {pokemonId: (index+1).toString()},
        }
    })
    return {
        paths,
        fallback:false,
    }
};

export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonId
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    return {
        props:{pokemon: data}
    }
    
}

export default function Main({pokemon}: any){
    const router = useRouter();
    const pokeId = router.query.pokemonId;
    return(
        <IndividualPoke pokeType={pokemon.types} pokeAbility={pokemon.abilities} pokeNumber={pokeId} pokeImage={pokemon.sprites.front_default} pokeName={pokemon.name}  />
    )

};