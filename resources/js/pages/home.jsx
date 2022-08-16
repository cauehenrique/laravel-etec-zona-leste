import React, { useEffect, useState } from "react";
import drawComponent from "../reactHelper";

export default function HomePage() {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState(null);

    useEffect(async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            const data = await response.json();

            setPokemon({
                name: data.name,
                frontDefault: data.sprites.front_default,
                backDefault: data.sprites.back_default,
            });
        } catch {
            setPokemon(null);
        }
    }, [pokemonName]);

    return (
        <div className="p-8 flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-400 to-indigo-500">
            <input
                type="text"
                placeholder="Mamma's name"
                className="border-2 border-black rounded px-2"
                value={pokemonName}
                onChange={(e) => {
                    setPokemonName(e.target.value);
                }}
            />
            <p className="font-bold text-lg">{pokemonName}</p>
            {pokemon && (
                <div className="flex">
                    <img
                        style={{ imageRendering: "pixelated" }}
                        className="w-64 h-64"
                        src={pokemon.frontDefault}
                    />
                    <img
                        style={{ imageRendering: "pixelated" }}
                        className="w-64 h-64"
                        src={pokemon.backDefault}
                    />
                </div>
            )}
        </div>
    );
}

drawComponent(<HomePage />);
