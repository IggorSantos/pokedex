import React from 'react'

export default function Pokemon({ pokemon }){
  console.log()
  return(
    <div>
     <img src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Deu problema')
    })
    .then((respostaEmObjeto) => respostaEmObjeto)
  return {
    props: {
      pokemon
    },
  }
}

export async function getStaticPaths() {
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
  paths: pokemons.map((pokemon) => ({
    params:{
      id:pokemon.entry_number.toString(),
    }
  })),
  fallback:false,
 }
}
