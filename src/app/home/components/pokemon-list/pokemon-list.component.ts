import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons;
  public open = false;

  constructor(protected _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this._pokemonService.getPokemons().subscribe(res => this.pokemons = res);
  }
}
