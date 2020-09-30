import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => {
      return respostaEmObjeto.pokemon_entries;
    })
  return {
    props: {
      pokemons
    },
  }
}

export default function Home(props){
  const {pokemons} = props;

  return(
   <div>
    <Head>
     <title>Pokedex</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ul>
     Pokedex - Igor Santos
     <li>
       <Link href="/">
        <a>Home</a>
       </Link>
     </li>
     <li>
       <Link href="/about">
        <a>Sobre o Projeto</a>
       </Link>
      </li>
    </ul>

    <ul>
       {pokemons.map((pokemon) => (
         <li key={pokemon.entry_number}>
           {pokemon.pokemon_species.name}
         </li>
       ))}
     </ul>
    </div>
  );
}
