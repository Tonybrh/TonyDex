import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image';
import { Card, CardP, CardTitle, Container, LoadingContainer, LoadingIcon, MediaLink, MoreButton, PokeCardContainer, TypeContainer, TypeTitle } from './style'
import FooterComponent from 'src/components/Footer';
import Link from 'next/link';
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
export default function PokeCard() {
    const [pokeName, SetPokename] = useState<string[]>([]);
    const [pokeImage, setPokeImage] = useState<string[]>([]);
    const [id, setId] = useState<string[]>([])
    const [pokeType1, setPokeType1] = useState<string[]>([]);
    const [pokeType2, setPokeType2] = useState<string[]>([]);
    const [sending, setSending] = useState(false);
    const [nextPokes, setNextPokes] = useState('')
    const [pokeResults, setPokeResults] = useState<any>()
    const [pokeLoaded, setPokeLoaded] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
      setSending(true);
      setTimeout(() => {
        setSending(false);
      }, 3000);
    };
      const handlePoke = async () => {
        try {
          let response = await fetch('https://pokeapi.co/api/v2/pokemon');
          let json = await response.json();
          
          let results = json.results;
          let NextResults = json.next
          setNextPokes(NextResults)
          setPokeResults(results)
          setPokeLoaded(true)
        } 
        catch (e) {   
          console.log(e)
        }  
      }
      useEffect(() => {
        const fetchData = async () => {
          await handlePoke();
        };
        fetchData();
      }, []);
      
      useEffect(() => {
        const handleRenderPoke = async () => {
          if (pokeResults && pokeResults.length > 0) {
          let imageUrls = [];
          let names= [];
          let ids = [];
          let type1 = [];
          let type2 = [];
          for (let i = 0; i < pokeResults.length; i++) {
            let pokemonUrl = pokeResults[i].url;   
            let pokemonResponse = await fetch(pokemonUrl);
            let pokemonJson = await pokemonResponse.json();
            let types1 = pokemonJson.types[0].type.name
            let types2 = pokemonJson.types[1] ? pokemonJson.types[1].type.name : ''
            imageUrls.push(pokemonJson.sprites.front_default)
            names.push(pokemonJson.name)    
            ids.push(pokemonJson.id)
            type1.push(types1);
            type2.push(types2)
          }
          setPokeImage(imageUrls);
          SetPokename(names);
          setId(ids);
          setPokeType1(type1);
          setPokeType2(type2)
          setTimeout(() => {
            setLoading(false)
          }, 1000);
        }
      }
        handleRenderPoke()
      }, [pokeResults, pokeLoaded]);
    const handleMorePoke = async () => {
      try{
        setLoading(true)
        let response = await fetch(nextPokes)
        let json = await response.json()
        let results = json.results;
        let nextResults = json.next
        setNextPokes(nextResults)
        setPokeResults((prevResults:[])=> [...prevResults, ...results])   
      } catch(e){
        console.log(e);
      }
    };            
    return(
      <Container>
        <LoadingContainer show={loading}>
          <LoadingIcon />
        </LoadingContainer>
                <PokeCardContainer onClick={handleClick}>
            {pokeImage.map((imageUrl, index) => ( // usa o novo array com as URLs das imagens no .map()
            <MediaLink href={`pokemon/${id[index]}`}>
          
          <Card type={pokeType1[index] as keyof TypeColors} key={index}>
            <Image src={imageUrl} width={100} height={100} alt={`Imagem do ${pokeName[index]}`} />
            <CardP>n°{id[index]}</CardP>
            <CardTitle>{pokeName[index]}</CardTitle>
            <TypeContainer>
              <TypeTitle type={pokeType1[index] as keyof TypeColors}>{pokeType1[index]}</TypeTitle>
              {pokeType2[index] && (
            <TypeTitle type={pokeType2[index] as keyof TypeColors}>{pokeType2[index]}</TypeTitle>
          )}
            </TypeContainer>
            
          </Card>
          </MediaLink>
        ))}
        </PokeCardContainer>
        <MoreButton onClick={handleMorePoke}>Carregar mais</MoreButton>
        <FooterComponent />
      </Container>

    )
}