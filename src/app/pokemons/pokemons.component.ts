import { Component, OnInit } from '@angular/core';

interface Pokemon {
  referencia: String;
  picture: String;
  id: number;
  nombre: String;
  habilidad: String;
  categoria: String;
  tipo: String;
  talla: String;
  peso: String;
  color: String;
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Array<Pokemon> = [];

  constructor() { }

  ngOnInit() {
    this.pokemons = [
      {
        referencia: 'https://www.pokemon.com/es/pokedex/bulbasaur',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        id: 1,
        nombre: 'Bulbasaur',
        habilidad: 'Espesura',
        categoria: 'Semilla',
        tipo: 'Planta',
        talla: '0.7 m',
        peso: '6.9 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(0, 149, 7, 0.8), rgba(1, 255, 14, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/ivysaur',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        id: 2,
        nombre: 'Ivysaur',
        habilidad: 'Espesura',
        categoria: 'Semilla',
        tipo: 'Planta',
        talla: '1.0 m',
        peso: '13.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(0, 149, 7, 0.8), rgba(1, 255, 14, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/venusaur',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        id: 3,
        nombre: 'Venusaur',
        habilidad: 'Espesura',
        categoria: 'Semilla',
        tipo: 'Planta',
        talla: '2.0 m',
        peso: '100.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(0, 149, 7, 0.8), rgba(1, 255, 14, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/charmander',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        id: 4,
        nombre: 'Charmander',
        habilidad: 'Mar Llamas',
        categoria: 'Lagartija',
        tipo: 'Fuego',
        talla: '0.6 m',
        peso: '8.5 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(149, 0, 0, 0.8), rgba(255, 0, 0, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/charmeleon',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        id: 5,
        nombre: 'Charmeleon',
        habilidad: 'Mar Llamas',
        categoria: 'Lagartija',
        tipo: 'Fuego',
        talla: '1.1 m',
        peso: '19.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(149, 0, 0, 0.8), rgba(255, 0, 0, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/charizard',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        id: 6,
        nombre: 'Charizard',
        habilidad: 'Mar Llamas',
        categoria: 'Llama',
        tipo: 'Fuego',
        talla: '1.7 m',
        peso: '90.5 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(149, 0, 0, 0.8), rgba(255, 0, 0, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/squirtle',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        id: 7,
        nombre: 'Squirtle',
        habilidad: 'Torrente',
        categoria: 'Tortuguita',
        tipo: 'Agua',
        talla: '0.5 m',
        peso: '9.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(1, 51, 130, 0.8), rgba(3, 100, 252, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/wartortle',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
        id: 8,
        nombre: 'Wartortle',
        habilidad: 'Torrente',
        categoria: 'Tortuguita',
        tipo: 'Agua',
        talla: '1.0 m',
        peso: '22.5 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(1, 51, 130, 0.8), rgba(3, 100, 252, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/blastoise',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
        id: 9,
        nombre: 'Blastoise',
        habilidad: 'Torrente',
        categoria: 'Tortuguita',
        tipo: 'Agua',
        talla: '1.6 m',
        peso: '85.5 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(1, 51, 130, 0.8), rgba(3, 100, 252, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/pichu',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        id: 172,
        nombre: 'Pichu',
        habilidad: 'Electricidad Estática',
        categoria: 'Ratón',
        tipo: 'Eléctrico',
        talla: '0.3 m',
        peso: '2.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 80, 0, 0.8), rgb(255, 223, 0))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/pikachu',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        id: 25,
        nombre: 'Pikachu',
        habilidad: 'Electricidad Estática',
        categoria: 'Ratón',
        tipo: 'Eléctrico',
        talla: '0.4 m',
        peso: '6.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 80, 0, 0.8), rgb(255, 223, 0))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/raichu',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
        id: 26,
        nombre: 'Raichu',
        habilidad: 'Electricidad Estática',
        categoria: 'Ratón',
        tipo: 'Eléctrico',
        talla: '0.8 m',
        peso: '30.0 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 80, 0, 0.8), rgb(255, 223, 0))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/gastly',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
        id: 92,
        nombre: 'Gastly',
        habilidad: 'Levitación',
        categoria: 'Gas',
        tipo: 'Fantasma',
        talla: '1.3 m',
        peso: '0.1 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 0, 80, 0.8), rgba(188, 0, 255, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/haunter',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
        id: 93,
        nombre: 'Haunter',
        habilidad: 'Levitación',
        categoria: 'Gas',
        tipo: 'Fantasma',
        talla: '1.6 m',
        peso: '0.1 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 0, 80, 0.8), rgba(188, 0, 255, 0.8))'
      },
      {
        referencia: 'https://www.pokemon.com/es/pokedex/gengar',
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
        id: 94,
        nombre: 'Gengar',
        habilidad: 'Levitación',
        categoria: 'Sombra',
        tipo: 'Fantasma',
        talla: '1.5 m',
        peso: '40.5 kg',
        color: 'linear-gradient(to left, rgb(0, 0, 0), rgba(78, 0, 80, 0.8), rgba(188, 0, 255, 0.8))'
      },
    ];
  }
  }

