"use client"

import getPokemon from "@/components/get-pokemon";
import { useState } from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState(null)

    const handlePokemon = async () => {
        const newPokemon = await getPokemon()
        console.log(newPokemon)
        setPokemon(newPokemon)
      }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
    <div className="flex flex-col items-center justify-center p-5 border-2 border-gray-300 rounded-md">
      <h1>Pokemon Getter</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handlePokemon}>Get Pokemon</button>
    </div>
    <div className="flex flex-col items-center justify-center p-5 border-2 border-gray-300 rounded-md">
      <h2>Pokemon:</h2>
      {pokemon && <p>{pokemon.species.name}</p>}
    </div>
    </div>
  )
}
