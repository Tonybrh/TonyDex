import NavBar from "src/components/NavBar";
import { AboutContainer, AboutImage, AboutImageContainer, Container, TextDiv } from "./style";
import AboutImageSrc from 'public/images/aboutImage.jpg'
import FooterComponent from "src/components/Footer";
export default function AboutAnimePage () {
    return(
        <Container>
            <NavBar />
                <AboutContainer>
                    <AboutImageContainer>
                            <AboutImage src={AboutImageSrc} alt="Imagem do pikachu"  />
                    </AboutImageContainer>
                    <TextDiv>
                    Desde sua estreia em 1997, o anime Pokémon conquistou o coração de fãs de todas as idades ao redor do mundo. Com mais de duas décadas de história, essa franquia icônica continua a cativar novas gerações com sua emocionante jornada repleta de aventuras, amizades e batalhas eletrizantes.

                    Pokémon, criado por Satoshi Tajiri e Ken Sugimori, começou como uma série de jogos para o Game Boy, mas rapidamente se expandiu para outros meios, como mangás, filmes e, claro, a série de animação. O anime acompanha a jornada de um jovem treinador de Pokémon chamado Ash Ketchum, que sonha em se tornar um Mestre Pokémon, o maior título que um treinador pode alcançar. Com seu fiel companheiro, o adorável Pikachu, Ash parte em sua busca por aventuras e pelo título cobiçado.

                    A magia de Pokémon reside na rica diversidade de criaturas chamadas "Pokémon", ou "monstros de bolso", que povoam o mundo fictício. Cada Pokémon possui habilidades únicas e características distintas, o que encanta os espectadores ao descobrirem novas espécies a cada episódio. Além de Pikachu, os fãs se apaixonam por outras criaturas icônicas como Charizard, Bulbasaur, Squirtle e muitas outras.

                    Através de suas viagens, Ash conhece amigos leais e companheiros de equipe que o ajudam em sua jornada. Alguns dos mais memoráveis são Misty, uma treinadora de Pokémon aquáticos com uma personalidade forte, e Brock, um especialista em Pokémon do tipo pedra e um cozinheiro habilidoso. Juntos, o trio cria laços duradouros, enfrenta desafios e cresce tanto como treinadores quanto como pessoas.

                    O cerne do anime Pokémon é o conceito de amizade e respeito pela natureza. Ao longo de sua jornada, Ash sempre busca entender seus Pokémon em um nível mais profundo e valoriza a parceria e o carinho que compartilha com eles. Essa mensagem de amizade e compreensão ressoa com o público, ensinando importantes lições sobre empatia, trabalho em equipe e resiliência.

                    As batalhas Pokémon são uma das partes mais emocionantes do anime. Treinadores competem em arenas chamadas Ginásios, onde batalham contra líderes de Ginásio para obterem insígnias. A cada vitória, Ash se aproxima de seu objetivo de se tornar um Mestre Pokémon. Essas batalhas são intensas e estratégicas, incentivando os espectadores a desenvolverem habilidades táticas e a importância do treinamento.

                    O anime Pokémon também é conhecido por seus filmes emocionantes, que expandem ainda mais o universo Pokémon e oferecem histórias envolventes e emocionantes. Cada filme traz novos desafios e encontros com Pokémon lendários, o que contribui para a mitologia em constante crescimento da franquia.

                    Além disso, Pokémon também ensina importantes valores ambientais. A série apresenta personagens dedicados à proteção da natureza e da vida selvagem, destacando a importância da coexistência harmoniosa entre humanos e Pokémon.

                    Em resumo, Pokémon é muito mais do que apenas um anime. É uma saga épica que atravessa gerações, encantando e inspirando pessoas de todas as idades em todo o mundo. Com suas lições de amizade, respeito e perseverança, Pokémon continua a se destacar como uma das franquias mais queridas e influentes da história da animação. Que a jornada de Ash Ketchum e seus amigos continue a nos emocionar e nos ensinar por muitos anos ainda!
                    </TextDiv>
            </AboutContainer>
            <FooterComponent />
        </Container>
    )
}