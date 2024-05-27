import { 
    Musica, 
    Artista,
    Infos 
} from "./Style/styleHome";

const Home = ()=>{
    return(
        <>
        <Musica> Too Sweet</Musica>
        <Artista>Canção de Hozier</Artista>
        <Infos> A música foi publicada no dia <strong> 22 de março de 2024</strong> e já possui mais de <strong> 25 milhões</strong> de visualizações, sendo um grande sucesso nas plataformas de música.</Infos>
        </>
    )
}

export default Home;