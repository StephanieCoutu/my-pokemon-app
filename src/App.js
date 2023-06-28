import React, { useState } from 'react';
import './App.css';

const App = () => {
  const pokemonData = [
    {
      name: 'Archeduc',
      image: 'archeduc.png',
      abilities: [  
      "Brasénergie",
      "Danse-Plume",
      "Lame d'Air",
    ],
    },
    {
      name: 'Brindibou',
      image: 'Brindibou.png',
      abilities: [
      "Lance-Flamme",
      "Éco-Sphère",
      "Hurlement",
    ],
    },
    {
      name: 'Cerbyllin',
      image: 'cerbyllin.png',
      abilities: [
      "Boule de Feu",
      "Feu Follet",
      "Fouet Lianes",
    ],
    },
    {
      name: 'Clamiral',
      image: 'clamiral.png',
      abilities: [
        "Hydrocanon",
        "Laser Glace",
        "Blizzard",
      ],
    },
    {
      name: 'Effleche',
      image: 'effleche.png',
      abilities: [
        "Bec Vrille",
        "Tranch'Herbe",
        "Aéropique",
      ],
    },
    {
      name: 'Feurisson',
      image: 'feurisson.png',
      abilities: [
        "Roue de Feu",
        "Lance-Flammes",
        "Vitesse Extrême",
      ],
    },
    {
      name: 'Mateloutre',
      image: 'mateloutre.png',
      abilities: [
        "Aqua-Jet",
        "Hydrocanon",
        "Vibraqua",
      ],
    },
    {
      name: 'Moustillon',
      image: 'moustillon.png',
      abilities: [
        "Pistolet à O",
        "Bulles d'O",
        "Griffe",
      ],
    },
    {
      name: 'Paragruel',
      image: 'paragruel.png',
      abilities: [
        "Hydrocanon",
        "Vibraqua",
        "Éboulement",
      ],
    },
    {
      name: 'Typhlosion',
      image: 'typhlosion.png',
      abilities: [
        "Lance-Flamme",
        "Éruption",
        "Roue de Feu",
      ],
    },
  ];

  return (
    <div className="App">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          abilities={pokemon.abilities}
        />
      ))}
    </div>
  );
};

const PokemonCard = ({ name, image, abilities }) => {
  const [showAbilities, setShowAbilities] = useState(false);

  const handleMouseEnter = () => {
    setShowAbilities(true);
  };

  const handleMouseLeave = () => {
    setShowAbilities(false);
  };

  return (
    <div
      className="pokemon-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={process.env.PUBLIC_URL + image} alt={name} />
      {showAbilities && (
        <div className="abilities">
          {abilities.map((ability, index) => (
            <p key={index}>{ability}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

